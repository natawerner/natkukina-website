elem = 0;
x = 0;
folder = 0;

one = ["images/1/1.jpg", "images/1/2.jpg", "images/1/3.jpg", "images/1/4.jpg", "images/1/5.jpg", "images/1/6.jpg", "images/1/7.jpg", "images/1/8.jpg", "images/1/9.jpg", "images/1/10.jpg"];
two = ["images/2/1.jpg", "images/2/2.jpg", "images/2/3.jpg", "images/2/4.jpg", "images/2/5.jpg", "images/2/6.jpg", "images/2/7.jpg", "images/2/8.jpg", "images/2/9.jpg", "images/2/10.jpg"];
three = ["images/3/1.jpg", "images/3/2.jpg", "images/3/3.jpg", "images/3/4.jpg", "images/3/5.jpg", "images/3/6.jpg", "images/3/7.jpg", "images/3/8.jpg", "images/3/9.jpg", "images/3/10.jpg"];
four = ["images/4/1.jpg", "images/4/2.jpg", "images/4/3.jpg", "images/4/4.jpg", "images/4/5.jpg", "images/4/6.jpg", "images/4/7.jpg", "images/4/8.jpg", "images/4/9.jpg", "images/4/10.jpg"];
five = ["images/5/1.jpg", "images/5/2.jpg", "images/5/3.jpg", "images/5/4.jpg", "images/5/5.jpg", "images/5/6.jpg", "images/5/7.jpg", "images/5/8.jpg", "images/5/9.jpg", "images/5/10.jpg"];
six = ["images/6/1.jpg", "images/6/2.jpg", "images/6/3.jpg", "images/6/4.jpg", "images/6/5.jpg", "images/6/6.jpg", "images/6/7.jpg", "images/6/8.jpg", "images/6/9.jpg", "images/6/10.jpg"];
seven = ["images/7/1.jpg", "images/7/2.jpg", "images/7/3.jpg", "images/7/4.jpg", "images/7/5.jpg", "images/7/6.jpg", "images/7/7.jpg", "images/7/8.jpg", "images/7/9.jpg", "images/7/10.jpg"];
eight = ["images/8/1.jpg", "images/8/2.jpg", "images/8/3.jpg", "images/8/4.jpg", "images/8/5.jpg", "images/8/6.jpg", "images/8/7.jpg", "images/8/8.jpg", "images/8/9.jpg", "images/8/10.jpg"];
nine = ["images/9/1.jpg", "images/9/2.jpg", "images/9/3.jpg", "images/9/4.jpg", "images/9/5.jpg", "images/9/6.jpg", "images/9/7.jpg", "images/9/8.jpg", "images/9/9.jpg", "images/9/10.jpg"];
ten = ["images/10/1.jpg", "images/10/2.jpg", "images/10/3.jpg", "images/10/4.jpg", "images/10/5.jpg", "images/10/6.jpg", "images/10/7.jpg", "images/10/8.jpg", "images/10/9.jpg", "images/10/10.jpg"];

folders = [one, two, three, four, five, six, seven, eight, nine, ten];

desc = ["Introduction", "Chapter 1 – Materiality", "Chapter 1 – Materiality", "Chapter 2 — Affirmative digital imposters", "Chapter 2 — Affirmative digital imposters", "Chapter 2 — Affirmative digital imposters", "Chapter 3 — Critical digital objects", "Chapter 3 — Critical digital objects", "Chapter 3 — Critical digital objects", "Conclusion"];


function nextParagraph() {
  if (x < folders.length-1) {
   x++;
    } else {
      x = x;
    }
    folder = folders[x];
    document.getElementById('img').src = folder[elem];
    document.getElementById("descriptionText").innerHTML = desc[x];

}



function previousParagraph() {
  if (x > 0) {
   x--;
    } else {
      x = 0;
    }
    folder = folders[x];
    document.getElementById('img').src = folder[elem];
    document.getElementById("descriptionText").innerHTML = desc[x];
}


function nextImage() {
  folder = folders[x];
   if (elem < folder.length-1) {
    elem++;
     } else {
       elem = elem;
     }
     document.getElementById('img').src = folder[elem];
 }

 function previousImage() {
   folder = folders[x];
   if (elem > 0) {
    elem--;
     } else {
       elem = 0;
     }
     document.getElementById('img').src = folder[elem];
 }



 function about() {
   if (document.getElementById("aboutText").style.opacity === "1") {
     document.getElementById("aboutText").style.opacity = "0";
   } else {
      document.getElementById("aboutText").style.opacity = "1";
   }
 }
