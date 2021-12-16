let myImage = document.querySelector('img'); 

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src'); 

    if(mySrc === 'images/sophie-on-desk.jpg'){
        myImage.setAttribute('src', 'images/sophie-curled-up.jpg'); 

    }else{
        myImage.setAttribute('src', 'images/sophie-on-desk.jpg')
    }

}

let myButton = document.querySelector('button'); 
let myHeading = document.querySelector('h1'); 

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Sophie is cool, ' + myName;
    }
  }

if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName = localStorage.getItem('name'); 
    myHeading.textContent = 'Sophie is cool, ' + storedName; 
}

myButton.onclick = function(){
    setUserName(); 
}