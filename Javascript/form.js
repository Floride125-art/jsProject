var Ccentury, YYear, MMonth, DDay, dWeek, umunsi;
var dayWeek=["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];
var boyNames=["Kwasi", "Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
var girlNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
function validate(){
  var bothGender= document.getElementsByName("gender");
  if(document.myForm.year.value== "" || document.myForm.year.value.length != 4 || document.myForm.year.value>2100 || document.myForm.year.value <=1900){
    alert("Plz enter the valid born Year like 1999");
    document.myForm.year.focus();
    return false;
  }
  else if( document.myForm.month.value == "" || isNaN( document.myForm.month.value ) || 
  document.myForm.month.value.length != 2 || document.myForm.month.value > 12  || document.myForm.month.value <= 0){
     alert( "Please provide your month of birth! between 1 and 12" );
     document.myForm.month.focus() ;
     return false;
  }
  else if( document.myForm.day.value == "" || isNaN( document.myForm.month.value ) || 
  document.myForm.month.value.length != 2|| document.myForm.day.value > 31 || document.myForm.day.value <= 0) {
     alert( "Please provide a valid date that you were born in!" );
     document.myForm.day.focus() ;
     return false;
  }
  else if(bothGender[0].checked == false && bothGender[1].checked == false){
    alert("Select your gender plz");
    return false;
  }
  else {
    return true;
  }

}
function calculateDayValue(){
  year = document.getElementById("year").value;
  Ccentury= parseInt(year.substring(0,2));
  YYear = parseInt(year.substring(2,4));
  MMonth = parseInt(document.getElementById("month").value);
  DDay = parseInt(document.getElementById("date").value);
  dWeek = ( ( (Ccentury/4) -2*Ccentury-1) + ( (5*YYear/4) ) + ((26*(MMonth+1)/10) ) + DDay)%7;
  console.log(dWeek);
  return (Math.floor(dWeek));
}

function getGender(){
  var genders = document.getElementsByName("gender");
  if(genders[0].checked == true){
    var gender = "male";
  }
  else if(genders[1].checked == true){
    var gender = "female";
  }
  else{
    return false;
  }

  switch(gender){
    case "male":
      if (umunsi == 1){
        alert("You were born on " +dayWeek[0] + " and Your akan name is " +boysNames[0]+"!");
      }
      else if(umunsi == 2){
        alert("You were born on "+dayWeek[1] + " and Your akan name is " +boyNames[1]+"!");
      }
      else if(umunsi== 3){
        alert("You were born on " +dayWeek[2]+ " and Your akan name is " +boyNames[2]+"!");
      }
      else if(umunsi == 4){
        alert("You were born on "+dayWeek[3] +  " and Your akan name is " +boyNames[3]+"!");
      }
      else if(umunsi == 5){
        alert("You were born on "+dayWeek[4] +  " and Your akan name is " +boyNames[4]+"!");
      }
      else if(umunsi == 6){
        alert("You were born on "+dayWeek[5] +  " and Your akan name is " +boyNames[5]+"!");
      }
      else if(umunsi == -0){
        alert("You were born on "+dayWeek[6] + " and Your akan name is " +boyNames[6]+"!");
      }
    break;
    case "female":
      if (umunsi == 1){
        alert("You were born on "+dayWeek[0] + " and Your akan name is  " + girlNames[0]+"!");
      }
      else if(umunsi == 2){
        alert("You were born on " +dayWeek[1] + " and Your akan name is " + girlNames[1]+"!");
      }
      else if(umunsi == 3){
        alert("You were born on " +dayWeek[2] + " and Your akan name is " +girlNames[2]+"!");
      }
      else if(umunsi == 4){
        alert("You were born on " +dayWeek[3] + " and Your akan name is " + girlNames[3]+"!");
      }
      else if(umunsi == 5){
        alert("You were born on " +dayWeek[4] + " and Your akan name is " + girlNames[4]+"!");
      }
      else if(umunsi == 6){
        alert("You were born on " +dayWeek[5] + " and Your akan name is " + girlNames[5]+"!");
      }else if(umunsi == -0){
        alert("You were born on " +dayWeek[6] + " and Your akan name is " +girlNames[6]+"!");
      }
    break
    default:
      
    }
}
function findName(){
  umunsi=calculateDayValue();
  getGender();
}


 
  