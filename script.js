//javascript code
const learners=document.querySelector("#third > div > div.learner > span");
const subscribers= document.querySelector("#third > div > div.subscriber > p > span")

let starno=0;

function increaseno(starcount,users,lastcount,starcountplus){
const subcount= setInterval(()=>{
starcount+=starcountplus;
users.innerHTML=starcount;
if(starcount==lastcount){
clearInterval(subcount)
}
},)
}


increaseno(starno,learners,50000,80);
increaseno(starno,subscribers,1000000,400)
