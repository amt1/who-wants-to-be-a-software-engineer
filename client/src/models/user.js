const PubSub = require('../helpers/pub_sub.js')
const RequestHelper = require('../helpers/request_helper.js')
const QuestionFetcher = require('./question_fetcher.js')

const User = function () {
  this.url = 'http://localhost:3000/api/pda_questions';
  this.request = new RequestHelper(this.url);

};

  User.prototype.bindEvents = function() {
  PubSub.subscribe('UserFormView:user-submitted', (evt) => {
    this.postUser(evt.detail);
  });

  PubSub.subscribe('UserView:user-delete-cliked', (evt) => {
    this.deleteUser(evt.detail);
  });

  PubSub.subscribe('UserView:user-completed', (evt) => {
    this.updateUser(evt.detail);
  });

  // PubSub.subscribe('UserView:update-completed', (evt) => {
  //   this.request.put(evt.detail, {
  //       "status": ""
  //     })
  //     .then((user) => {
  //       PubSub.publish('UserList:data-loaded', user);
  //     });
  // });
};

User.prototype.getData = function() {
  const request = new RequestHelper(this.url);
  request.get()
    .then((questions) => {
      PubSub.publish('UserList:data-loaded', questions);
    })
    .catch(console.error);

};

User.prototype.postUser = function(question) {
  this.request.post(question)
    .then((questions) => {
      PubSub.publish('UserList:data-loaded', questions)

    });
};

User.prototype.deleteUser = function(userID) {
  this.request.delete(userID)
    .then((questions) => {
      PubSub.publish('UserList:data-loaded', questions);
    })
    .catch(console.error);
};



module.exports = User;
