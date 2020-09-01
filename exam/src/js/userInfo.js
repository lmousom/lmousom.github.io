let user_name = sessionStorage.getItem("name");
let user_points = sessionStorage.getItem("points");
let user_time = sessionStorage.getItem("time");
let usr_time = user_time/60;
let sec = user_time%60;
if(user_time < 60){
  document.querySelector("span.time_taken").innerHTML = user_time;
}
else{
 document.querySelector("span.time_taken").innerHTML = usr_time + "M" + " " + sec + " Sec";
}
document.querySelector("span.name").innerHTML = user_name;
document.querySelector("span.points").innerHTML = user_points;


