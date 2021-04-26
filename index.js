/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}




/* End Given Code, don't edit above here...*/
function greet(timeString) {
  const splitedtime = timeString.split(':');
  const parsed = parseInt(timeString.split(':')[0]);
  if(parsed<12){
  return "Good Morning";
  }
  else if(parsed>=12 && parsed<=17){
  return "Good Afternoon";
  }
  else(parsed>17)
    return "Good Evening";
}


function displayMessage(string){
  document.getElementById("greeting").innerText=string;
}



/* Write your implementation of greet()  - If the time is earlier than 12pm, return "Good Morning".
  - If the time is between 12pm and  5pm, return "Good Afternoon".
  - If the time is later than 5pm, return "Good Evening".
} */
/* Write your implementation of displayMessage() */
