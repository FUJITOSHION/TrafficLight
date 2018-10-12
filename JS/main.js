(function(){
  'use strict';
  var green = document.getElementById('green');
  var yellow = document.getElementById('yellow');
  var red = document.getElementById('red');
  var act = document.getElementById('act');
  var repeatFlag =false;

  var initFunc = function(){
    // 初期値
    green.className='Opacity';
    yellow.className='Opacity';
    red.className='';
  }

  var endFunc = function(){
   //終了時
   act.innerHTML = 'start';
   act.className =''
   repeatFlag =false;
  }

  var change_green = function(){
    repeatFlag =true;
    green.className='';
    yellow.className='Opacity';
    red.className='Opacity';
      act.innerHTML = '';
  }

  var change_yellow = function(){
    repeatFlag =true;
    green.className='Opacity';
    yellow.className='';
    red.className='Opacity';
      act.innerHTML = '';
  }

  var change_red = function(){
    green.className='Opacity';
    yellow.className='Opacity';
    red.className='';
    endFunc();
  }

  initFunc();

  act.onclick =function(){
    if(repeatFlag==true){
      return;
    }
   this.className ='pushed';
   act.innerHTML = '';
   setTimeout(change_green,0);
   setTimeout(change_yellow,1200);
   setTimeout(change_red,2000);
  }
})();
