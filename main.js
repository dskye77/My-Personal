function toggleClass(class_name, id) {
  var element = document.getElementById(id);
  if (element) element.classList.toggle(class_name);
}

function addClass(class_name, id) {
  var element = document.getElementById(id);
  if (element) element.classList.add(class_name);
}

function removeClass(class_name, id) {
  var element = document.getElementById(id);
  if (element) element.classList.remove(class_name);
}

function removeClassFromMultipleIds(class_name, ...ids) {
  for (let id of ids) {
    let element = document.getElementById(id);
    if (element) element.classList.remove(class_name);
  }
}
const images = [
  "images/project Images/building.png",
  "images/project Images/car_part.png",
  "images/project Images/car2.png",
  "images/project Images/charIdle.png",
  "images/project Images/sCity.png",
];
const imageCont = document.getElementById('sandboxGame');
var imageNo = 0

const changeImages = setInterval(() => {
  imageCont.src  = images[imageNo];
  imageNo += 1;
  if (imageNo > images.length - 1){
    imageNo = 0
  }

}, 8000)