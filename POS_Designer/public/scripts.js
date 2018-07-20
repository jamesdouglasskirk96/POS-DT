
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
function showImage() {
  if(!f1&&!f2){
    alert("You should first choose an option")
  }
  // context.fillStyle = "#FF0000";
  // context.fillRect(20, 20, 150, 100);

  }
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


    //console.log(name3);


// check the only one picture to prevent stacking
function showQR() {
  if(!f1&&!f2){
    alert("You should first choose an option")
  }

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
  /*
  if(this.checked == false){
       format1();
  }else{
    this.cheked = false;
    console.log("haha");
  }
  */
}
op2.onclick = function(){
  //console.log("haha123");
  /*
  if(this.checked == false){
      format2();
  }else{
    this.cheked = false;
    console.log("haha1997");
  }
  */
  format2();
}

function format1(){
  /*
  if(select){
    alert("You can only choose one ");
  }
  */
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
function submit(){
   showQR2();
   //alert("QR");
   putImage();


}
