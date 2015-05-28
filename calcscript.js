var value=0;
var flag=false;
var pendingop="";
var c=document.getElementById("display");
function num(n)
{
     if(flag)
     {
       c.innerHTML=n;
       flag=false;

     }
     
     else
     {
       if(c.innerHTML=="0")
       	 c.innerHTML=n;
       	else
       		c.innerHTML+=n;


     }

}

function opr(op) 
{
  var a=c.innerHTML;
  if(flag&&pendinop !="=") ;
  else
  {
      flag=true;
      if('+'==pendingop)
      	value+=parseFloat(a);
      else if('-'==pendingop)
        value+=parseFloat(a);
      else if('*'==pendingop)
        value*=parseFloat(a);
      else if('/'==pendingop)
        value/=parseFloat(a);     	 
      else
      	value=parseFloat(a);

     c.innerHTML=value;
     pendingop=op;

    }


}

function decimal()
 {
   var cur = c.innerHTML;
      if (flag) 
      {
          cur = "0.";
          flag = false;
                
       }
                
      else
       {
          if (cur.indexOf(".") == -1)
          cur += ".";
        }
       c.innerHTML = cur;

 }

function oprc()
{
  value=0;
  pendingop="";
  c.innerHTML="0";
  flag=true;

} 
