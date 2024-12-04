function scuberGreetingForFeet(distance){
  // Write your code here!
  if(distance <=400 ){
    return 'This one is on me!'
  } else if(distance >=400 && distance <=2000){
    return 'That will be twenty bucks.'
  } else if(distance > 2000 && distance <2500){
    return 'I will gladly take your thirty bucks.'
  } else if(distance > 2500){
    return 'No can do.';
  }
    
}
function ternaryCheckCity(iscity){
  // Write your code here!
  const city= 'NYC'
  return (iscity === city ? 'Ok, sounds good.' : 'No go.')
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let generousTip, notgenerousTip;
  switch (tip){
    case 'generous':{
      return 'Thank you so much.'
      break;
    }
    case 'not as generous': {
      return 'Thank you.'
    }
    default:{
      return 'Bye.'
    }
  }
}