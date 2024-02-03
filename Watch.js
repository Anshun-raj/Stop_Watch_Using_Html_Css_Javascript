let counter = document.getElementById("watch");
sc = 0;
mt = 0;
hr = 0;

stop_count = true;

function startTimer() {
  if (stop_count == true) {
    stop_count = false;
  }

  countRepeat();
}

function countRepeat() {
  if (stop_count == false) {
    sc = parseInt(sc);
    mt = parseInt(mt);
    hr = parseInt(hr);

    sc = sc + 1;

    if (sc == 60) {
      min = min + 1;
    }

    if (mt == 60) {
      hr = hr + 1;
      mt = 0;
      sc = 0;
    }

    if (hr < 10) {
      hr = "0" + hr;
    }

    if (mt < 10) {
      mt = "0" + mt;
    }

    if (sc < 10) {
      sc = "0" + sc;
    }

    counter.innerHTML = hr + ":" + mt + ":" + sc;
    setTimeout("countRepeat()", 1000);
  }
}

function stopTimer() {
  if (stop_count == false) {
    stop_count = true;
  }
}

function resetTimer() {
  counter.innerText = "00:00:00";
  hr = 0;
  mt = 0;
  sc = 0;
}
