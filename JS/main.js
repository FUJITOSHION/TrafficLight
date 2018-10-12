(function(){
  'use strict';
  var green = document.getElementById('green');
  var yellow = document.getElementById('yellow');
  var red = document.getElementById('red');
  var act = document.getElementById('act');
  var repeatFlag =false;

  var initFunc = function(){
    // 初期値
    yellow.className=green.className='Dark';
    red.className='';
  }

  var endFunc = function(){
   //終了時
   act.innerHTML = 'start';
   act.className = ''
   repeatFlag =false;
  }
  var inact = function(){
  //途中
  repeatFlag =true;
  red.className=yellow.className=green.className='Dark';
  act.innerHTML = '';
  }
  var change_green = function(){
    inact();
    green.className='';
  }

  var change_yellow = function(){
    inact();
    yellow.className='';
  }

  var change_red = function(){
    inact();
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
