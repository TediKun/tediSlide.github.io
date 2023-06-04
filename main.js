let slideImg = document.getElementById('slideImg');

let image = new Array (
      "slide2.jpg",
      "slide3.jpg",
      "slide4.jpg",
      "slide5.jpg"
      );

let leng = image.length;
let i = 0;

  function slider() {
    if (i > leng-1) {
      i=0;
    }
    slideImg.src = image[i];
    i++;
    setTimeout('slider()',3000);
  }
