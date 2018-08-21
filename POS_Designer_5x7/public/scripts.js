
var canvas = document.getElementById('our-canvas'),
context = canvas.getContext('2d');
context.textAlign="center";
// canvas.width = 1500;
// canvas.height = 2100;

// var n_ = document.getElementsById('name');
// n_.style.visibility = "hidden";
//context.fillStyle("white");
var clear = false;
var img;
var black;
var button = document.getElementById('btn-download');
// var nameExist = false;
var f1 = false;
var f2 = true;
var f3 = false;
var f4 = false;
var select1 = false;
var select2 = false;
var select3 = false;
var select4 = false;
var select = false;
var choose1 = false;
var choose2 = false;
var isSubmit = false;

/*
load background pictures
*/

window.onload = function() {
  /*
       context.font="45px Comic Sans MS";
       context.fillStyle = "red";
       */

      img2 = document.getElementById("black");
      context.drawImage(img2,0,0,1500,1200);
      img = document.getElementById("back");
      context.drawImage(img, 0, 1050, 1500, 1200);
      format1();
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
    img.onload = function(){
      context.drawImage(img,0,0,canvas.width,canvas.height/4);
    }
    img.src = URL.createObjectURL(x.files[x.files.length-1]);
  }
  if(f2){
    img.onload = function(){
      context.drawImage(img,0,0,canvas.width,canvas.height/4);
    }
    img.src = URL.createObjectURL(x.files[x.files.length-1]);
  }
  if(f4){
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
 f4 = false;
 isSubmit = false;
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
  var phrase = document.getElementById("phrase").value;

  if (f2) {
    context.font = "180pt Calibri";
    // var font_num = 180;
    //
    // while(context.measureText(phrase).width>canvas.width) {
    //   font_num = font_num -2;
    //   font_string = font_num +"pt Calibri";
    //   context.font = font_string;
    // }

    context.fillStyle = "white";
    context.fillText("Hello World",0,0);
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
    img.onload = function(){
      context.drawImage(img,canvas.width/3,canvas.height/4+50,canvas.width/3,canvas.height/4);
    }
    img.src = URL.createObjectURL(x.files[x.files.length-1]);
  }
  if(f2){
    img.onload = function(){
      context.drawImage(img,120,100,360,360);
    }
    img.src = URL.createObjectURL(x.files[x.files.length-1]);
  }
  if(f4){
    img.onload = function(){
      context.drawImage(img,canvas.width/3,canvas.height/4+50,canvas.width/3,canvas.height/5);
    }
    img.src = URL.createObjectURL(x.files[x.files.length-1]);
  }
  if(f3){
    img.onload = function(){
      context.drawImage(img,225,425,450,450);
    }
    img.src = URL.createObjectURL(x.files[x.files.length-1]);
  }
}
var op1;
var op2;
var op3;
var op4;
op1 = document.getElementById("option1");
op2 = document.getElementById("option2");
op3 = document.getElementById("option3");
op4 = document.getElementById("option4");
op1.onclick = function(){
  format1();
}
op2.onclick = function(){
  format2();
}

op3.onclick = function() {
  format3();
}

op4.onclick = function() {
  format4();
}

function format1(){
  f1 = true;
  f2 = false;
  f3 = false;
  f4 = false;
  select = true;
  var x = document.getElementById("companyName");
  x.style.visibility = "visible";
  var x = document.getElementById("Discount");
  x.style.visibility = "visible";
  var change = document.getElementById("td1");
  change.innerHTML = "(image size: 1500x525)";

  // console.log(document.getElementById("our-canvas").width);

  canvas.width = 1500;
  canvas.height = 2100;

  img2 = document.getElementById("black");
  context.drawImage(img2,0,0,1500,2100);
  img = document.getElementById("back");
  context.drawImage(img, 0, 1050, 1500, 1200);

  // document.getElementById("our-canvas").height = 2100;
  // canvas.width = 1500;
  // canvas.height = 2100;

  //(image size: 330x300)
  //alert("hahaha");
}
function format2(){
  f1 = false;
  f2 = true;
  f3 = false;
  f4 = false;
  select = true;
  var x = document.getElementById("companyName");
  x.style.visibility = "visible";
  var x = document.getElementById("Discount");
  x.style.visibility = "visible";
  var change = document.getElementById("td1");
  change.innerHTML = "(image size: 1500x525)";

  canvas.width = 600;
  canvas.height = 900;

  img2 = document.getElementById("black");
  context.drawImage(img2,0,0,600,900);
  var img = new Image;
  img.onload = function(){
    context.drawImage(img,60,canvas.height*0.65,480,274.2857142857);
  }
  img.src = "digitaltown-white.png";
}

