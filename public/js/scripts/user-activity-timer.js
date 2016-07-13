var timeoutID;

function setupUserActivityTimer() {

  var el = document.getElementById("playerContainer");
  var le = window;
  var elem = document.body;

  el.addEventListener("mousemove", resetTimer, false);
  el.addEventListener("mousedown", resetTimer, false);
  el.addEventListener("keypress", resetTimer, false);
  el.addEventListener("DOMMouseScroll", resetTimer, false);
  el.addEventListener("mousewheel", resetTimer, false);
  el.addEventListener("touchmove", resetTimer, false);
  el.addEventListener("MSPointerMove", resetTimer, false);

  //watching for tap-events on mobile devices
  le.addEventListener("touchstart", resetTimer, false);
  le.addEventListener("touchmove", resetTimer, false);
  le.addEventListener("touchend", resetTimer, false);
  le.addEventListener("touchleave", resetTimer, false);
  le.addEventListener("touchcancel", resetTimer, false);

  startTimer();
}

function startTimer() {
  // wait 3 seconds before calling goInactive
  timeoutID = window.setTimeout(goInactive, 3000);
}

function resetTimer(e) {
  window.clearTimeout(timeoutID);

  goActive();
}

function goInactive() {
  $('#stuffToHide').addClass("inactive")
  $('#stuffToHide2').addClass("inactive")
}

function goActive() {
  $('#stuffToHide').removeClass("inactive")
  $('#stuffToHide2').removeClass("inactive")

  startTimer();
}
