var picture = ["bestad.jpg", "Converse-Shoe.png", "East-Side-Games-IMG_2190.jpg"];
var msec=0;
var i=0;
function showPrice1() {
  document.getElementById("hiddenPrice1").style.visibility= 'visible';
}
function hidePrice1() {
  document.getElementById("hiddenPrice1").style.visibility= 'hidden';
}
function showPrice2() {
  document.getElementById("hiddenPrice2").style.visibility= 'visible';
}
function hidePrice2() {
  document.getElementById("hiddenPrice2").style.visibility= 'hidden';
}
function slide() {
msec++;
if(msec==1000){
  msec=0;
  i++;
}
document.
