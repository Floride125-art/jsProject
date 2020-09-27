function getName(){
var myCentury = document.getElementById("century").value; ;
var mYear = document.getElementById("year").value;
var myMonth= document.getElementById("month").value;
var myDay = document.getElementById("day").value;
var genderM = document.querySelector('input[name="gender"]:checked').value;
var genderF = document.querySelector('input[name="gender"]:checked').value;
var dayWeek=["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];
var boysNames=["Kwasi", "Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
var girlsNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
var umunsi = ( ( (myCentury/4) -2*myCentury-1) + ((5*mYear/4) ) + ((26*(myMonth+1)/10)) + myDay ) % 7;
umunsi= umunsi.toFixed(0);
if(myDay <= 0 || myMonth <= 0){
  alert("Plz enter valid number which is greater than zero");
  
}
else if(myDay > 31|| myMonth>12 ){
  alert("plz provide valid day value of month less than 31 and less than 12 for months of year ");  
}
else if(mYear > 2020){
  alert("Your Birth Year can't be in future"); 
}
else if(umunsi == 1 || genderM == male){
  alert("you were born on" +dayWeek[0])
      document.getElementById("answer").innerHTML=boysNames[0];
}
else if(umunsi == 2 || genderM == male){
  alert("you were born on" +dayWeek[1])
      document.getElementById("answer").innerHTML=boysNames[1];

}
else if(umunsi == 3 || genderM == male){
  alert("you were born on" +dayWeek[2])
      document.getElementById("answer").innerHTML=boysNames[2];
}
else if(umunsi == 4 || genderM == male){
  alert("you were born on" +dayWeek[3])
      document.getElementById("answer").innerHTML=boysNames[3];
}
else if(umunsi == 5 || genderM == male){
  alert("you were born on" +dayWeek[4])
      document.getElementById("answer").innerHTML=boysNames[3];
  
}
else if(umunsi == 6 || genderM == male){
  alert("you were born on" +dayWeek[5])
      document.getElementById("answer").innerHTML=boysNames[5];
}
else if(umunsi == 7 || genderM == male){
  alert("you were born on" +dayWeek[6])
      document.getElementById("answer").innerHTML=boysNames[6];

}
else if(umunsi == 1 || genderM == female){
  alert("you were born on" +dayWeek[0])
      document.getElementById("answer").innerHTML=girlsNames[0];
  
}
else if(umunsi == 2 || genderM == female){
  alert("you were born on" +dayWeek[1])
      document.getElementById("answer").innerHTML=girlsNames[1];
 
}
else if(umunsi == 3 || genderF == female){
  alert("you were born on" +dayWeek[2])
      document.getElementById("answer").innerHTML=girlsNames[2];
 
}
else if(umunsi == 4 || genderF == female){
  alert("you were born on" +dayWeek[3])
      document.getElementById("answer").innerHTML=girlsNames[3];
 
}
else if(umunsi == 5 || genderF == female){
  alert("you were born on" +dayWeek[4])
      document.getElementById("answer").innerHTML=girlsNames[4];
  
}
else if(umunsi == 6 || genderF == female){
  alert("you were born on" +dayWeek[5])
      document.getElementById("answer").innerHTML=girlsNames[5];
}

else if(umunsi == 7 || genderF == female){
  alert("you were born on" +dayWeek[6])
      document.getElementById("answer").innerHTML=girlsNames[6];
}else{
  alert("your input are invalid!");
}
}

