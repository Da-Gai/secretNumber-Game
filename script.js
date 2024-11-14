'use strict';
let secretNumber = Math.trunc(Math.random() * 30) + 1;
console.log()
let score = 20;
let highscore = 0;
const dispMessage=function(message){
    document.querySelector('.message').textContent=message;}

document.querySelector('.btn.check').addEventListener('click',function(){
    const guess=Number (document.querySelector('.input').value);
    if(!guess){
        dispMessage('No Number Entered 🚫');
    }
    else if( guess===secretNumber){
     dispMessage('Correct Answer 🎉 🎊');
   document.querySelector('body').style.backgroundColor= '#63C132';
   document.querySelector('.number-placeholder').textContent = secretNumber;
   document.querySelector('.number').style.width = '30rem';
   document.querySelector('body').style.color='#C6C7C4';}
   if (score > highscore) {
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
  }
    
    else if (guess !== secretNumber) {
        if (score > 1) {
          if(guess>secretNumber){
          dispMessage(guess-secretNumber >10? '📈 Too high!' : '📈 high');
          score--;
          document.querySelector('.score').textContent = score;
        }
        if(guess<secretNumber){
            dispMessage(secretNumber-guess >10? '📉 Too low' : '📉 low');
            score--;
            document.querySelector('.score').textContent = score 
        }
            else {
          
          dispMessage('💥 You lost the game!');
          document.querySelector('.score').textContent = 0;
        }
      }

}});
document.querySelector('.btn.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
  
    
    dispMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number-placehol').textContent = '?';
    document.querySelector('.guess').value = '';
  
    document.querySelector('body').style.backgroundColor = '#353B3C';
    document.querySelector('.number').style.width='5%';
  });
