function notify()
{
  alert("Thanks for your purchase!")
}

function showPrice()
{
  document.getElementById("hiddenPrice").style.display = 'block';
}

const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

const hexBtn = document.querySelector('.hexBtn');

const bodyBCG = document.querySelector('body');

const hex = document.querySelector('.hex');

hexBtn.addEventListener('click',getHex);

function getHex() {
	let hexCol = '#';
	for (let i = 0; i < 6; i++) {
		let random = Math.floor(Math.random()*hexNumbers.length);
		//console.log(random);
		hexCol += hexNumbers[random];
		//console.log(hexCol)
	}
	bodyBCG.style.backgroundColor = hexCol;
	hex.innerHTML = hexCol;
}
/*function GetDateDemo()
{
var myDate = new Date();
var year = myDate.getFullYear();
var month = myDate.getMonth();
var date = myDate.getDate();
var hours = myDate.getHours();
var minutes = myDate.getMinutes();
var seconds = myDate.getSeconds();

if(month < 10 ){
  month = "0" + month;
}
if(date < 10 ){
  date = "0" + date;
}

var dateTime = year + "." + month + "." + date "." + hour + ":" minutes + "." + seconds;
var divNode = document.getElementById("time");
divNode.innerHTML = dateTime;
}*/
