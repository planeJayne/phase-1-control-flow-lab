const feet = 599;
function scuberGreetingForFeet(feet) {
  
if (feet <= 400){ 
  return 'This one is on me!'; 
  }

if (feet >= 400 && feet <= 2000){
  return 'That will be twenty bucks.';
  }
if (feet >=2000 && feet < 2500){
  return 'I will gladly take your thirty bucks.';
  }
  if (feet > 2500){
  return 'No can do.'
} 
}


function ternaryCheckCity(city){
  return city === "NYC" ? "Ok, sounds good." : "No go.";

}

function switchOnCharmFromTip(){
  // Write your code here!
}