let a = 7;
let b = 94;
///////////////////////////////////////
/*
 if (a = 7) {
    console.log(b)
 } else {
    console.log(a)
 };  */
 
////////////////////////////////////////

/* 
 if (b = 94) {
    console.log(a)
 }  else {
    console.log(b)
 };
 */

 ////////////////////////////////////////

 let temp = a;
 a = b;
 b = temp;

 console.log(a);
 console.log(b);