//예제1 : 2개의 숫자를 입력받아 더한 결과 값을 html에 <h3>안에 출력

const i = prompt('문제 1(더하기) : 숫자를 입력하세요.')*1

const i1 = prompt('문제 1(더하기) : 2번째 숫자를 입력하세요.')*1

// 1번째 출력 방법 : document.write(`<h3>${i+i1}</h3>`)
// 2번째 출력 방법 : document.querySelector('h3').innerHTML = i+i1
// 3번째 출력 방법 : document.querySelector('#h3id').innerHTML = i+i1 ;
/* 
let i2 = 0 ; // 여기 const 넣으면 값이 2번 들어가면서 let 쓰라고 함 = 상수에 변수 적용했다고 오류 뜸
    i2 += i  // 보니까 이 선언과 과정중에서 중간과정에서 바뀌면 상수로 선언하면 안됨. 나중에 되는 상황도 보기
    i2 += i1


document.querySelector('#h3id').innerHTML = i2
 */

let i2 = ``;
   // Number(i2) = i2+ i 문법의 오류 뜸 Invalid 뭐라 뭐라
    i2 = i // 문자열로 만들어도 그냥 수를 바로 바꿔주면 됨 변수라서 
    i2 = i2+ i1 

    console.log( typeof(i2)) // number
    console.log(i2)

document.write(`<h3>${i2}</h3>`)
//document.write는 밑에 쌓이네 신기하네

//예제2 : 2개의 숫자를 입력받아 더 큰수를 html에 <h3>안에 출력

const i3 = prompt('문제 2(더 큰 수) : 숫자를 입력하세요.')*1

const i4 = prompt('문제 2(더 큰 수) : 2번째 숫자를 입력하세요.')*1

document.querySelector('#h3id').innerHTML = `${i3>i4&&i3!==i4? i3 : i4}`

//재밌다!

