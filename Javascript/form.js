function getName(){
var myCentury = document.getElementById("century").value; ;
var mYear = document.getElementById("year").value;
var myMonth= document.getElementById("month").value;
var myDay = document.getElementById("day").value;
var gender = document.querySelector('input[name="gender"]:checked').value;
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
else if(umunsi == 1 || gender == male){
  alert("you were born on" +dayWeek[0])
      document.getElementById("results").innerHTML=boysNames[0];
}
else if(umunsi == 2 || gender == male){
  alert("you were born on" +dayWeek[1])
      document.getElementById("results").innerHTML=boysNames[1];

}
else if(umunsi == 3 || gender == male){
  alert("you were born on" +dayWeek[2])
      document.getElementById("results").innerHTML=boysNames[2];
}
else if(umunsi == 4 || gender == male){
  alert("you were born on" +dayWeek[3])
      document.getElementById("results").innerHTML=boysNames[3];
}
else if(umunsi == 5 || gender == male){
  alert("you were born on" +dayWeek[4])
      document.getElementById("results").innerHTML=boysNames[3];
  
}
else if(umunsi == 6 || gender == male){
  alert("you were born on" +dayWeek[5])
      document.getElementById("results").innerHTML=boysNames[5];
}
else if(umunsi == 7 || gender == male){
  alert("you were born on" +dayWeek[6])
      document.getElementById("results").innerHTML=boysNames[6];

}
else if(umunsi == 1 || gender == female){
  alert("you were born on" +dayWeek[0])
      document.getElementById("results").innerHTML=girlsNames[0];
  
}
else if(umunsi == 2 || gender == female){
  alert("you were born on" +dayWeek[1])
      document.getElementById("results").innerHTML=girlsNames[1];
 
}
else if(umunsi == 3 || gender == female){
  alert("you were born on" +dayWeek[2])
      document.getElementById("results").innerHTML=girlsNames[2];
 
}
else if(umunsi == 4 || gender == female){
  alert("you were born on" +dayWeek[3])
      document.getElementById("results").innerHTML=girlsNames[3];
 
}
else if(umunsi == 5 || gender == female){
  alert("you were born on" +dayWeek[4])
      document.getElementById("results").innerHTML=girlsNames[4];
  
}
else if(umunsi == 6 || gender == female){
  alert("you were born on" +dayWeek[5])
      document.getElementById("results").innerHTML=girlsNames[5];

}
else if(umunsi == 7 || gender == female){
  alert("you were born on" +dayWeek[6])
      document.getElementById("results").innerHTML=girlsNames[6];
  
}
else{
  return;
}

}



/*function result(){
  var d= document.getElementById("day").value;
  var m = document.getElementById("month").value;
  var y = document.getElementById("year").value;
  var c=document.getElementById("century").value;
  var gender = document.querySelector('input[name="gender"]:checked').value;
  var maleNames=[" Kwasi","Kwadwo","Kwabena","Kwaku","Yaw"," Kofi","Kwame"];
var femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
var dayw=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Sartuday"];
  var days=( ( (c/4) -2*c-1) + ((5*y/4) ) + ((26*(m+1)/10)) + d ) % 7;
  days= days.toFixed(0);
 
  if(d <=0 || m<=0 ){
    alert("days must be not be less than or equal to zero ");
  }
  else if(d>31 || m>12){
    alert(" it doesn't to be greater than 31");
  }
  else if(y>2020){
    alert("You can't born in future");}

    else if(days==1 || gender==male){
alert("you was born on" +dayw[0])
document.getElementById("results").innerHTML=maleNames[0];
    }
    else if(days==2 || gender==male){
      alert("you was born on" +dayw[1])
      document.getElementById("results").innerHTML=maleNames[1];
          }
          else if(days==3 || gender==male){
            alert("you was born on" +dayw[2])
            document.getElementById("results").innerHTML=maleNames[2];
                }
                else if(days==4 || gender==male){
                  alert("you was born on" +dayw[3])
                  document.getElementById("results").innerHTML=maleNames[3];
                      }
                      else if(days==5 || gender==male){
                        alert("you was born on" +dayw[4])
                        document.getElementById("results").innerHTML=maleNames[4];
                            }
                            else if(days==6 || gender==male){
                              alert("you was born on" +dayw[5])
                              document.getElementById("results").innerHTML=maleNames[5];
                                  }
                                  else if(days==7 || gender==male){
                                    alert("you was born on" +dayw[6])
                                    document.getElementById("results").innerHTML=maleNames[6];
                                        }
else if(days==1 || gender==female){
  alert("you was born on" +dayw[0])
  document.getElementById("results").innerHTML=femaleNames[0];
}
else if(days==2 || gender==female){
  alert("you was born on" +dayw[1])
  document.getElementById("results").innerHTML=femaleNames[1];
}
else if(days==3 || gender==female){
  alert("you was born on" +dayw[2])
  document.getElementById("results").innerHTML=femaleNames[2];
}
else if(days==4 || gender==female){
  alert("you was born on" +dayw[3])
  document.getElementById("results").innerHTML=femaleNames[3];
}
else if(days==5 || gender==female){
  alert("you was born on" +dayw[4])
  document.getElementById("results").innerHTML=femaleNames[4];
}
else if(days==6 || gender==female){
  alert("you was born on" +dayw[5])
  document.getElementById("results").innerHTML=femaleNames[5];
}
else if(days==7 || gender==female){
  alert("you was born on" +dayw[6])
  document.getElementById("results").innerHTML=femaleNames[6];
}
  
  else{
    return;
  }
}*/
  
