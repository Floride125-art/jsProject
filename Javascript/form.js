function findName(){

var myCentury = document.getElementById("century").value; ;
var mYear = document.getElementById("year").value;
var myMonth= document.getElementById("month").value;
var myDay = document.getElementById("day").value;
var gender = document.querySelector('input[name="gender"]:checked').value;
var dayWeek=["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];
var boysNames=["Kwasi", "Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
var girlsNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
var umunsi = ( ( (myCentury/4) -2*myCentury-1) + ((5*mYear/4) ) + ((26*(myMonth+1)/10)) + myDay ) % 7;
console.log(Math.floor(dayWeek));
if(myDay <= 0 || myMonth <= 0 || mYear <= 0){
  alert("Plz enter valid number which is greater than zero");
  
}
else if(myDay > 31|| myMonth>12 ){
  alert("plz provide valid day value of month less than 31 and less than 12 for months of year ");  
}
else if(mYear > 2020){
  alert("Your Birth Year can't be in future"); 
}
else if(umunsi == 1 && gender == male){
  alert("you were born on "+ dayWeek[0] + "and your Akan name is ")
  document.getElementById("result").innerHTML=boysNames[0];
}
else if(umunsi == 2 && gender == male){
  alert("you were born on "+ dayWeek[1] + "and your Akan name is ")
  document.getElementById("result").innerHTML=boysNames[1];
}
else if(umunsi == 3 && gender == male){
  alert("you were born on "+ dayWeek[2] + "and your Akan name is ")
  document.getElementById("result").innerHTML=boysNames[2];
}
else if(umunsi == 4 && gender == male){
  alert("you were born on "+ dayWeek[3] + "and your Akan name is ")
  document.getElementById("result").innerHTML=boysNames[3];
}
else if(umunsi == 5 && gender == male){
  alert("you were born on "+ dayWeek[4] + "and your Akan name is ")
  document.getElementById("result").innerHTML=boysNames[4];
}
else if(umunsi == 6 && gender == male){
  alert("you were born on "+ dayWeek[5] + "and your Akan name is ")
  document.getElementById("result").innerHTML=boysNames[5];
}
else if(umunsi == 7 && gender == male){
  alert("you were born on "+ dayWeek[6] + "and your Akan name is ")
  document.getElementById("result").innerHTML=boysNames[6];
}
else if(umunsi == 1 && gender == female){
  alert("you were born on "+ dayWeek[0] + "and your Akan name is ")
  document.getElementById("result").innerHTML=girlsNames[0];
}
else if(umunsi == 2 && gender == female){
  alert("you were born on "+ dayWeek[1] + "and your Akan name is ")
  document.getElementById("result").innerHTML=girlsNames[1];
}
else if(umunsi == 3 && gender == female){
  alert("you were born on "+ dayWeek[2] + "and your Akan name is ")
  document.getElementById("result").innerHTML=girlsNames[1];
}
else if(umunsi == 4 && gender == female){
  alert("you were born on "+ dayWeek[3] + "and your Akan name is ")
  document.getElementById("result").innerHTML=girlsNames[3];
}
else if(umunsi == 5 && gender == female){
  alert("you were born on "+ dayWeek[4] + "and your Akan name is ")
  document.getElementById("result").innerHTML=girlsNames[4];
}
else if(umunsi == 6 && gender == female){
  alert("you were born on "+ dayWeek[5] + "and your Akan name is ")
  document.getElementById("result").innerHTML=girlsNames[5];
}
else if(umunsi == 7 && gender == female){
  alert("you were born on "+ dayWeek[6] + "and your Akan name is ")
  document.getElementById("result").innerHTML=girlsNames[6];
}
else{
  return true;
}

}
