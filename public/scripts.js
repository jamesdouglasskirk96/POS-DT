
var canvas = document.getElementById('our-canvas'),
context = canvas.getContext('2d');
context.textAlign="center";
//context.fillStyle("white");
var clear = false;
var img;
var black;
var button = document.getElementById('btn-download');
var nameExist = false;
var f1 = true;
var f2 = false;
var f3 = false;
var select1 = false;
var select2 = false;
var select3 = false;
var select = false;
var choose1 = false;
var choose2 = false;

/*
load background pictures
*/

window.onload = function() {
       context.font="45px Comic Sans MS";
       context.fillStyle = "red";
      img = document.getElementById("back");
       context.drawImage(img, 0 , 540, 800, 500);
      img2 = document.getElementById("black");
      context.drawImage(img2,0,0,800,550);

    }
    // check the only one picture to prevent stacking
/*
function check(){
  if(!f1&&!f2){
    alert("You should first choose an option");
  }
}
*/
function putImage(){
  var x = document.getElementById("uploaded-file");
  var img = new Image;
  if(f1){
  img.onload = function() {
  context.drawImage(img, 40,250,330,300);
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
/*
function putName(){
  var name = document.getElementById("name").value;
  //alert(name);
if(nameExist){
  nameExist = false;
  alert("Clear the canvas please ~")
}else if(format1){

  context.font = '70pt Calibri'
  context.fillStyle = "white";
  context.fillText(name,-135+canvas.width/2,150);
  nameExist = true;
}
}
*/

function putName(){
  var name = document.getElementById("name").value;
  //alert(typeof name);
  //alert(name);
if(nameExist){
  nameExist = false;
  alert("Clear the canvas please ~")
}else if(format1){

  context.font = "60pt Calibri";
  //alert(context.font.value)
  font_num = 60;

  while(context.measureText(name).width>canvas.width){
    font_num = font_num -5;
    font_string = font_num +"pt Calibri";
    context.font = font_string;

  }
  //alert(name);
  context.fillStyle = "white";
  context.fillText(name,400,150);
}
}

// check the only one picture to prevent stacking
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
}
/*
0: if  checked,
*/
function showQR2(){
  var x = document.getElementById("uploadedQR");
  var img = new Image;
  if(f1){
  img.onload = function() {
  context.drawImage(img, 430, 250, 330, 300);
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
}
var op1;
var op2;
op1 = document.getElementById("option1");
op2 = document.getElementById("option2");
op1.onclick = function(){
  format1();
}
op2.onclick = function(){

  format2();
}

function format1(){
  f1 = true;
  f2 = false;
  f3 = false;
  select = true;
  var x = document.getElementById("companyName");
  x.style.visibility = "visible";
  var change = document.getElementById("td1");
  change.innerHTML = "(image size: 330x300)";
  //(image size: 330x300)
  //alert("hahaha");
}
function format2(){
  f1 = false;
  f2 = true;
  f3 = false;
  select = true;
  var x = document.getElementById("companyName");
  x.style.visibility = "hidden";
  var change = document.getElementById("td1");
  change.innerHTML = "(image size: 800x250)";

  }


function reset(){
   f1 = false;
   f2 = false;
   f3 = false;
   location.reload();

}
function submit(){

   showQR2();
   putImage();
   putName();

}
