(function(){
  'use strict';
  const yellow = document.getElementById('yellow');
  const red = document.getElementById('red');
  const act = document.getElementById('act');
  let repeatFlag =  false;

  const startFunc =  function(){
    // 初期値
    yellow.className=green.className=  'dark color';
    red.className=  'color';
  }
  const workingFunc =  function(){
    //途中
    repeatFlag =  true;
    red.className=yellow.className=green.className=  'dark color';
    act.innerHTML =  '';
  }
  const endFunc = function(){
    //終了時
    act.innerHTML =  'start';
    act.className =  ''
    repeatFlag =  false;
  }
  const changeGreen =  function(){
    workingFunc();
    green.className=  'color';
  }
  const changeYellow =  function(){
    workingFunc();
    yellow.className=  'color';
  }
  const changeRed =  function(){
    workingFunc();
    red.className=  'color';
    endFunc();
  }
  startFunc();

  act.onclick =   function(){
    if(repeatFlag){
      return;
    }
    this.className =  'pushed';
    act.innerHTML =  '';

    new Promise(resolve => setTimeout(() => resolve(changeGreen()), 0))
    .then(() => {
      return new Promise(resolve => setTimeout(() => resolve(changeYellow()), 1000));
    }).then(() => {
        return new Promise(resolve => setTimeout(() => resolve(changeRed()), 1000));
      });

  }
})();
