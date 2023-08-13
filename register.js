
let elements = document.getElementsByClassName('innerbox');
 function myEventListener(){
    let box = document.querySelector('.centerinner')
    box.style.display ="flex";
 }
 for (let index = 0; index < elements.length; index++) {
    elements[index].addEventListener( 'click',myEventListener);
    
 }
 
 let element = document.querySelector('.fa-sharp');
 function myEvent(){
    let wrong = document.querySelector('.centerinner')
    wrong.style.display ='none';
 }
 
 element.addEventListener('click',myEvent);


 let registerbutton = document.querySelector('.register')
 function myevents(){
   let congrats = document.querySelector('.outer')
   congrats.style.display ='flex';
 }
 registerbutton.addEventListener('click',myevents)


 let wrongbutton = document.querySelector('.fa-wrong')
 function myeventwrong(){
   let wrongbutton = document.querySelector('.outer')
   wrongbutton.style.display = 'none'
 }
wrongbutton.addEventListener('click',myeventwrong)
 


