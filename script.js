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
        document.getElementById("result").innerHTML= `Excellent. You got full marks. Your score is ${count} out of 10.`;
    }
    else if(count>=8){
        document.getElementById("result").innerHTML= `Well Done. Your score is ${count} out of 10.`;
    }
    else if(count>=6){
        document.getElementById("result").innerHTML= `Good performance. Your score is ${count} out of 10. Keep it up.`;
    }
    else if(count>=4){
        document.getElementById("result").innerHTML= `Moderate performance! Your score is ${count} out of 10. You need to brush up your knowledge.`; 
    }
    else{
        document.getElementById("result").innerHTML= `Poor performance!! Your score is ${count} out of 10. You need to improve.`; 
    }
})