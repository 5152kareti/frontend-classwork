const works = {
    "task1" : {"title" : "Welcome Page", "url" : "works/Task 1.html"},
    "task2" : {"title" : "Dashboard", "url" : "works/Task 2.html"},
    "task3" : {"title" : "Hover", "url" : "works/Task 3.html"},
    "task4" : {"title" : "Welcome to JS", "url" : "works/Task 4.html"},
    "task5" : {"title" : "Calculator with JS", "url" : "works/Task 5.html"},
    "task6" : {"title" : "String Operation", "url" : "works/Task 6.html"},
    "task7" : {"title" : "Grading Calculator", "url" : "works/Task 7.html"},
    "task8" : {"title" : "Call-Stack with Array", "url" : "works/Task 8.html"},
    "task9" : {"title" : "Loops", "url" : "works/Task 9.html"},
    "task10" : {"title" : "Info Insertion ", "url" : "works/Task 10.html"},
    "task11" : {"title" : "Java Script Statements", "url" : "works/Task 11.html"},
    "task12" : {"title" : "Information info/reset/search ", "url" : "works/Task 12.html"},
    "task13" : {"title" : "Functions", "url" : "works/Task 13.html"},
    "task14" : {"title" : "Boot Strap Forms", "url" : "works/Task 14.html"},
    "task15" : {"title" : "Age Calculator", "url" : "works/Task 15.html"},
};


const navDiv = document.getElementById("nav_div");
const contentFrame = document.getElementById("content_frame");

for (let key in works) {
    let projectLink = document.createElement("div");
    projectLink.innerText = works[key].title; 
    projectLink.className = "nav_item";

    projectLink.onclick = function () {
        contentFrame.src = works[key].url;
    };

    navDiv.appendChild(projectLink);
}