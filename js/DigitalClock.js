
function updateClock(){
    var now = new Date();
    var dname = now.getDay();
    var mo = now.getMonth();
    var dum = now.getDate();
    var yr = now.getFullYear();
        hou = now.getHours();
         min = now.getMinutes();
         sec = now.getSeconds();
         pe = "AM";

         


         if(hou == 0){
            hou = 12;
         }
         if(hou > 12){
            hou = hou - 12;
            pe = "PM";
            
         }
         var months = ["january","Febuary","March"," April", "May", "June", "July", "Augest", "September", "October", "November"," December"];
         var week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
         var ids =  ["dayname","month","daynum","year","hour","minutes","seconds","period"];
         var values = [week[dname],months[mo],dum,yr,hou,min,sec,pe];
         for(var i = 0; i < ids.length;i++);
         document.getElementById(ids[i]).firstChild.nodeValue = values[i];

}

function intiClock(){
    updateClock();
    window.setInterval("updateClock()",1);
}

