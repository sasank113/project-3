const questions=document.getElementById("Question");
const page1=document.getElementById("tab1");
const page2=document.getElementById("tab2");
const total=document.getElementById("spn");
const opts=document.getElementById("options");
page2.style.display="none";
const Qarray=[{
question:"Which team won the ipl 2025?",
options:["Royal Challengers Bengaluru","Mumbai Indians","Punjab Kings","Gujarat Titans"],
ansind:0
},
{
question:"What is the programming language used for developing android apps",
options:["Python","Java","C++","Javascript"],
ansind:1
},
{
question:"Who is the Deputy Chief Minister of Andhra Pradesh",
options:["Chandra Babu Naidu","Jagan Mohan Reddy","Nara Lokesh","Pawan Kalyan"],
ansind:3
},
{
question:"Who is the founder of Microsoft",
options:["Larry Page","Mark Zuckerburg","Bill Gates","Steve Jobs"],
ansind:2
},
{
question:"Which team won the 2024 t20 World Cup",
options:["South Africa","Australia","England","India"],
ansind:3
}];

var score=0;
function start()
{
    j=0;
    tab1.style.display="none";
    tab2.style.display="block";
    next();
}
function next()
{
 
for (k=0;k<4;k++)
{
document.getElementById("option"+k).disabled=false;
}
if(j===Qarray.length)
{
    finish();
}
else{
quizq=Qarray[j].question;

questions.innerHTML=quizq;

for (k=0;k<4;k++)
{
document.getElementById("option"+k).innerHTML=Qarray[j].options[k];
}
  for (k=0;k<4;k++)
{
document.getElementById("option"+k).classList.remove("correct");
document.getElementById("option"+k).classList.remove("wrong");
} 
m=j
j++

console.log(j)
}
}

function finish()
{
    document.getElementById("quizid").style.display="none";
    document.getElementById("scoreid").style.display="none";
document.getElementById("Question").style.display="none";
    opts.innerHTML=`<h1 class="header1">Quiz Over</h1>
                   <h1>You have scored ${score} out of ${Qarray.length} </h1>
                     <button class="correct curve" onclick="location.reload()"> Restart</button>
                     <button class="wrong curve" onclick="window.close()">Exit</button>`;
}




function validate(i)
{
opt=document.getElementById("option"+i);

if (i==Qarray[m].ansind)
{
    score=score+1;
 
    opt.classList.add("correct");
}

else
{
     crct=document.getElementById("option"+Qarray[m].ansind)
    crct.classList.add("correct");
    opt.classList.add("wrong");
}
for (k=0;k<4;k++)
{
document.getElementById("option"+k).disabled=true;
}

total.innerHTML=score;

}