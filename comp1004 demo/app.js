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


