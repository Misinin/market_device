var contacts = document.querySelector('.contacts');
var writeUs = contacts.querySelector('.write-us');
var feedbackPopup = document.querySelector('.modal-feedback');
var closeWriteUs = feedbackPopup.querySelector('.close-button');
var userName = feedbackPopup.querySelector('.user-info');
var email = feedbackPopup.querySelector('[type=email]');
var userLetter = feedbackPopup.querySelector('.user-letter');
var form = feedbackPopup.querySelector('.feedback-form');
var submitBtn = feedbackPopup.querySelector('.button-submit');
var adressPopup = document.querySelector('.modal-adress');
var close = adressPopup.querySelector('.close-button');
var map = document.querySelector('.map');

writeUs.addEventListener('click', function(evt) {
  evt.preventDefault();
  feedbackPopup.classList.add('modal-show');
  userName.focus();
});

closeWriteUs.addEventListener('click', function(evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove('modal-show');
  userName.focus();
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
  if (feedbackPopup.classList.contains('modal-show')) {
    evt.preventDefault();
    feedbackPopup.classList.remove('modal-show');
  }
}
});

map.addEventListener('click', function(evt) {
  evt.preventDefault();
  adressPopup.classList.add('modal-show');
});

close.addEventListener('click', function(evt) {
  evt.preventDefault();
  adressPopup.classList.remove('modal-show');
})

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
  if (adressPopup.classList.contains('modal-show')) {
    evt.preventDefault();
    adressPopup.classList.remove('modal-show');
  }
}
});



