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
  if (x.style.display === "none") {
    var content = document.createElement("img");
    content.src = "images/const/1.png";
    var store = document.getElementById("const");
    var text = document.getElementById("constText");
    store.insertBefore(content, text);
    content.setAttribute("id","constimg");
    content.setAttribute("onclick","constImage()")
    x.style.display = "flex";
  } else {
    x.style.display = "none";
    var store = document.getElementById("const");
    store.removeChild(constimg);
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
  } else {
    x.style.display = "none";
    y.style.backgroundColor = "white";
    y.style.color = "black";
    var store = document.getElementById("imposter");
    store.removeChild(imposterimg);
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
  var store = document.getElementById("interview");
  var text = document.getElementById("interviewText");
  store.insertBefore(content, text);
  content.setAttribute("id","interviewimg");
  content.setAttribute("onclick","interviewImage()")
  x.style.display = "flex";
  y.style.backgroundColor = "black";
  y.style.color = "white";
} else {
  x.style.display = "none";
  y.style.backgroundColor = "white";
  y.style.color = "black";
  var store = document.getElementById("interview");
  store.removeChild(interviewimg);
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
    var store = document.getElementById("filmClub");
    var text = document.getElementById("filmClubText");
    store.insertBefore(content, text);
    content.setAttribute("id","filmclubimg");
    content.setAttribute("onclick","filmclubImage()")
    x.style.display = "flex";
  } else {
    x.style.display = "none";
    var store = document.getElementById("filmClub");
    store.removeChild(filmclubimg);
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
    var text = document.getElementById("text0")
    silentVideo.insertBefore(video, text)
    video.setAttribute("id", "silentVideoVideo");
    x.style.display = "block";
  } else {
    x.style.display = "none";
    var silentVideo = document.getElementById("silentVideo");
    silentVideo.removeChild(silentVideoVideo);
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
    var store = document.getElementById("calendar");
    var text = document.getElementById("calendarText");
    store.insertBefore(content, text);
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
    var store = document.getElementById("wysinawyg");
    var text = document.getElementById("wysinawygText");
    store.insertBefore(content, text);
    content.setAttribute("id","wysinawygimg");
    content.setAttribute("onclick","wysinawygImage()")
    x.style.display = "flex";
  } else {
    x.style.display = "none";
    var store = document.getElementById("wysinawyg");
    store.removeChild(wysinawygimg);
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
    var store = document.getElementById("lugemik");
    var text = document.getElementById("lugemikText");
    store.insertBefore(content, text);
    content.setAttribute("id","lugemikimg");
    content.setAttribute("onclick","lugemikImage()")
    x.style.display = "flex";
  } else {
    x.style.display = "none";
    var store = document.getElementById("lugemik");
    store.removeChild(lugemikimg);
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
    var store = document.getElementById("pregnancy");
    var text = document.getElementById("pregnancyText");
    store.insertBefore(content, text);
    content.setAttribute("id","pregnancyimg");
    content.setAttribute("onclick","pregnancyImage()")
    x.style.display = "flex";
    y.style.backgroundColor = "black";
    y.style.color = "white";
  } else {
    x.style.display = "none";
    y.style.backgroundColor = "white";
    y.style.color = "black";
    var store = document.getElementById("pregnancy");
    store.removeChild(pregnancyimg);
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
    var lollipop = document.getElementById("lollipop");
    var text = document.getElementById("text2");
    lollipop.insertBefore(video, text);
    video.setAttribute("id", "lollipopVideo");
    x.style.display = "block";
  } else {
    x.style.display = "none";
    var lollipop = document.getElementById("lollipop");
    lollipop.removeChild(lollipopVideo);
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
    var store = document.getElementById("hyper");
    var text = document.getElementById("hyperText");
    store.insertBefore(content, text);
    content.setAttribute("id","hyperimg");
    content.setAttribute("onclick","hyperImage()")
    x.style.display = "flex";
  } else {
    x.style.display = "none";
    var store = document.getElementById("hyper");
    store.removeChild(hyperimg);
  }
}

/*Полигамия суицид*/
function toteFunction() {
  var x = document.getElementById("tote");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
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
    var store = document.getElementById("fb");
    var text = document.getElementById("fbText");
    store.insertBefore(content, text);
    content.setAttribute("id","fbimg");
    content.setAttribute("onclick","fbImage()")
    x.style.display = "flex";
    y.style.backgroundColor = "black";
    y.style.color = "white";
  } else {
    x.style.display = "none";
    y.style.backgroundColor = "white";
    y.style.color = "black";
    var store = document.getElementById("fb");
    store.removeChild(fbimg);
  }
}