function format3() {
  f1 = false;
  f2 = false;
  f3 = true;
  f4 = false;
  select = true;
  var x = document.getElementById("companyName");
  x.style.visibility = "visible";
  var x = document.getElementById("Discount");
  x.style.visibility = "visible";
  var change = document.getElementById("td1");
  change.innerHTML = "(image size: 1500x525)";

  canvas.width = 900;
  canvas.height = 1500;

  img2 = document.getElementById("black");
  context.drawImage(img2,0,0,900,1500);
  var img = new Image;
  img.onload = function(){
    context.drawImage(img,canvas.width*0.09,canvas.height*0.7,canvas.width/1.2,canvas.height/4);
  }
  img.src = "digitaltown-white.png";
}

function format4() {
  f1 = false;
  f2 = false;
  f3 = false;
  f4 = true;
  select = true;
  var x = document.getElementById("companyName");
  x.style.visibility = "visible";
  var x = document.getElementById("Discount");
  x.style.visibility = "visible";
  var change = document.getElementById("td1");
  change.innerHTML = "(image size: 1500x525)";

  canvas.width = 900;
  canvas.height = 1500;

  img2 = document.getElementById("black");
  context.drawImage(img2,0,0,900,1500);
  img = document.getElementById("back");
  context.drawImage(img, 0, 700, 900, 860);
}

function reset(){
   f1 = false;
   f2 = false;
   f3 = false;
   f4 = false;
   location.reload();

}
function submit(){
   if(!isSubmit){
   showQR2();
   putImage();
   // putName();
   // addText();
   isSubmit = true;
 }
   else{
     alert("Please click 'clear' button in order to create a new POS");
   }

}

function addPhrase() {
  if (f2)
  {
    var phrase = document.getElementById("phrase").value;
    var phrase_count = phrase.split(' ').length;
    var phrase_array = phrase.split(' ');
    if (phrase_count < 3) {
      context.font = "60px Open Sans";
      context.fillStyle = "#00A2FF";
      context.fillText(phrase, (canvas.width - context.measureText(phrase).width)/2, canvas.height/1.8);
    } else {
      if (isOdd(phrase_count) == 0) {
        // even
        var count = phrase_count/2;
        var p1 = '';
        var p2 = '';
        for (var i = 0; i < count; i++) {
          p1 += " " + phrase_array[i];
        }
        for (var i = count; i < phrase_count; i++) {
          p2 += " " + phrase_array[i];
        }
        p1 = p1.trim();
        p2 = p2.trim();
        context.font = "60px Open Sans";
        context.fillStyle = "#00A2FF";
        var font = 60;
        var c_width = canvas.width*0.8;
        while (context.measureText(p1).width >= c_width) {
          font -= 2;
          context.font = font + "px Open Sans";
        }
        while (context.measureText(p2).width >= c_width) {
          font -= 2;
          context.font = font + "px Open Sans";
        }
        context.fillText(p1, (canvas.width - context.measureText(p1).width)/2, 560);
        context.fillText(p2, (canvas.width - context.measureText(p2).width)/2, 627);
      } else {
        // odd
        var count_top = phrase_count/2;
        count_top = Math.trunc(count_top);
        var count_bottom = phrase_count - count_top;

        var p1 = '';
        var p2 = '';
        for (var i = 0; i < count_top; i++) {
          p1 += " " + phrase_array[i];
        }
        for (var i = count_top; i < phrase_count; i++) {
          p2 += " " + phrase_array[i];
        }
        p1 = p1.trim();
        p2 = p2.trim();
        context.font = "60px Open Sans";
        context.fillStyle = "#00A2FF";
        var font = 60;
        var c_width = canvas.width*0.8;
        while (context.measureText(p1).width >= c_width) {
          font -= 2;
          context.font = font + "px Open Sans";
        }
        while (context.measureText(p2).width >= c_width) {
          font -= 2;
          context.font = font + "px Open Sans";
        }
        context.fillText(p1, (canvas.width - context.measureText(p1).width)/2, 500);
        context.fillText(p2, (canvas.width - context.measureText(p2).width)/2, 642);
      }
    }
  }
  if (f3)
  {
    var phrase = document.getElementById("phrase").value;
    var phrase_count = phrase.split(' ').length;
    var phrase_array = phrase.split(' ');
    if (phrase_count < 3) {
      context.font = "60px Open Sans";
      context.fillStyle = "#00A2FF";
      context.fillText(phrase, (canvas.width - context.measureText(phrase).width)/2, 1000);
    } else {
      if (isOdd(phrase_count) == 0) {
        // even
        var count = phrase_count/2;
        var p1 = '';
        var p2 = '';
        for (var i = 0; i < count; i++) {
          p1 += " " + phrase_array[i];
        }
        for (var i = count; i < phrase_count; i++) {
          p2 += " " + phrase_array[i];
        }
        p1 = p1.trim();
        p2 = p2.trim();
        context.font = "60px Open Sans";
        context.fillStyle = "#00A2FF";
        var font = 60;
        var c_width = canvas.width*0.8;
        while (context.measureText(p1).width >= c_width) {
          font -= 2;
          context.font = font + "px Open Sans";
        }
        while (context.measureText(p2).width >= c_width) {
          font -= 2;
          context.font = font + "px Open Sans";
        }
        context.fillText(p1, (canvas.width - context.measureText(p1).width)/2, 1000);
        context.fillText(p2, (canvas.width - context.measureText(p2).width)/2, 1150);
      } else {
        // odd
        var count_top = phrase_count/2;
        count_top = Math.trunc(count_top);
        var count_bottom = phrase_count - count_top;

        var p1 = '';
        var p2 = '';
        for (var i = 0; i < count_top; i++) {
          p1 += " " + phrase_array[i];
        }
        for (var i = count_top; i < phrase_count; i++) {
          p2 += " " + phrase_array[i];
        }
        p1 = p1.trim();
        p2 = p2.trim();
        context.font = "60px Open Sans";
        context.fillStyle = "#00A2FF";
        var font = 60;
        var c_width = canvas.width*0.8;
        while (context.measureText(p1).width >= c_width) {
          font -= 2;
          context.font = font + "px Open Sans";
        }
        while (context.measureText(p2).width >= c_width) {
          font -= 2;
          context.font = font + "px Open Sans";
        }
        context.fillText(p1, (canvas.width - context.measureText(p1).width)/2, 1000);
        context.fillText(p2, (canvas.width - context.measureText(p2).width)/2, 1100);
      }
    }
  }

}

