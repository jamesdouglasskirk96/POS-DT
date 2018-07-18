
var canvas = document.getElementById('our-canvas'),
context = canvas.getContext('2d');
//context.fillStyle("white");
var clear = false;
var img;
var black;
var button = document.getElementById('btn-download');
var nameExist = false;
var f1 = false;
var f2 = false;
var f3 = false;
var select1 = false;
var select2 = false;
var select3 = false;
var select = false;


window.onload = function() {
       context.font="45px Comic Sans MS";
       context.fillStyle = "red";
      img = document.getElementById("back");
       context.drawImage(img, 0 , 540, 800, 500);
      img2 = document.getElementById("black");
      context.drawImage(img2,0,0,800,550);

    }
    // check the only one picture to prevent stacking
function showImage() {

  // context.fillStyle = "#FF0000";
  // context.fillRect(20, 20, 150, 100);
  var x = document.getElementById("uploaded-file");
  var img = new Image;
  if(f1){
  img.onload = function() {
  context.drawImage(img, 65,250,350,300);
  //alert('the image is drawn');
  }
  img.src = URL.createObjectURL(x.files[x.files.length-1]);
  }
  else if(f2){
    img.onload = function(){
      context.drawImage(img,0,0,canvas.width,canvas.height/4);
    }
    img.src = URL.createObjectURL(x.files[x.files.length-1]);
  }
//} else {

  // clean canvas
  // get second picture
  // draw second picture
  // delete first element
  // var file = document.querySelector('input[type=file]').files[0];
  // context.drawImage(im,10,10);

}
// helper method to download
function downloadCanvasAsPng() {
       ReImg.fromCanvas(document.querySelector('canvas')).downloadPng();
   }
function download(){
    document.getElementById("downloader").download = "image.png";
    document.getElementById("downloader").href = document.getElementById("our-canvas").toDataURL("image/png").replace(/^data:image\/[^;]/, 'data:application/octet-stream');
}
function clearCanvas(){
 f1 = false;
 f2 = false;
 f3 = false;
 location.reload();
}
// Check the length of the string to prevent overflow
// If already been called, clear the string and
function putName(){
     var name = document.getElementById("name").value;
     //alert(name);
   if(nameExist){
     alert("Clear the canvas please ~")
   }else{

     context.font = '70pt Calibri'
     context.fillStyle = "white";
     context.fillText(name,-135+canvas.width/2,150);
     nameExist = true;

   }
   /*
   if(name.length()>13){
      var name = document.getElementById('companyName').value;
      context.font = '40pt Calibri'
      context.fillStyle = "white";
      context.fillText(name3,25,150);
      nameExist = true;

   }else{

     var name = document.getElementById('companyName').value;
     var name3 = "Keep "+name+"'s money local"
     context.font = '40pt Calibri'
     context.fillStyle = "white";
     context.fillText(name3,25,150);
     nameExist = true;

   }
*/
   }

    //console.log(name3);


// check the only one picture to prevent stacking
function showQR() {
  var x = document.getElementById("uploadedQR");
  var img = new Image;
  if(f1){
  img.onload = function() {
  context.drawImage(img, 420, 250, 350, 300);
  //alert('the image is drawn');
  }
  img.src = URL.createObjectURL(x.files[x.files.length-1]);
  }
  else if(f2){
    img.onload = function(){
      context.drawImage(img,canvas.width/3-15,25+canvas.height/4,45+canvas.width/3,10+canvas.width/3);
    }
    img.src = URL.createObjectURL(x.files[x.files.length-1]);
  }
  /*
  var x = document.getElementById("uploadedQR");
  var img = new Image;
  img.onload = function() {
  context.drawImage(img, 440, 250, 350, 300);
  }
  img.src = URL.createObjectURL(x.files[0]);
  */
}/*
function format1(x){
  if(select){
    alert('Please press the reset button ');
  }else{
   f1 = true;
   f2 = false;
   f3 = false;
   select = true;
   x.style.height = "250px";
   x.style.width = "250px";


 }
*/
function format1(){
  if(select){
    alert("You can only choose one ");
  }
  f1 = true;
  f2 = false;
  f3 = false;
  select = true;
  //alert("hahaha");
}
function format2(){
  if(select){
    alert("You can only choose one")
  }


  f1 = false;
  f2 = true;
  f3 = false;
  select = true;
  var x = document.getElementById("companyName");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
  }

//}
/*
function format2(x){
  if(select){
    alert("Pleas press the 'reset'");
  }else{
  f1 = false;
  f2 = true;
  f3 = false;
  select = true;
  x.style.height = "250px";
  x.style.width = "250px";
  var x = document.getElementById("companyName");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
}
*/

function bigImg(x) {
    x.style.height = "500px";
    x.style.width = "500px";
}
function reset(){
   f1 = false;
   f2 = false;
   f3 = false;
   location.reload();

}
function normalImg(x) {
    if(!select){
    x.style.height = "32px";
    x.style.width = "32px";
  }
}
