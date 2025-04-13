let time = new Array(1440);


for(let i = 0; i < 1440 ; i++){
    time[i] = i + 1
}

console.log(time)



function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

let age;
let gender;
let exercise_type;

let ExerciseHours;
let Workhours;
let Leisurehours;

let Recex = 0;
let Recwo = 0;
let Reclei = 0;

let starttime;
let finishtime;

document.getElementById("age").onclick = function(){
    age = document.getElementById("myAge").value;
    console.log(age)
}


document.getElementById("gender").onclick = function() {
    const buttons = document.querySelectorAll('.Screen4 .genderAnswer button');
    buttons.forEach(function(button) {
        button.style.display = 'block';
    });
}

document.getElementById("male").onclick = function(){
    gender = "Male"
    console.log(gender)

    const buttons = document.querySelectorAll('.Screen4 .genderAnswer button');
    buttons.forEach(function(button) {
        button.style.display = 'none';
    });

}

document.getElementById("female").onclick = function(){
    gender = "Female"
    console.log(gender)

    const buttons = document.querySelectorAll('.Screen4 .genderAnswer button');
    buttons.forEach(function(button) {
        button.style.display = 'none';
    });

}

document.getElementById("other").onclick = function(){
    gender = "Other"
    console.log(gender)

    const buttons = document.querySelectorAll('.Screen4 .genderAnswer button');
    buttons.forEach(function(button) {
        button.style.display = 'none';
    });

}


const list1 = document.getElementById("activity");
const activityButton = document.getElementById("activityButton");
const out1 = document.getElementById("activityList");



activityButton.addEventListener("click", fun1);


document.getElementById("Type").onclick = function(){

    const buttons = document.querySelectorAll('.Screen4 .Activityanswer button');
    buttons.forEach(function(button) {
        button.style.display = 'block';
    });

}

document.getElementById("Exercise").onclick = function(){

    const buttons = document.querySelectorAll('.Screen4 .Activityanswer button');
    buttons.forEach(function(button) {
        button.style.display = 'none';
        exercise_type = "Exercise";
    });

}

document.getElementById("Leisure").onclick = function(){

    const buttons = document.querySelectorAll('.Screen4 .Activityanswer button');
    buttons.forEach(function(button) {
        button.style.display = 'none';
        exercise_type = "Leisure";
    });

}

document.getElementById("Work").onclick = function(){

    const buttons = document.querySelectorAll('.Screen4 .Activityanswer button');
    buttons.forEach(function(button) {
        button.style.display = 'none';
        exercise_type = "Work";
    });

}

document.getElementById("Hours").onclick = function(){

    const buttons = document.querySelectorAll('.Screen4 .Activityanswer button');
    buttons.forEach(function(button) {
        button.style.display = 'none';
    });

}

function fun1() {
    const activityValue = list1.value;

    const listItem = document.createElement("li");
    listItem.textContent = activityValue;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {
        out1.removeChild(listItem);
        if(exercise_type == "Exercise"){  

            Recex -= ExerciseHours;
            
            console.log("Total Exercise Time (mins):", Recex);
            
        
            console.log(Recex)
        } else if(exercise_type == "Work"){
            Recwo -= Workhours;
            
            console.log("Total work Time (mins):", Recwo);
            
        
            console.log(Recwo)
    
        }else if(exercise_type == "Leisure"){
            Reclei -= Leisurehours;
            
            console.log("Total Exercise Time (mins):", Reclei);
            
        
            console.log(Reclei)
            
            console.log("Total Leisure Time (mins):", Reclei);
    
        }
    

    });

    listItem.appendChild(deleteButton);

    out1.appendChild(listItem);

    list1.value = '';

    console.log(exercise_type);

    if(exercise_type == "Exercise"){  
        let hours = parseInt(document.getElementById("Hours").value) || 0;
        let minutes = parseInt(document.getElementById("Minutes").value) || 0;
        
        ExerciseHours = hours * 60 + minutes;
        Recex += ExerciseHours;
        
        console.log("Total Exercise Time (mins):", Recex);
        
    
        console.log(Recex)
    } else if(exercise_type == "Work"){
        let hours = parseInt(document.getElementById("Hours").value) || 0;
        let minutes = parseInt(document.getElementById("Minutes").value) || 0;
        
        Workhours = hours * 60 + minutes;
        Recwo += Workhours;
        
        console.log("Total Work Time (mins):", Recwo);

    }else if(exercise_type == "Leisure"){
        let hours = parseInt(document.getElementById("Hours").value) || 0;
        let minutes = parseInt(document.getElementById("Minutes").value) || 0;
        
        Leisurehours = hours * 60 + minutes;
        Reclei += Leisurehours;
        
        console.log("Total Leisure Time (mins):", Reclei);

    }




    

}

