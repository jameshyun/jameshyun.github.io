var myImage = document.querySelector('img');
console.log('hey')
myImage.onclick = function () {
  var mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute('src', 'images/firefox2.png');
  } else {
    myImage.setAttribute('src', 'images/firefox-icon.png');
  }
}

var myButton = document.querySelector('button');
myButton.onclick = function () {
  setUserName();
}
var myHeading = document.querySelector('h1');


document.querySelector('html').onclick = function () {
  console.log('Ouch! Stop poking me!')
}

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;

  if (!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }
}
