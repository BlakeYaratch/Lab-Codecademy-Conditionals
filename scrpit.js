//8 Ball
var userName = ''
'Jane' ? console.log('Hello, Jane!') :
console.log('Hello!');
var userQuestion = 'Am I a god?'
console.log(` ${userQuestion}`);
const randomNumber = Math.floor(Math.random() * 8);
let = ''
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain'
    break;
  case 1:
    eightBall = 'It is decidedly so'
    break;
  case 2:
    eightBall = 'Reply hazy try again'
    break;
  case 3:
   eightBall = 'Cannot predict now'
    break;
  case 4:
    eightBall = 'Do not count on it'
    break;
  case 5:
    eightBall = 'My sources say no'
    break;
  case 6:
    eightBall = 'Outlook not so good'
    break;
  case 7:
    eightBall = 'Signs point to yes'
    break;
}
console.log(`The eight ball answered:
 ${eightBall}`);
var eightBall = ''
console.log(eightBall);


//Race day

let raceNumber = Math.floor(Math.random()*1000);
let earlyRegistration = true;
let runnerAge  = 19;

if (earlyRegistration===false){
raceNumber += 1000;}

if (runnerAge>18 && earlyRegistration=== true && raceNumber <1000){
  console.log(`Your race starts at 9:30 am and your race number is: ${raceNumber}`);
} else if (earlyRegistration=== true || runnerAge > 18){
  console.log(`Your race starts at 11:00 am and your race number is: ${raceNumber}`);
} else if (runnerAge < 18 && earlyRegistration===false){
   console.log(`Your race starts at 12:30 pm and your race number is: ${raceNumber}`);
 } else{
   console.log('Please see the registration desk to get your number');
 }