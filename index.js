/*
    Name: Kenan Micivoda
    Course: CS412 Web Application Development
    Assignment: Project #3
    Due date: 07.12.2021. 23:59
    Purpose: Creating third Project which will represent my CV, 
    upgrading the first and second one, using JavaScript
*/
console.log('*** Curriculum Vitae - Kenan Micivoda ***');

let languages = new Array('Bosnian, Croatian, Serbian - native language',
'English - first learned foreign language',
'German - second learned foreign language',
'Turkish - third learned foreign language');

console.log(languages[0]);
console.log(languages[1]);
console.log(languages[2]);
console.log(languages[3]);

id="demo";
id="demo_1";
id="demo_2";
id="demo_3";
id="demo_4";
id="demo_5";
let interests_skills = {
    programming: 'C, C++, Java, Phyton, Ruby, MathLAB, HTML, CSS, JavaScript',
    playing_instruments: 'Classic, acoustic and bass guitar',
    performance: 'Bassist in a music band MA6',
    sports: 'Swimming, football, basketball and volleyball',
    volunteering: 'On events and doing an internship',
    travel: 'Exploring my homecountry'
};
document.getElementById("demo").innerHTML = interests_skills.programming;
document.getElementById("demo_1").innerHTML = interests_skills.playing_instruments;
document.getElementById("demo_2").innerHTML = interests_skills.performance;
document.getElementById("demo_3").innerHTMl = interests_skills.sports;
document.getElementById("demo_4").innerHTML = interests_skills.volunteering;
document.getElementById("demo_5").innerHTML = interests_skills.travel;

/*let nameSurname = "Kenan Mičivoda, Ulica Zmaja od Bosne 10, 71000 Sarajevo";
let emailInfo  = "Email: kenan.m@hotmail.com";
let mail = emailInfo.link("mailto:kenan.m@hotmail.com");
let phoneNumber = "Phone number: +38761666999";
let phone = phoneNumber.link("tel:+38761666999");
document.getElementById("demo1").innerHTML = nameSurname;
document.getElementById("demo2").innerHTML = mail;
document.getElementById("demo3").innerHTML = phone;*/

function mf() {
    var value = prompt("Choose a language:");
          if (value == "English") {
            document.getElementById("demo10").innerHTML ="This page is already in English!";
                  } 
                  else {
                    document.getElementById("demo10").innerHTML ="This page is under construction, Sorry!";
                  }
        }

/*const lang = [ "Bosnian, Croatian, Serbian - native language",
        "English - first learned foreign language", "German- second learned foreign language", "Turkish - third learned foreign language"];

let text = "";
for (let i = 0; i < lang.length; i++) {
    text += lang[i] + "<br>";
} 

document.getElementById("demo_6").innerHTML = text;*/

function changeImage() {
    var image = document.getElementById("photoOfMe");
    if (image.src.match("_1")) {
      image.src = "photo_of_me.jpg";
    } 
    else {
      image.src = "photo_of_me_1.jpg";
    }
  }

  function myFunction() {
    var text;
    var timetable = document.getElementById("myInput").value;
  
      switch(timetable){
      case "Monday":
        text = "Operating Systems (12:00 -> 15:00)";
      break;
      case "Tuesday":
      text = "Cell Biology (09:00 -> 11:00)<br>Cell Biology Lab (11:00 -> 12:00)";
      break;
      case "Wednesday":
      text = "Project Management (09:00 -> 12:00)";
      break;
      case "Thursday":
      text = "Algorithms and Data Structure (12:00 -> 15:00)";
      break;
      case "Friday":
      text = "Web Application Development (09:00 -> 12:00)";
      break;
      case "Saturday":
      text = "Free Time/Band Practise";
      break;
      case "Sunday":
      text = "Band Practise";
      break;
      case "monday":
        text = "Operating Systems (12:00 -> 15:00)";
      break;
      case "tuesday":
      text = "Cell Biology (09:00 -> 11:00)<br>Cell Biology Lab (11:00 -> 12:00)";
      break;
      case "wednesday":
      text = "Project Management (09:00 -> 12:00)";
      break;
      case "thursday":
      text = "Algorithms and Data Structure (12:00 -> 15:00)";
      break;
      case "friday":
      text = "Web Application Development (09:00 -> 12:00)";
      break;
      case "saturday":
      text = "Free Time/Band Practise";
      break;
      case "sunday":
      text = "Band Practise";
      break;
    }
    document.getElementById("demo7").innerHTML = text;
  }