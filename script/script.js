/*Contacts*/
function contactsFunction() {
  var x = document.getElementById("asterisk");
  var y = document.getElementById("contacts");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "block"
  }
}

/*Menu items*/
window.onload = function() {
  var contents = document.getElementsByClassName("content");
  for(var i = 0; i < contents.length; i++) {
    contents[i].style.display = "none";}
  };

/*Constitution*/
i = 0, constimages = ["images/const/1.png", "images/const/2.gif", "images/const/3.png"];

function constImage() {
  if (i < constimages.length-1) {
   i++;
    } else {
      i = 0;
    }
    document.getElementById('constimg').src = constimages[i];
}
function constFunction() {
  var x = document.getElementById("const");
  var y = document.getElementById("const1");
  if (x.style.display === "none") {
    x.style.display = "flex";
    y.style.backgroundColor = "black";
    y.style.color = "white";
  } else {
    x.style.display = "none";
    y.style.backgroundColor = "white";
    y.style.color = "black";
    document.getElementById('constimg').src = constimages[0];
  }
}

/*Imposter*/
u = 0, imposterimages = ["images/imposter/1.png", "images/imposter/2.png", "images/imposter/31.jpg", "images/imposter/32.jpg", "images/imposter/41.jpg", "images/imposter/42.jpg", "images/imposter/51.jpg", "images/imposter/52.jpg"];

function imposterImage() {
  if (u < imposterimages.length-1) {
   u++;
    } else {
      u = 0;
    }
    document.getElementById('imposterimg').src = imposterimages[u];
}
function imposterFunction() {
  var x = document.getElementById("imposter");
  var y = document.getElementById("imposter1");
  if (x.style.display === "none") {
    x.style.display = "flex";
    y.style.backgroundColor = "black";
    y.style.color = "white";
  } else {
    x.style.display = "none";
    y.style.backgroundColor = "white";
    y.style.color = "black";
    document.getElementById('imposterimg').src = imposterimages[0];
  }
}

/*Interview*/
z = 0, interviewimages = ["images/interview/1.png", "images/interview/2.png", "images/interview/3.png", "images/interview/4.png"];

function interviewImage() {
  if (z < interviewimages.length-1) {
   z++;
    } else {
      z = 0;
    }
    document.getElementById('interviewimg').src = interviewimages[z];
}

function interviewFunction() {
  var x = document.getElementById("interview");
  var y = document.getElementById("interview1");
  if (x.style.display === "none") {
    x.style.display = "flex";
    y.style.backgroundColor = "black";
    y.style.color = "white";
  } else {
    x.style.display = "none";
    y.style.backgroundColor = "white";
    y.style.color = "black";
    document.getElementById('interviewimg').src = interviewimages[0];
  }
}
/*Film club*/
f = 0, filmclubimages = ["images/filmclub/1.png", "images/filmclub/2.png", "images/filmclub/3.png", "images/filmclub/4.png"];
function filmclubImage() {
  if (f < filmclubimages.length-1) {
   f++;
    } else {
      f = 0;
    }
    document.getElementById('filmclubimg').src = filmclubimages[f];
}
function filmClubFunction() {
  var x = document.getElementById("filmClub");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
    document.getElementById('filmclubimg').src = filmclubimages[0];
  }
}

/*Silent video*/



function silentVideoFunction() {
  var x = document.getElementById("silentVideo");
  if (x.style.display === "none") {
    var video = document.createElement('video');
    video.src = 'https://cdn.glitch.com/2e0cf87a-999b-4b20-bf6a-2358bd8f52f0%2F1.mp4?1550940475371';
    video.autoplay = false;
    video.controls = true;
    var silentVideo = document.getElementById("silentVideo")
    var text = document.getElementById("text")
    silentVideo.insertBefore(video, text)

    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}

/*Calendar*/
c = 0, calendarimages = ["images/filmclub/1.png", "images/filmclub/2.png", "images/filmclub/3.png", "images/filmclub/4.png"];
function calendarImage() {
  if (c < calendarimages.length-1) {
   c++;
    } else {
      c = 0;
    }
    document.getElementById('calendarimg').src = calendarimages[c];
}
function calendarFunction() {
  var x = document.getElementById("calendar");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}

function wysinawygFunction() {
  var x = document.getElementById("wysinawyg");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}

function lugemikFunction() {
  var x = document.getElementById("lugemik");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}

function pregnancyFunction() {
  var x = document.getElementById("pregnancy");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}

function lollipopFunction() {
  var x = document.getElementById("lollipop");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}

function toteFunction() {
  var x = document.getElementById("tote");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}
