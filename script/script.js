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
    document.getElementById('constimg').src = constimages[i];}

i2 = 0, constimages2 = ["images/const/arena/1.jpg", "images/const/arena/2.jpg", "images/const/arena/3.jpg", "images/const/arena/4.jpg", "images/const/arena/5.jpg", "images/const/arena/6.jpg", "images/const/arena/7.jpg"];
function constImage2() {
  if (i2 < constimages2.length-1) {
   i2++;
    } else {
      i2 = 0;
    }
    document.getElementById('constimg2').src = constimages2[i2];
}

function constFunction() {
  var x = document.getElementById("const");
  var text = document.getElementById("constText");
  var info = document.getElementById("constInfo");
  var randomItem = constimages2[Math.floor(Math.random()*constimages2.length)];
  if (x.style.display === "none") {
    var content = document.createElement("img");
    content.src = "images/const/1.png";
    x.insertBefore(content, text);
    content.setAttribute("id","constimg");
    content.setAttribute("onclick","constImage()")
    x.style.display = "flex";
    var arena = document.createElement("img");
    arena.src = randomItem;
    info.appendChild(arena);
    arena.setAttribute("id","constimg2");
    arena.setAttribute("onclick","constImage2()")
  } else {
    x.style.display = "none";
    x.removeChild(constimg);
    info.removeChild(constimg2);
  }
}

/*Imposter*/
u = 0, imposterimages = ["images/imposter/1.png", "images/imposter/2.png", "images/imposter/3.png", "images/imposter/4.png", "images/imposter/5.png"];
function imposterImage() {
  if (u < imposterimages.length-1) {
   u++;
    } else {
      u = 0;
    }
    document.getElementById('imposterimg').src = imposterimages[u];
}
u2 = 0, imposterimages2 = ["images/imposter/arena/1.jpg", "images/imposter/arena/2.jpg", "images/imposter/arena/3.jpg", "images/imposter/arena/4.jpg", "images/imposter/arena/5.png", "images/imposter/arena/6.jpg", "images/imposter/arena/7.png"];
function imposterImage2() {
  if (u2 < imposterimages2.length-1) {
   u2++;
    } else {
      u2 = 0;
    }
    document.getElementById('imposterimg2').src = imposterimages2[u2];
}

function imposterFunction() {
  var x = document.getElementById("imposter");
  var y = document.getElementById("imposter1");
  var text = document.getElementById("imposterText");
  var info = document.getElementById("imposterInfo");
  var randomItem = imposterimages2[Math.floor(Math.random()*imposterimages2.length)];
  if (x.style.display === "none") {
    var content = document.createElement("img");
    content.src = "images/imposter/1.png";
    var store = document.getElementById("imposter");
    var text = document.getElementById("imposterText");
    store.insertBefore(content, text);
    content.setAttribute("id","imposterimg");
    content.setAttribute("onclick","imposterImage()")
    x.style.display = "flex";
    y.style.backgroundColor = "black";
    y.style.color = "white";
    document.getElementById("imposterLink").style.color = "white"
    var arena = document.createElement("img");
    arena.src = randomItem;
    info.appendChild(arena);
    arena.setAttribute("id","imposterimg2");
    arena.setAttribute("onclick","imposterImage2()")
  } else {
    x.style.display = "none";
    y.style.backgroundColor = "white";
    y.style.color = "black";
    x.removeChild(imposterimg);
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
  var content = document.createElement("img");
  content.src = "images/interview/1.png";
  var text = document.getElementById("interviewText");
  x.insertBefore(content, text);
  content.setAttribute("id","interviewimg");
  content.setAttribute("onclick","interviewImage()")
  x.style.display = "flex";
  y.style.backgroundColor = "black";
  y.style.color = "white";
} else {
  x.style.display = "none";
  y.style.backgroundColor = "white";
  y.style.color = "black";
  x.removeChild(interviewimg);
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
    var content = document.createElement("img");
    content.src = "images/filmclub/1.png";
    var text = document.getElementById("filmClubText");
    x.insertBefore(content, text);
    content.setAttribute("id","filmclubimg");
    content.setAttribute("onclick","filmclubImage()")
    x.style.display = "flex";
  } else {
    x.style.display = "none";
    x.removeChild(filmclubimg);
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
    var text = document.getElementById("text0")
    x.insertBefore(video, text)
    video.setAttribute("id", "silentVideoVideo");
    x.style.display = "block";
  } else {
    x.style.display = "none";
    x.removeChild(silentVideoVideo);
  }
}

/*Calendar*/
c = 0, calendarimages = ["images/calendar/1.png", "images/calendar/2.png"];
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
    var content = document.createElement("img");
    content.src = "images/calendar/1.png";
    var text = document.getElementById("calendarText");
    x.insertBefore(content, text);
    content.setAttribute("id","calendarimg");
    content.setAttribute("onclick","calendarImage()")
    x.style.display = "flex";
  } else {
    x.style.display = "none";
    var store = document.getElementById("calendar");
    store.removeChild(calendarimg);
  }
}

