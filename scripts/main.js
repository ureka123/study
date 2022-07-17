let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/aox.png') {
      myImage.setAttribute('src', 'images/aox2.png');
    } else {
      myImage.setAttribute('src', 'images/aox.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
 }
 
 function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Mozilla 酷毙了，' + myName;
    }
  }