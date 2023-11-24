//13.Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
let number=prompt('Enter birth year','exa:1990');
const now=new Date();
const year=now.getFullYear();
let age=year-number;
age<18?console.log('Enter birth year:','You are ',age,'you will be allowed to drive after',18-age,'years'):console.log('You are ',age,' you are old enough to drive');
//14.Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
let get_num=prompt('enter number of years you lived','100');
console.log('you lived',31536000*get_num,'seconds.');
//15.Create a human readable time format using the Date time object
const da_te=new Date();
const year2=da_te.getFullYear();
const month=da_te.getMonth();
const day=da_te.getDay();
const hour=da_te.getHours();
const minute=da_te.getMinutes();
console.log(`${year2}-${month}-${day} ${hour}:${minute}`)
console.log(`${day}-${month}-${year2} ${hour}:${minute}`)
console.log(`${day}/${month}/${year2} ${hour}:${minute}`)
//15.Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
console.log(`${year2}-${month<10?'0'+month:month}-${day<10?'0'+day:day} ${hour<10?'0'+hour:hour}:${minute<10?'0'+minute:minute}`)
