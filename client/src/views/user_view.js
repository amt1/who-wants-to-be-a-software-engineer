const PubSub = require('../helpers/pub_sub.js');

const UserView = function(container) {
  this.container = container;

};

UserView.prototype.render = function(user) {
  this.emptyElement();

  const userContainer = document.createElement('div');
  userContainer.id = 'users';

  const name = this.createHeading(user.name);
  userContainer.appendChild(name);

  // 
  // //
  // const score = this.createHeading();
  // userContainer.appendChild(score);

 // const completeButton = document.createElement('button');
 // completeButton.textContent = 'Complete';
 // completeButton.value = user._id;
 // userContainer.appendChild(completeButton);

  // const button = document.createElement('submit');
  // button.classList.add('submit');


  //
  //

  // completeButton.value = user._id;
  // userContainer.appendChild(completeButton);
  //
  // completeButton.addEventListener('click', (evt) => {
  //   PubSub.publish('UserView:update-completed', evt.target.value);
  // });
  // //
  // const deleteButton = this.createDeleteButton(user._id);
  // userContainer.appendChild(deleteButton);

  this.container.appendChild(userContainer);

};


 UserView.prototype.createHeading = function(textContent) {
  const heading = document.createElement('h3');
  heading.textContent = textContent;
  return heading;
};

 UserView.prototype.createDetail = function(textContent) {
  const detail = document.createElement('p');
  detail.textContent = textContent;
  return detail;
};

UserView.prototype.emptyElement = function () {
  this.container.innerHTML = '';
};

//  UserView.prototype.createDeleteButton = function(userId) {
//   const button = document.createElement('button');
//
//   button.value = user.Id;
//   button.textContent = "delete";
//
//   button.addEventListener('click', (evt) => {
//     PubSub.publish('UserView:user-delete-cliked', evt.target.value);
//   });
//   return button;
// };




module.exports = UserView;
