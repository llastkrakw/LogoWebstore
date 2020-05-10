const Checker = {};

Checker.lastname = function() {
  const lastname = document.querySelector('#lastname');
  return lastname.value.length >= 2;
};

Checker.firstname = function() {
  const firstname = document.querySelector('#firstname');
  return firstname.value.length >= 2;
};

Checker.mail = function() {
    var reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    const mail = document.querySelector('#mail');
    return reg.test(mail.value);
};

function isLeapYear(Year){
    if((Year%4==0 && Year%100!=0) || (Year%400==0)){
        return true;
    }
    else{
        return false;
    }
}

Checker.day = function() {
    var Mois = new Array('Janvier','Fevrier','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Decembre');
    const day= document.querySelector('#day');
    const month = document.querySelector('#month');
    const year = document.querySelector('#year');
    if (isLeapYear(year.value)==true){
        for(var i=0; i<12; i++){
            if((i%2==0 && month.value==Mois[i]) || (i==7 && month.value==Mois[i])){
                return day.value <= 31;
            }
            else if(i==1 && month.value==Mois[i]){
                return day.value <= 29;
                    }
            else if(i%2!=0 && month.value==Mois[i]){
                return day.value <=30;
            }
        }
    }
    else{
       for(var i=0; i<12; i++){
            if((i%2==0 && month.value==Mois[i]) || (i==7 && month.value==Mois[i])){
                return day.value <= 31;
            }
            else if(i==1 && month.value==Mois[i]){
                return day.value <= 28;
                    }
            else if(i%2!=0 && month.value==Mois[i]){
                return day.value <=30;
            }
        } 
    }
};

Checker.month = Checker.day;
Checker.year = Checker.day;

Checker.passworda = function() {
  const passworda = document.querySelector('#passworda');
  if(passstrength(passworda.value)==0){
      return false;
  }
  if(passstrength(passworda.value)==1){
      return true;
  }
  if(passstrength(passworda.value)==2){
      return true;
  }
};

Checker.passwordb = function() {
    const resulta = Checker.passworda();
    const passworda = document.querySelector('#passworda');
    const passwordb = document.querySelector('#passwordb');
    if(resulta === true){
        return passwordb.value === passworda.value;
    }
    else{
        return false;
    }
};

function passstrength(Password){
    var reg1 = /((?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])).{6,}/;
    var reg2 = /((?=.*[a-z])(?=.*[0-9])).{6,}/;
    var reg3 = /((?=.*[A-Z])(?=.*[a-z])).{6,}/;
    var reg4 = /((?=.*[A-Z])(?=.*[0-9])).{6,}/;
    if(reg1.test(Password) == true){
        return 2;
    }
    else if(reg2.test(Password) == true || reg3.test(Password) == true || reg4.test(Password) == true){
        return 1;
       }
    else{
        return 0;
    }
}

