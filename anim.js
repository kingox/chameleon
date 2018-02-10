function talking() {
	talkings();
  
 newtext();


}
function talkings() {
	starttalk();
	 setTimeout(stoptalk,100);
	setTimeout(starttalk,200);
	setTimeout(stoptalk,300);
	setTimeout(starttalk,400);
	setTimeout(stoptalk,500);
	setTimeout(starttalk,600);
	setTimeout(stoptalk,700);
	setTimeout(starttalk,800);
	setTimeout(stoptalk,900);
	
}

function newtext() {
	 var vocab = ["bullshit", "f%ck you!", "%%%%","I need game!", "Go out!"]
     var namerand = Math.floor(Math.random() * vocab.length)
    text = document.getElementById("golosrobot").innerHTML=vocab[namerand];
    talkings();
  setTimeout(deltext,2000);
}
function deltext() {
	var text = document.getElementById("golosrobot").innerHTML="";
 
}
function starttalk() {
	var girls = document.getElementById("cont").src="open.png";
}
function stoptalk() {
	var girls = document.getElementById("cont").src="close.png";
}
function getEat(){
	var btn = document.getElementById("btnEat");
 btn.style.display="none";
var posx=0;
var posy=0;
var eat1 = document.getElementById("eat1");
var t = setInterval(move_eat1,10)
talkings();
setTimeout(thx,2000);
setTimeout(complete_eat,2000);
var health = document.getElementById("love");
health.value +=20;
function move_eat1(){
if (posx>=200 && posy>=120) {
	clearInterval(t);

}
else {
	posx +=1;
	posy +=1;
	eat1.style.left= posx +'px';
	eat1.style.top= posy +'px';
	
}}}
function thx() {
	 var text = document.getElementById("golosrobot").innerHTML="Thanks!";
  setTimeout(deltext,2000);
}
function btnEat(){
	var eat1 = document.getElementById("eat1");
 getEat();
 eat1.style.display="flex";
 

}

function complete_eat(){
	var eat1 = document.getElementById("eat1");
  eat1.style.display="none";
  talkings();
var btn = document.getElementById("btnEat");
 btn.style.display="block";
}
var room = ["url(bg.jpg)","url(streetBG.jpg)","url(carBG.jpg)"];
var num_room=0;
function next(){
	var slider = document.getElementById("boxID");
	num_room++;
	if (num_room>=room.length) {
		num_room=0;
	}
	var btn = document.getElementById("btnSleep");
	if (num_room==0){
	
	btn.style.display="block"; }
	else {
btn.style.display="none";
	}
	
	slider.style.backgroundImage=room[num_room]; 

	talknice();
	talkings();
}
function back(){
	var slider = document.getElementById("boxID");
	num_room--;
	if (num_room<0) {
		num_room=room.length-1;
	}
	var btn = document.getElementById("btnSleep");
	if (num_room==0){
	
	btn.style.display="block"; }
	else {
btn.style.display="none";
	}
	slider.style.backgroundImage=room[num_room];
	talknice();
	talkings();
}
function talknice() {
	var vocab = ["good day!", "Nice time!", "I need eat!"]
   var namerand = Math.floor(Math.random() * vocab.length)
     
var text = document.getElementById("golosrobot").innerHTML=vocab[namerand];
  setTimeout(deltext,3000);
}
function health(){
	var health = document.getElementById("love");
	var start = document.getElementById("love").value;
	var namerand = Math.floor(Math.random() * 12);
	health.value= start - namerand;
}
setInterval(health, randomtime());
setInterval(newtext, randomtime());

setInterval(energy, randomtime());
function randomtime() {
	return rand = 5000 + Math.random() * (15000 + 1000 - 5000);
}

function energy(){
	var energy = document.getElementById("energy");
	var start = document.getElementById("energy").value;
	var namerand = Math.floor(Math.random() * 12);
	energy.value= start - namerand;
}
function sleep(){
	var start = document.getElementById("energy");
	start.value +=20;
changeSleep();

}
function changeSleep(){
	var btn = document.getElementById("btnSleep");
	btn.style.display="none";
sleep1();
	 setTimeout(sleep2,200);
	setTimeout(sleep3,400);
	setTimeout(sleep1,600);
	setTimeout(sleep2,800);
	setTimeout(sleep3,1000);
	setTimeout(sleep1,1200);
	setTimeout(sleep2,1400);
	setTimeout(sleep3,1600);
	setTimeout(stoptalk,1800);
setTimeout(showbtn,1800);
}
function showbtn(){
var btn = document.getElementById("btnSleep");
	btn.style.display="block";
}
function sleep1() {
	var sleep = document.getElementById("cont").src="sleep1.png";
}
function sleep2() {
	var sleep = document.getElementById("cont").src="sleep2.png";
}
function sleep3() {
	var sleep = document.getElementById("cont").src="sleep3.png";
}