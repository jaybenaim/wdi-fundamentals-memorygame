// write your code below
var result; 
var max = 20; 


for(let i = 1; i <= max; i++ ) {  
if(i % 3 === 0 ) { 
  result = "fizz"; 
} else if(i % 5 === 0) { 
  result = "buzz"; 
} else if ( i % 3 === 0 && i % 5 === 0) { 
  result = "fizzbuzz"; 
} else { 
  result = i;  
} 
 console.log(result); 
}
