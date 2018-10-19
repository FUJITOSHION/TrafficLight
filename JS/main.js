(function(){
  'use strict';
  var green = document.getElementById('green');
  var yellow = document.getElementById('yellow');
  var red = document.getElementById('red');
  var act = document.getElementById('act');
  var repeatFlag =false;

  var startFunc = function(){
    // 初期値
    yellow.className=green.className='Dark';
    red.className='';
  }
  var workingFunc = function(){
    //途中
    repeatFlag =true;
    red.className=yellow.className=green.className='Dark';
    act.innerHTML = '';
  }
  var endFunc = function(){
   //終了時
   act.innerHTML = 'start';
   act.className = ''
   repeatFlag =false;
  }
  var change_green = function(){
    workingFunc();
    green.className='';
  }
  var change_yellow = function(){
    workingFunc();
    yellow.className='';
  }
  var change_red = function(){
    workingFunc();
    red.className='';
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
