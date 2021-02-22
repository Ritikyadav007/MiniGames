// task 1:

function age(){
var birthyear = prompt('What year were you born..??');
var currentyear = new Date().getFullYear();
var ageInDays = (currentyear - birthyear)*365;
var h1= document.createElement("h1");
var answer= document.createTextNode("You are "+ ageInDays + " days old.");
h1.setAttribute('id','result');
h1.appendChild(answer);
document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('result').remove();
}

// task 2:

let btngenerate =document.querySelector('.btn-generate');
btngenerate.addEventListener('click',fetchimage);

function fetchimage(){
    let images ="https://cdn2.thecatapi.com/images/47c.jpg"
    let img =document.createElement('img');
    img.setAttribute('src',images);
    img.setAttribute('id','fetchimg')
    document.getElementById('flex-cat').appendChild(img);
    
}

// task 3:

function rpsgame(yourchoice){ 
    var humanchoice=yourchoice.id;
     console.log(humanchoice);
    var botchoice = rpschoice();
     console.log(botchoice);
    var winner= decider(humanchoice,botchoice);
    var message=disMessage(winner);
     console.log(winner);
    frontend(humanchoice,botchoice,message);
}

function rpschoice(){
    return ['rock','paper','scissors'][Math.floor(Math.random() * 3)];
}

function decider(x,y){
    var rpsdata={'rock':{'rock':0.5, 'scissors':1, 'paper':0},
    'scissors':{'rock':0, 'scissors':0.5, 'paper':1},
    'paper':{'rock':1, 'scissors':0, 'paper':0.5}};
    var result=rpsdata[x][y];
    var result2=rpsdata[y][x];
    return result;
}

function disMessage(score){
    if (score==1){
        return {'message':'You Won!', 'color':'green'}; 
    }else if (score==0.5) {
        return {'message':'Game Tied', 'color': 'yellow'};
    } else {
        return {'message':'You Lost..','color': 'red'};
    }
}

function frontend(yourscore,botscore,finalmessage){
    var imgdata= {'rock':document.getElementById('rock').src,
    'scissors':document.getElementById('scissors').src,
    'paper':document.getElementById('paper').src
}

document.getElementById('rock').remove();
document.getElementById('scissors').remove();
document.getElementById('paper').remove();

var yourdiv=document.createElement('div');
var messagediv=document.createElement('div');
var botdiv=document.createElement('div');

yourdiv.innerHTML="<img src='" + imgdata[yourscore] + "' height=150 width=150 style='box-shadow:0px 10px 50px rgba(37, 50, 233,1); '> ";
messagediv.innerHTML="<h1 style='color:" + finalmessage['color'] + " ; font-size:60px ; padding: 30px;'>" + finalmessage['message'] + "</h1>";
botdiv.innerHTML="<img src='" + imgdata[botscore] + "' height=150 width=150 style='box-shadow:0px 10px 50px rgba(233, 1, 7,1); '> ";

document.getElementById('rps-div').appendChild(yourdiv);
document.getElementById('rps-div').appendChild(messagediv);
document.getElementById('rps-div').appendChild(botdiv);
}

// Task 4:

var allbtn=document.getElementsByTagName('button');

var copyofbtn = [];
for( let i=0;i<allbtn.length;i++){
    copyofbtn.push(allbtn[i].classList[1]);
}

function btncolorchange(thiscolor){
    if(thiscolor.value=='random'){
        btnrandom();
    }else if (thiscolor.value=='red') {
        btnred();
    } else if (thiscolor.value=='green') {
        btngreen();
        
    }else{
        btnreset();
    }
}

function btnred(){
    for(let i=0;i<allbtn.length;i++){
        allbtn[i].classList.remove(allbtn[i].classList[1]);
        allbtn[i].classList.add('btn-danger')
    }
}

function btngreen(){
    for(let i=0;i<allbtn.length;i++){
        allbtn[i].classList.remove(allbtn[i].classList[1]);
        allbtn[i].classList.add('btn-success')
    }
}

function btnreset(){
    for(let i=0;i<allbtn.length;i++){
        allbtn[i].classList.remove(allbtn[i].classList[1]);
        allbtn[i].classList.add(copyofbtn[i]);
    }
}

function btnrandom(){
    let colors = ['btn-primary','btn-danger','btn-success','btn-warning']

    for(let i=0;i<allbtn.length;i++){
        let randomnum=Math.floor(Math.random()*4);
        allbtn[i].classList.remove(allbtn[i].classList[1]);
        allbtn[i].classList.add(colors[randomnum]);
    }
}

// Task 4:

