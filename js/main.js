(function(){
  'use strict';
  let green = document.getElementById('green');
  let yellow = document.getElementById('yellow');
  let red = document.getElementById('red');
  let act = document.getElementById('act');
  let repeatFlag =false;

  let startFunc = function(){
    // 初期値
    yellow.className=green.className='Dark color';
    red.className='color';
  }
  let workingFunc = function(){
    //途中
    repeatFlag =true;
    red.className=yellow.className=green.className='Dark color';
    act.innerHTML = '';
  }
  let endFunc = function(){
   //終了時
   act.innerHTML = 'start';
   act.className = ''
   repeatFlag =false;
  }
  let change_green = function(){
    workingFunc();
    green.className='color';
  }
  let change_yellow = function(){
    workingFunc();
    yellow.className='color';
  }
  let change_red = function(){
    workingFunc();
    red.className='color';
    endFunc();
  }
  startFunc();

  act.onclick =function(){
    if(repeatFlag==true){
      return;
    }
   this.className ='pushed';
   act.innerHTML = '';

   new Promise(resolve => setTimeout(() => resolve(change_green()), 0)
   ).then(() => {
     return new Promise(resolve => setTimeout(() => resolve(change_yellow()), 1000));
   }).then(() => {
     return new Promise(resolve => setTimeout(() => resolve(change_red()), 1000));
   });

 }
})();
