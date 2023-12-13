
const q7 = Number(prompt('문제 7 수 입력'))/2 //짝수건 홀수건 다 되게 만들려면?
/* 
let
i/b/s
1/4/1       b = 1부터 q7-i
2/3/3
3/2/5
4/1/7       s = 1부터 2*i-1
5/0/9
 */

let output = ``;





/* 
let
i/b/s
1/0/9       b = 1부터 i-1
2/1/7
3/2/5
4/3/3       s = 1부터 2*q7-2*i+1 
5/4/1
 */

if((2*q7)%2==0){

    for(let i=1 ; i<=q7 ; i++ ){
        for(let b=1; b<=q7-i; b++){ output += ` `;
        }
        for(let s=1; s<=2*i-1; s++){ output += `*`
        }
        
        output += '\n'
    }


    for(let i=1; i<=q7; i++){
        for(let b=1; b<=i-1; b++){ output += ` `;
        }
        for(let s=1; s<=2*q7-2*i+1; s++){output += `*`;
        }
        output += `\n`
    }   
}


else{

    for(let i=1 ; i<=q7+0.5 ; i++ ){
        for(let b=1; b<=(q7+0.5)-i; b++){ output += ` `;
        }
        for(let s=1; s<=2*i-1; s++){ output += `*`
        }
        
        output += '\n'
    }


    
    for(let i=1; i<=q7-0.5; i++){
        for(let b=1; b<=i; b++){ output += ` `;
        }
        for(let s=1; s<=2*(q7-0.5)-2*i+1 ; s++){output += `*`;
        }
        output += `\n`
    }
}


/* 
1/3/1           b = 1~ (q7+0.5)-i
2/2/3           s = 2*i-1
3/1/5
4/0/7

1/1/5           b = 1~i
2/2/3           s = 2*(q7-0.5)-2i+1
3/3/1
*/

console.log(output)