function isOdd(num) { return num % 2;}

function addDiscount() {
  if (f3)
  {
    // console.log(3/2)
    var phrase = document.getElementById("deal").value;
    var phrase_count = phrase.split(' ').length;
    var phrase_array = phrase.split(' ');
    if (phrase_count < 3) {
      context.font = "60px Open Sans";
      context.fillStyle = "#00A2FF";
      context.fillText(phrase, (canvas.width - context.measureText(phrase).width)/2, 250);
    } else {
      if (isOdd(phrase_count) == 0) {
        // even
        var count = phrase_count/2;
        var p1 = '';
        var p2 = '';
        for (var i = 0; i < count; i++) {
          p1 += " " + phrase_array[i];
        }
        for (var i = count; i < phrase_count; i++) {
          p2 += " " + phrase_array[i];
        }
        p1 = p1.trim();
        p2 = p2.trim();
        context.font = "60px Open Sans";
        context.fillStyle = "#00A2FF";
        var font = 60;
        var c_width = canvas.width*0.8;
        while (context.measureText(p1).width >= c_width) {
          font -= 2;
          context.font = font + "px Open Sans";
        }
        while (context.measureText(p2).width >= c_width) {
          font -= 2;
          context.font = font + "px Open Sans";
        }
        context.fillText(p1, (canvas.width - context.measureText(p1).width)/2, 200);
        context.fillText(p2, (canvas.width - context.measureText(p2).width)/2, 350);
      } else {
        // odd
        var count_top = phrase_count/2;
        count_top = Math.trunc(count_top);
        var count_bottom = phrase_count - count_top;

        var p1 = '';
        var p2 = '';
        for (var i = 0; i < count_top; i++) {
          p1 += " " + phrase_array[i];
        }
        for (var i = count_top; i < phrase_count; i++) {
          p2 += " " + phrase_array[i];
        }
        p1 = p1.trim();
        p2 = p2.trim();
        context.font = "60px Open Sans";
        context.fillStyle = "#00A2FF";
        var font = 60;
        var c_width = canvas.width*0.8;
        while (context.measureText(p1).width >= c_width) {
          font -= 2;
          context.font = font + "px Open Sans";
        }
        while (context.measureText(p2).width >= c_width) {
          font -= 2;
          context.font = font + "px Open Sans";
        }
        context.fillText(p1, (canvas.width - context.measureText(p1).width)/2, 200);
        context.fillText(p2, (canvas.width - context.measureText(p2).width)/2, 350);
      }
    }
  }
}