document.getElementById("finish").onclick = function() {
    const buttons = document.querySelectorAll('.Screen4 .InputActivity button');
    const inputs = document.querySelectorAll('.Screen4 input');
    const CompleteButtons = document.querySelectorAll('#activityList button');

    inputs.forEach(function(input){
        input.style.display = 'none';
    });

    buttons.forEach(function(button) {
        button.style.display = 'none';
    });

    CompleteButtons.forEach(function(button){
        button.style.display = 'block';
        button.textContent = 'Complete';
    })

    if(age > 17){
        let comment = "";
    
        if(Recex < 30){
            comment += "Adults aged 18 and over require at least 30 minutes of activity a day to reamin healthy, consider fitting some more physical exercise into your day. ";
        }
        if(Recwo > 660){
            comment += "You are doing excessive amounts of work, if possible consider spreading out the workload or consider taking appropriate breaks.";
        }
    
        Comments1.innerHTML = comment;
    }
    
    if( 5 < age < 7 ){
        let comment = "";
    
        if(Recex < 60){
            comment += "Children aged 5 - 17 require at least 60 minutes of activity a day to remain healthy, consider fitting some more physical exercise into your day. ";
        }
        if(Recwo > 180){
            comment += "You are doing excessive amounts of work, if possible consider spreading out the workload or consider taking appropriate breaks.";
        }
    
        Comments1.innerHTML = comment;
    }

    if( 0 <= age < 5 ){
        let comment = "";
    
        if(Recex < 180){
            comment += "Children aged 0 - 4 require at least 180 minutes of activity a day to remain healthy, consider fitting some more physical exercise into your day. ";
        }
        Comments1.innerHTML = comment;
    }

    
    if( 8 < age < 11 ){
        let comment = "";
    
        if(Recex < 60){
            comment += "Children aged 5 - 17 require at least 60 minutes of activity a day to remain healthy, consider fitting some more physical exercise into your day. ";
        }
        if(Recwo > 240){
            comment += "You are doing excessive amounts of work, if possible consider spreading out the workload or consider taking appropriate breaks.";
        }
    
        Comments1.innerHTML = comment;
    }

    if( 12 < age < 14 ){
        let comment = "";
    
        if(Recex < 60){
            comment += "Children aged 5 - 17 require at least 60 minutes of activity a day to remain healthy, consider fitting some more physical exercise into your day. ";
        }
        if(Recwo > 360){
            comment += "You are doing excessive amounts of work, if possible consider spreading out the workload or consider taking appropriate breaks.";
        }
    
        Comments1.innerHTML = comment;
    }

    if( 15 < age < 17 ){
        let comment = "";
    
        if(Recex < 60){
            comment += "Children aged 5 - 17 require at least 60 minutes of activity a day to remain healthy, consider fitting some more physical exercise into your day. ";
        }
        if(Recwo > 480){
            comment += "You are doing excessive amounts of work, if possible consider spreading out the workload or consider taking appropriate breaks.";
        }
    
        Comments1.innerHTML = comment;
    }
    









    


};




