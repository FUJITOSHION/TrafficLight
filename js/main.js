(function() {
  'use strict';
  const yellow = document.getElementById('yellow');
  const red = document.getElementById('red');
  const act = document.getElementById('act');
  let repeatFlag = false;

  let startFunc = function() {
    // 初期値
    yellow.className = 'dark color';
    green.className = 'dark color';
    red.className = 'color';
  }
  let workingFunc = function() {
    //途中
    repeatFlag = true;
    red.className = 'dark color';
    yellow.className = 'dark color';
    green.className = 'dark color';
    act.innerHTML = '';
  }
  let endFunc = function() {
    //終了時
    act.innerHTML = 'start';
    act.className = ''
    repeatFlag = false;
  }
  let changeGreen = function() {
    workingFunc();
    green.className = 'color';
  }
  let changeYellow = function() {
    workingFunc();
    yellow.className = 'color';
  }
  let changeRed = function() {
    workingFunc();
    red.className = 'color';
    endFunc();
  }
  startFunc();

  act.onclick = function() {
    if (repeatFlag) {
      return;
    }
    this.className = 'pushed';
    act.innerHTML = '';

    new Promise(resolve => setTimeout(() => resolve(changeGreen()), 0))
      .then(() => {
        return new Promise(resolve => setTimeout(() => resolve(changeYellow()), 1000));
      }).then(() => {
        return new Promise(resolve => setTimeout(() => resolve(changeRed()), 1000));
      });

  }
})();
