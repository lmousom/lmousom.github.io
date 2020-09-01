let user_name = sessionStorage.getItem("name");
let user_points = sessionStorage.getItem("points");
let user_time = sessionStorage.getItem("time");
var usr_time = parseInt(user_time/60);
var sec = user_time % 60;
document.querySelector("span.points").innerHTML = user_points;
if(user_time < 60){
  document.querySelector("span.time_taken").innerHTML = user_time;
}
else{
 document.querySelector("span.time_taken").innerHTML = usr_time + " min " + sec;
}
