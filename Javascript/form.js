function getName(){
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

}
  