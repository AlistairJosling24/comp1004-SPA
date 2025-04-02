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

let exercisestartH;
let exercisestartM;
let exercisefinishH;
let exercisefinishM;

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

function fun1() {
    const activityValue = list1.value;

    const listItem = document.createElement("li");
    listItem.textContent = activityValue;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Complete";
    deleteButton.addEventListener("click", function() {
        out1.removeChild(listItem);
    });

    listItem.appendChild(deleteButton);

    out1.appendChild(listItem);

    list1.value = '';
}

activityButton.addEventListener("click", fun1);

