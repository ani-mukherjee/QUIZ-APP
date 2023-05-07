let submit = document.getElementById("submit");
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    let q1= document.getElementById("js").checked;
    let q2= document.getElementById("js1").checked;
    let q3= document.getElementById("js2").checked;
    let q4= document.getElementById("js3").checked;
    let q5= document.getElementById("js4").checked;
    let q6= document.getElementById("js5").checked;
    let q7= document.getElementById("js6").checked;
    let q8= document.getElementById("js7").checked;
    let q9= document.getElementById("js8").checked;
    let q10= document.getElementById("js9").checked;

    let count= 0;
    if(q1){
        count++;
    }
    if(q2){
        count++;
    }
    if(q3){
        count++;
    }
    if(q4){
        count++;
    }
    if(q5){
        count++;
    } 
    if(q6){
        count++;
    }
    if(q7){
        count++;
    }
    if(q8){
        count++;
    }
    if(q9){
        count++;
    }
    if(q10){
        count++;
    }
    if(count==10){
        document.getElementById("result").innerHTML= `Excellent. You got full marks.<br>${count} /10`;
    }
    else if(count>=8){
        document.getElementById("result").innerHTML= `Well Done. You got<br>${count} /10`;
    }
    else if(count>=6){
        document.getElementById("result").innerHTML= `Good score. You got<br>${count} /10 <br> Keep it up.`;
    }
    else if(count>=4){
        document.getElementById("result").innerHTML= `Moderate score! You got<br>${count} /10 <br> You need to practice more.`; 
    }
    else if(count>=1){
        document.getElementById("result").innerHTML= `Poor score!! You got<br>${count} /10 <br> You need to improve.`; 
    }
    else{
        document.getElementById("result").innerHTML= `Sorry!! Either You got<br>${count} /10 <br>or didn't give any answer.`; 
    }
    document.getElementById("solution").style.display="block";
    document.getElementById("solution").innerHTML= "Show Explanation";
})
