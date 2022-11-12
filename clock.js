function currentTime() {
  let date = new Date(); 
  hh = date.getHours();
  mm = date.getMinutes();
  ss = date.getSeconds();
  let session = "AM";

    
  if(hh > 12){
      session = "PM";
   }

   hh = (hh < 10) ? "0" + hh : hh;
   mm = (mm < 10) ? "0" + mm : mm;
   ss = (ss < 10) ? "0" + ss : ss;
    
   let time = hh + ":" + mm + ":" + ss + " " + session;

  document.getElementById("clock").innerText = time; 
  var t = setTimeout(function(){ currentTime() }, 1000); 

}

// let timeArray = [];

// function timeStamp() {
//     let date = new Date(); 
//     hh = date.getHours();
//     mm = date.getMinutes();
//     ss = date.getSeconds();
//     let session = "AM";
  
      
//     if(hh > 12) {
//         session = "PM";
//      }
  
//      hh = (hh < 10) ? "0" + hh : hh;
//      mm = (mm < 10) ? "0" + mm : mm;
//      ss = (ss < 10) ? "0" + ss : ss;
      
//      timeArray.push(hh);
//      timeArray.push(mm);
//      timeArray.push(ss);
//      timeArray.push(session);
    
// }

// let newTimeArray = [];

// function passOfTime() {
//     let date = new Date(); 
//     hh = date.getHours();
//     mm = date.getMinutes();
//     ss = date.getSeconds();
//     let session = "AM";
  
      
//     if(hh > 12) {
//        session = "PM";
//     }
  
//     hh = (hh < 10) ? "0" + hh : hh;
//     mm = (mm < 10) ? "0" + mm : mm;
//     ss = (ss < 10) ? "0" + ss : ss;
      
//     newTimeArray.push(hh);
//     newTimeArray.push(mm);
//     newTimeArray.push(ss);
//     newTimeArray.push(session);
//     alert(timeArray)
//     alert(newTimeArray)
// }