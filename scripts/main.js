let myImage = document.querySelector('img'); 

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src'); 

    if(mySrc === 'images/sophie-curled-up.jpg'){
        myImage.setAttribute('src', 'images/sophie-curled-up.jpg'); 

    }else{
        myImage.setAttribute('src', 'images/sophie-on-desk.jpg')
    }

}