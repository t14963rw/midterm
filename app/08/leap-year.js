

var leapYear = function(a){
　if(Number.isInteger(a) != true){
   return false;
 }

  if (a == 0){
    return false;
  }

  else if(a%4 != 0){
    return false;
  }

  else if(a%4 ==0 && a%100 != 0 && a%400 != 0)
    {
      return true;
    }

    else if (a%100 ==0 && a%400 != 0)
    {
      return false;
    }

    else if (a%400 == 0){
      return true;
    }


    else if (a>0 && a%1 != 0){
      return false;
    }


    else if (a < 0){
      return false;
    }
}
