let number = 100

if (number < 50 ) {
 console.log ('ნაკლებია 50ზე')
}
else if (number > 20) {
    console.log ('მეტია 20ზე')
 }

 else {
    console.log ('შეცდომა')
 } 

let ternary = number < 50 ? 'ნაკლებია 50ზე' : number > 20 ? 'მეტია 20ზე' : 'შეცდომა' ;
console.log (ternary)

let a = 'მარიამ'
if (a == 'მარიამ') { 
    console.log (true)
}
else {
    console.log (false)
}


switch (a) {
case 'მარიამ': 
console.log (true)
break;
default:
    console.log (false)
}



let box = ("ნებისმიერი");
console.log(typeof box);

 

let numbers = 10;
console.log(String(numbers)); 
