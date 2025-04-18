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
    
    const priorityButton = document.createElement("button");
    priorityButton.textContent = "Low";
    priorityButton.style.backgroundColor = 'green';

    let prioritynumber = 1;

    priorityButton.addEventListener("click", function() {
        prioritynumber = prioritynumber + 1;
        if(prioritynumber == 1){
            priorityButton.style.backgroundColor = 'green';
            priorityButton.textContent = "Low";
        }else if(prioritynumber == 2){
            priorityButton.style.backgroundColor = 'orange';
            priorityButton.textContent = "Medium";
        }else if(prioritynumber == 3){
            priorityButton.style.backgroundColor = 'red';
            priorityButton.textContent = "High";
        }else if(prioritynumber > 3){
            prioritynumber = 1;
            priorityButton.style.backgroundColor = 'green';
            priorityButton.textContent = "Low";
        }
    
    })





    deleteButton.addEventListener("click", function() {
        out1.removeChild(listItem);
        
        if(exercise_type == "Exercise"){  
            Recex -= ExerciseHours;
            console.log("Total Exercise Time (mins):", Recex);
            console.log(Recex);
        } else if(exercise_type == "Work") {
            Recwo -= Workhours;
            console.log("Total work Time (mins):", Recwo);
            console.log(Recwo);
        } else if(exercise_type == "Leisure") {
            Reclei -= Leisurehours;
            console.log("Total Exercise Time (mins):", Reclei);
            console.log(Reclei);
            console.log("Total Leisure Time (mins):", Reclei);
        }
    });

    listItem.appendChild(deleteButton);
    listItem.appendChild(priorityButton);
    out1.appendChild(listItem);
    list1.value = '';

    console.log(exercise_type);

    if(exercise_type == "Exercise"){  
        let hours = parseInt(document.getElementById("Hours").value) || 0;
        let minutes = parseInt(document.getElementById("Minutes").value) || 0;
        
        ExerciseHours = hours * 60 + minutes;
        Recex += ExerciseHours;
        
        console.log("Total Exercise Time (mins):", Recex);
        console.log(Recex);
    } else if(exercise_type == "Work") {
        let hours = parseInt(document.getElementById("Hours").value) || 0;
        let minutes = parseInt(document.getElementById("Minutes").value) || 0;
        
        Workhours = hours * 60 + minutes;
        Recwo += Workhours;
        
        console.log("Total Work Time (mins):", Recwo);
    } else if(exercise_type == "Leisure") {
        let hours = parseInt(document.getElementById("Hours").value) || 0;
        let minutes = parseInt(document.getElementById("Minutes").value) || 0;
        
        Leisurehours = hours * 60 + minutes;
        Reclei += Leisurehours;
        
        console.log("Total Leisure Time (mins):", Reclei);
    }
}

document.getElementById("finish").onclick = function() {
    let age = parseInt(document.getElementById("myAge").value) || 0;
    const buttons = document.querySelectorAll('.Screen4 .InputActivity button');
    const inputs = document.querySelectorAll('.Screen4 input');
    const CompleteButtons = document.querySelectorAll('#activityList button');

    inputs.forEach(function(input){
        input.style.display = 'none';
    });

    buttons.forEach(function(button) {
        button.style.display = 'none';
    });

    let Restart = document.getElementById("Restart");
    Restart.style.display = "block"

    CompleteButtons.forEach(function(button){
        button.style.display = 'block';
        button.textContent = 'Complete';
    });

    let CommentBackground = document.getElementById('Comments1');
    CommentBackground.style.backgroundColor = "green"; 
    CommentBackground.style.display = "block";

    let comment = "";

    if(age > 17){
        if(Recex < 30){
            comment += "Adults aged 18 and over require at least 30 minutes of activity a day to reamin healthy, consider fitting some more physical exercise into your day. ";
        }
        if(Recwo > 660){
            comment += "You are doing excessive amounts of work, if possible consider spreading out the workload or consider taking appropriate breaks.";
        }
    }

    if(age > 5 && age < 7){
        if(Recex < 60){
            comment += "Children aged 5 - 17 require at least 60 minutes of activity a day to remain healthy, consider fitting some more physical exercise into your day. ";
        }
        if(Recwo > 180){
            comment += "You are doing excessive amounts of work, if possible consider spreading out the workload or consider taking appropriate breaks.";
        }
    }

    if(age >= 0 && age < 5){
        if(Recex < 180){
            comment += "Children aged 0 - 4 require at least 180 minutes of activity a day to remain healthy, consider fitting some more physical exercise into your day. ";
        }
    }

    if(age > 8 && age < 11){
        if(Recex < 60){
            comment += "Children aged 5 - 17 require at least 60 minutes of activity a day to remain healthy, consider fitting some more physical exercise into your day. ";
        }
        if(Recwo > 240){
            comment += "You are doing excessive amounts of work, if possible consider spreading out the workload or consider taking appropriate breaks.";
        }
    }

    if(age > 12 && age < 14){
        if(Recex < 60){
            comment += "Children aged 5 - 17 require at least 60 minutes of activity a day to remain healthy, consider fitting some more physical exercise into your day. ";
        }
        if(Recwo > 360){
            comment += "You are doing excessive amounts of work, if possible consider spreading out the workload or consider taking appropriate breaks.";
        }
    }

    if(age > 14 && age < 18){
        if(Recex < 60){
            comment += "Children aged 5 - 17 require at least 60 minutes of activity a day to remain healthy, consider fitting some more physical exercise into your day. ";
        }
        if(Recwo > 480){
            comment += "You are doing excessive amounts of work, if possible consider spreading out the workload or consider taking appropriate breaks.";
        }
    }

    CommentBackground.innerHTML = comment;
};

document.getElementById("Restart").onclick = function() {
    Comments1.innerHTML = " ";

    ExerciseHours = 0;
    Workhours = 0;
    Leisurehours = 0;

    Recex = 0;
    Recwo = 0;
    Reclei = 0;

    const buttons = document.querySelectorAll('.Screen4 .InputActivity button');
    const inputs = document.querySelectorAll('.Screen4 input');

    inputs.forEach(function(input){
        input.style.display = 'flex';
    });

    buttons.forEach(function(button) {
        button.style.display = 'block';
    });

    out1.innerHTML = '<p></p>';

    const Restart = document.getElementById("Restart");
    Restart.style.display = "none";

    CommentBackground = document.getElementById('Comments1');
    CommentBackground.style.backgroundColor = "none"; 
    CommentBackground.style.display = "none";
}

function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    }

    emailjs.send("service_5qcof2k", "template_shqrs6i",parms).then(alert("Email Sent!"))
}






