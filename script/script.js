/*Contacts*/
function contactsFunction() {
  var x = document.getElementById("asterisk");
  var y = document.getElementById("contacts");
  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.display = "block"
  } else {
    x.style.display = "block";
    y.style.display = "none";
  }
}
function asteriskFunction() {
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
/*Эта фунция находит все элементы с контентом и скрывает их при загрузке страницы. Тем не менее при загрузке иногда можно видеть, как тексты мелькают, а только потом скрываются. Именно поэтому я не вставляю картинки сразу в html, если бы они там были, сначала бы они сто лет грузились, а только потом срабатывал бы файл JS, который бы их скрывал, и было бы некрасиво. Это drawback того, что у меня весь контент на одной html странице*/
window.onload = function() {
  var contents = document.getElementsByClassName("content");
  for(var i = 0; i < contents.length; i++) {
    contents[i].style.display = "none";}
  var x = document.getElementById("asterisk");
  var y = document.getElementById("contacts");
  x.style.display = "block";
  y.style.display = "none"
  };


su = 0, sunimages = ["images/sun/1.png", "images/sun/2.png"];

function sunImage() {
     if (su < sunimages.length-1) {
      su++;
       } else {
         su = 0;
       }
       document.getElementById('sunimg').src = sunimages[su];
   }
 function sunFunction() {
     var x = document.getElementById("sun");
     if (x.style.display === "none") {
       var content = document.createElement("img");
       content.src = "images/sun/1.png";
       content.classList.add("box", "faded-out");
       requestAnimationFrame(() => {
       content.classList.remove("faded-out")
       });
       var text = document.getElementById("sunText");
       x.insertBefore(content, text);
       text.classList.add("box", "faded-out");
       requestAnimationFrame(() => {
       text.classList.remove("faded-out")
       });
       content.setAttribute("id","sunimg");
       content.setAttribute("onclick","sunImage()")
       x.style.display = "flex";
     } else {
       x.style.display = "none";
       x.removeChild(sunimg);
     }
   }

  rim = 0, rimaimages = ["images/rima/1.png"];
   function rimaImage() {
     if (rim < rimaimages.length-1) {
      f++;
       } else {
         f = 0;
       }
       document.getElementById('rimaimg').src = rimaimages[f];
   }
   function rimaFunction() {
     var x = document.getElementById("rima");
     if (x.style.display === "none") {
       var content = document.createElement("img");
       content.src = "images/rima/1.png";
       content.classList.add("box", "faded-out");
       requestAnimationFrame(() => {
       content.classList.remove("faded-out")
       });
       var text = document.getElementById("rimaText");
       x.insertBefore(content, text);
       text.classList.add("box", "faded-out");
       requestAnimationFrame(() => {
       text.classList.remove("faded-out")
       });
       content.setAttribute("id","rimaimg");
       content.setAttribute("onclick","rimaImage()")
       x.style.display = "flex";
     } else {
       x.style.display = "none";
       x.removeChild(rimaimg);
     }
   }


rin = 0, rinaimages = ["images/rina/1.png"];
 function rinaImage() {
   if (rin < rinaimages.length-1) {
    f++;
     } else {
       f = 0;
     }
     document.getElementById('rinaimg').src = rinaimages[f];
 }
 function rinaFunction() {
   var x = document.getElementById("rina");
   if (x.style.display === "none") {
     var content = document.createElement("img");
     content.src = "images/rina/1.png";
     content.classList.add("box", "faded-out");
     requestAnimationFrame(() => {
     content.classList.remove("faded-out")
     });
     var text = document.getElementById("rinaText");
     x.insertBefore(content, text);
     text.classList.add("box", "faded-out");
     requestAnimationFrame(() => {
     text.classList.remove("faded-out")
     });
     content.setAttribute("id","rinaimg");
     content.setAttribute("onclick","rinaImage()")
     x.style.display = "flex";
   } else {
     x.style.display = "none";
     x.removeChild(rinaimg);
   }
 }


  u = 0, daughtersimages = ["images/daughters/1.png", "images/daughters/2.png", "images/daughters/3.png", "images/daughters/4.png", "images/daughters/5.png", "images/daughters/6.png"];
  function daughtersImage() {
    if (u < daughtersimages.length-1) {
     u++;
      } else {
        u = 0;
      }
      document.getElementById('daughtersimg').src = daughtersimages[u];
  }

  /*Та же функция с открытием/скрытием контента, только немного более сложная, потому что здесь создается больше жлем ентов, но структура точно такая же*/
  function daughtersFunction() {
    var x = document.getElementById("daughters");
    var y = document.getElementById("daughters1");
    var text = document.getElementById("daughtersText");
    var info = document.getElementById("daughtersInfo");
    if (x.style.display === "none") {
      var content = document.createElement("img");
      content.src = "images/daughters/1.png";
      content.classList.add("box", "faded-out");
      requestAnimationFrame(() => {
      content.classList.remove("faded-out")
      });
      var text = document.getElementById("daughtersText");
      x.insertBefore(content, text);
      text.classList.add("box", "faded-out");
      requestAnimationFrame(() => {
      text.classList.remove("faded-out")
      });
      content.setAttribute("id","daughtersimg");
      content.setAttribute("onclick","daughtersImage()")
      x.style.display = "flex";

    } else {
      x.style.display = "none";
      x.removeChild(daughtersimg);
      info.removeChild(daughtersimg2);
      info.removeChild(daughtersLink);
    }
  }


/*Rietveld*/
/*Эта функция котрывает/закрывает контент проекта*/
function rietveldFunction() {
  /*Переменная х это тот контейнер, в котором у тебя лежит контент*/
  var x = document.getElementById("rietveld");
   /*Первая часть if функции это действия, которые совершаются по клику, если контент скрыт.*/
  if (x.style.display === "none") {
    /*Здесь я просто заново создаю все элементы, кроме текста (текст уже прописан в html), чтобы они загружались только тогда, когда мне это нужно, иначе они при загрузке страницы все начинают подгружаться и это очень долго и они все некрасиво вылезают.*/
    var gif = document.createElement('a');
    /*В данном случае я создаю ссылку-картинку, присваиваю ей все аттрибуты, которые иначе были бы прописаны у нее в открывающем теге в html – id, class, src, onclick итд*/
    gif.setAttribute("href","https://rietveld.moscow");
    gif.setAttribute("target","_blank")
    var img = document.createElement('img');
    img.src = "images/rietveld/rietveld.png";
    gif.appendChild(img);
    gif.appendChild(img);
    gif.classList.add("box", "faded-out");
    requestAnimationFrame(() => {
    gif.classList.remove("faded-out")
    });
    var text = document.getElementById("rietveldText");
    x.insertBefore(gif, text);
    text.classList.add("box", "faded-out");
    requestAnimationFrame(() => {
    text.classList.remove("faded-out")
    });
    gif.setAttribute("id", "rietveldimg");
    x.style.display = "block";
  } else {
    x.style.display = "none";
    x.removeChild(rietveldimg);
  }
}


/*BHSADGDCLASSOF2020*/
function bhsadgdFunction() {
  /*Переменная х это тот контейнер, в котором у тебя лежит контент*/
  var x = document.getElementById("bhsadgd");
   /*Первая часть if функции это действия, которые совершаются по клику, если контент скрыт.*/
  if (x.style.display === "none") {
    /*Здесь я просто заново создаю все элементы, кроме текста (текст уже прописан в html), чтобы они загружались только тогда, когда мне это нужно, иначе они при загрузке страницы все начинают подгружаться и это очень долго и они все некрасиво вылезают.*/
    var png = document.createElement('a');
    /*В данном случае я создаю ссылку-картинку, присваиваю ей все аттрибуты, которые иначе были бы прописаны у нее в открывающем теге в html – id, class, src, onclick итд*/
    png.setAttribute("href","https://classof2020.online");
    png.setAttribute("target","_blank");
    var img = document.createElement('img');
    img.src = "images/bhsadgd/1.png";
    png.appendChild(img);
    png.classList.add("box", "faded-out");
    requestAnimationFrame(() => {
    png.classList.remove("faded-out")
    });
    var text = document.getElementById("bhsadgdText");
    x.insertBefore(png, text);
    text.classList.add("box", "faded-out");
    requestAnimationFrame(() => {
    text.classList.remove("faded-out")
    });
    png.setAttribute("id", "bhsadgdimg");
    x.style.display = "block";
  } else {
    x.style.display = "none";
    x.removeChild(bhsadgdimg);
  }
}

/*Constitution*/
i = 0, constimages = ["images/const/1.png", "images/const/2.gif", "images/const/3.png", "images/const/4.png", "images/const/5.png", "images/const/6.jpg"];
function constImage() {
  if (i < constimages.length-1) {
   i++;
    } else {
      i = 0;
    }
    document.getElementById('constimg').src = constimages[i];}

constimages2 = ["images/const/arena/1.jpg", "images/const/arena/2.jpg", "images/const/arena/3.jpg", "images/const/arena/4.jpg", "images/const/arena/5.jpg", "images/const/arena/6.jpg", "images/const/arena/7.jpg"];
i2 = Math.floor(Math.random()*constimages2.length);
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
  if (x.style.display === "none") {
    var content = document.createElement("img");
    content.src = "images/const/1.png";
    content.classList.add("box", "faded-out");
    requestAnimationFrame(() => {
    content.classList.remove("faded-out")
    });
    x.insertBefore(content, text);
    text.classList.add("box", "faded-out");
    requestAnimationFrame(() => {
    text.classList.remove("faded-out")
    });
    content.setAttribute("id","constimg");
    content.setAttribute("onclick","constImage()")
    x.style.display = "flex";

  } else {
    x.style.display = "none";
    x.removeChild(constimg);
    info.removeChild(constimg2);
      info.removeChild(constLink);
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
var text = document.getElementById("interviewText");
var info = document.getElementById("interviewInfo");
if (x.style.display === "none") {
  var content = document.createElement("img");
  content.src = "images/interview/1.png";
  content.classList.add("box", "faded-out");
  requestAnimationFrame(() => {
  content.classList.remove("faded-out")
  });
  var text = document.getElementById("interviewText");
  x.insertBefore(content, text);
  text.classList.add("box", "faded-out");
  requestAnimationFrame(() => {
  text.classList.remove("faded-out")
  });
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
  info.removeChild(interviewimg2);
  info.removeChild(interviewLink);
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
    content.classList.add("box", "faded-out");
    requestAnimationFrame(() => {
    content.classList.remove("faded-out")
    });
    var text = document.getElementById("filmClubText");
    x.insertBefore(content, text);
    text.classList.add("box", "faded-out");
    requestAnimationFrame(() => {
    text.classList.remove("faded-out")
    });
    content.setAttribute("id","filmclubimg");
    content.setAttribute("onclick","filmclubImage()")
    x.style.display = "flex";
  } else {
    x.style.display = "none";
    x.removeChild(filmclubimg);
  }
}

/*Silent video*/
silentVideoimages2 = ["images/silentvideo/1.png", "images/silentvideo/2.jpg", "images/silentvideo/3.jpg", "images/silentvideo/4.gif", "images/silentvideo/5.jpg"];
s2 = Math.floor(Math.random()*silentVideoimages2.length);
function silentVideoImage2() {
    if (s2 < silentVideoimages2.length-1) {
      s2++;
      } else {
        s2 = 0;
    }
    document.getElementById('silentVideoimg2').src = silentVideoimages2[s2];
}

function silentVideoFunction() {
  var x = document.getElementById("silentVideo");
  var text = document.getElementById("silentVideoText");
  var info = document.getElementById("silentVideoInfo");
  if (x.style.display === "none") {
    var video = document.createElement('video');
    video.src = 'https://cdn.glitch.com/2e0cf87a-999b-4b20-bf6a-2358bd8f52f0%2F1.mp4?1550940475371';
    video.autoplay = false;
    video.controls = true;
    x.insertBefore(video, text);

    text.classList.add("box", "faded-out");
    requestAnimationFrame(() => {
    text.classList.remove("faded-out")
    });
    video.setAttribute("id", "silentVideoVideo");
    x.style.display = "block";

  } else {
    x.style.display = "none";
    x.removeChild(silentVideoVideo);
    info.removeChild(silentVideoimg2);
    info.removeChild(silentVideoLink);
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

c2 = 0, calendarimages2 = ["images/calendar/arena/1.jpg", "images/calendar/arena/2.jpg"];
function calendarImage2() {
  if (c2 < calendarimages.length-1) {
   c2++;
    } else {
      c2 = 0;
    }
    document.getElementById('calendarimg2').src = calendarimages2[c2];
}

function calendarFunction() {
  var x = document.getElementById("calendar");
  var text = document.getElementById("calendarText");
  var info = document.getElementById("calendarInfo");
  var randomItem = calendarimages2[Math.floor(Math.random()*calendarimages2.length)];
  if (x.style.display === "none") {
    var content = document.createElement("img");
    content.src = "images/calendar/1.png";
    content.classList.add("box", "faded-out");
    requestAnimationFrame(() => {
    content.classList.remove("faded-out")
    });
    var text = document.getElementById("calendarText");
    x.insertBefore(content, text);
    text.classList.add("box", "faded-out")
    requestAnimationFrame(() => {
    text.classList.remove("faded-out")
    });
    content.setAttribute("id","calendarimg");
    content.setAttribute("onclick","calendarImage()")
    x.style.display = "flex";

  } else {
    x.style.display = "none";
    x.removeChild(calendarimg);
    info.removeChild(calendarimg2);
    info.removeChild(calendarLink);
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
    content.classList.add("box", "faded-out");
    requestAnimationFrame(() => {
    content.classList.remove("faded-out")
    });
    var text = document.getElementById("wysinawygText");
    x.insertBefore(content, text);
    text.classList.add("box", "faded-out");
    requestAnimationFrame(() => {
    text.classList.remove("faded-out")
    });
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
    content.classList.add("box", "faded-out");
    requestAnimationFrame(() => {
    content.classList.remove("faded-out")
    });
    var text = document.getElementById("lugemikText");
    x.insertBefore(content, text);
    text.classList.add("box", "faded-out");
    requestAnimationFrame(() => {
    text.classList.remove("faded-out")
    });
    content.setAttribute("id","lugemikimg");
    content.setAttribute("onclick","lugemikImage()")
    x.style.display = "flex";
  } else {
    x.style.display = "none";
    x.removeChild(lugemikimg);
  }
}


/*Полигамия суицид*/
function toteFunction() {
  var x = document.getElementById("tote");
  if (x.style.display === "none") {
    x.style.display = "flex";
    var content = document.createElement("img");
    content.src = "images/tote/1.jpg";
    content.classList.add("box", "faded-out");
    requestAnimationFrame(() => {
    content.classList.remove("faded-out")
    });
    var text = document.getElementById("toteText");
    x.insertBefore(content, text);
    text.classList.add("box", "faded-out");
    requestAnimationFrame(() => {
    text.classList.remove("faded-out")
    });
    content.setAttribute("id","toteimg");
    x.style.display = "flex";
  } else {
    x.style.display = "none";
    x.removeChild(toteimg);
  }
}