/*WYSINAWYG*/
w = 0, wysinawygimages = ["images/wysinawyg/1.png", "images/wysinawyg/2.png", "images/wysinawyg/3.png", "images/wysinawyg/4.png"];
function wysinawygImage() {
  if (w < wysinawygimages.length-1) {
   w++;
    } else {
      w = 0;
    }
    document.getElementById('wysinawygimg').src = wysinawygimages[w];
}
function wysinawygFunction() {
  var x = document.getElementById("wysinawyg");
  if (x.style.display === "none") {
    var content = document.createElement("img");
    content.src = "images/wysinawyg/1.png";
    var text = document.getElementById("wysinawygText");
    x.insertBefore(content, text);
    content.setAttribute("id","wysinawygimg");
    content.setAttribute("onclick","wysinawygImage()")
    x.style.display = "flex";
  } else {
    x.style.display = "none";
    x.removeChild(wysinawygimg);
  }
}

/*Lugemik*/
l = 0, lugemikimages = ["images/lugemik/1.png", "images/lugemik/2.png", "images/lugemik/3.png", "images/lugemik/4.png", "images/lugemik/5.png"];
function lugemikImage() {
  if (l < lugemikimages.length-1) {
   l++;
    } else {
      l = 0;
    }
    document.getElementById('lugemikimg').src = lugemikimages[l];
}

function lugemikFunction() {
  var x = document.getElementById("lugemik");
  if (x.style.display === "none") {
    var content = document.createElement("img");
    content.src = "images/lugemik/1.png";
    var text = document.getElementById("lugemikText");
    x.insertBefore(content, text);
    content.setAttribute("id","lugemikimg");
    content.setAttribute("onclick","lugemikImage()")
    x.style.display = "flex";
  } else {
    x.style.display = "none";
    x.removeChild(lugemikimg);
  }
}

/*Pregnancy*/
p = 0, pregnancyimages = ["images/pregnancy/1.png", "images/pregnancy/2.png", "images/pregnancy/3.png", "images/pregnancy/4.png", "images/pregnancy/5.png"];
function pregnancyImage() {
  if (p < pregnancyimages.length-1) {
   p++;
    } else {
      p = 0;
    }
    document.getElementById('pregnancyimg').src = pregnancyimages[p];
}
function pregnancyFunction() {
  var x = document.getElementById("pregnancy");
  var y = document.getElementById("pregnancy1");
  if (x.style.display === "none") {
    var content = document.createElement("img");
    content.src = "images/pregnancy/1.png";
    var text = document.getElementById("pregnancyText");
    x.insertBefore(content, text);
    content.setAttribute("id","pregnancyimg");
    content.setAttribute("onclick","pregnancyImage()")
    x.style.display = "flex";
    y.style.backgroundColor = "black";
    y.style.color = "white";
  } else {
    x.style.display = "none";
    y.style.backgroundColor = "white";
    y.style.color = "black";
    x.removeChild(pregnancyimg);
  }
}

/*Lollipop VIP*/
function lollipopFunction() {
  var x = document.getElementById("lollipop");
  if (x.style.display === "none") {
    var video = document.createElement('video');
    video.src = 'https://cdn.glitch.com/2e0cf87a-999b-4b20-bf6a-2358bd8f52f0%2FCrushed%20lollipop%20VIP.mp4?1550950794348';
    video.autoplay = false;
    video.controls = true;
    var text = document.getElementById("text2");
    x.insertBefore(video, text);
    video.setAttribute("id", "lollipopVideo");
    x.style.display = "block";
  } else {
    x.style.display = "none";
    x.removeChild(lollipopVideo);
  }
}

/*Hypergraphics*/
h = 0, hyperimages = ["images/hyper/1.png", "images/hyper/2.png", "images/hyper/3.png"];
function hyperImage() {
  if (h < hyperimages.length-1) {
   h++;
    } else {
      h = 0;
    }
    document.getElementById('hyperimg').src = hyperimages[h];
}
function hyperFunction() {
  var x = document.getElementById("hyper");
  if (x.style.display === "none") {
    var content = document.createElement("img");
    content.src = "images/hyper/1.png";
    var text = document.getElementById("hyperText");
    x.insertBefore(content, text);
    content.setAttribute("id","hyperimg");
    content.setAttribute("onclick","hyperImage()")
    x.style.display = "flex";
  } else {
    x.style.display = "none";
    x.removeChild(hyperimg);
  }
}

/*Полигамия суицид*/
function toteFunction() {
  var x = document.getElementById("tote");
  if (x.style.display === "none") {
    x.style.display = "flex";
    var content = document.createElement("img");
    content.src = "images/tote/1.jpg";
    var text = document.getElementById("toteText");
    x.insertBefore(content, text);
    content.setAttribute("id","toteimg");
    x.style.display = "flex";
  } else {
    x.style.display = "none";
    x.removeChild(toteimg);
  }
}

/*Face book*/
fb = 0, fbimages = ["images/fb/1.jpg", "images/fb/2.jpg", "images/fb/3.jpg"];
function fbImage() {
  if (fb < fbimages.length-1) {
   fb++;
    } else {
      fb = 0;
    }
    document.getElementById('fbimg').src = fbimages[fb];
}
function fbFunction() {
  var x = document.getElementById("fb");
  var y = document.getElementById("fb1");
  if (x.style.display === "none") {
    var content = document.createElement("img");
    content.src = "images/fb/1.jpg";
    var text = document.getElementById("fbText");
    x.insertBefore(content, text);
    content.setAttribute("id","fbimg");
    content.setAttribute("onclick","fbImage()")
    x.style.display = "flex";
    y.style.backgroundColor = "black";
    y.style.color = "white";
  } else {
    x.style.display = "none";
    y.style.backgroundColor = "white";
    y.style.color = "black";
    x.removeChild(fbimg);
  }
}
