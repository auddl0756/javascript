// 자바스크립트는 객체 기반 프로그래밍 언어
// 객체 종류 
// 1. 내장 객체 : Object, String ,Date ,Array ,Math 등
// 2. Browser Object Model : window ,location, history ,navigator 등
// 3. Document Object Model : 별로 안 중요.

// 내장 객체 -Object
var computer = new Object();
computer.name="lg gram";    //이런 식으로 속성을 그냥 할당할 수 있음
computer.cpu="intel i5";
computer.printHello = function(){
    document.writeln("hello");
}


document.writeln("computer.printHello() : ");
computer.printHello();

// 내장 객체 - Date
var today = new Date(); //현재 날짜와 시간
document.writeln("<br> ",today);

// 내장 객체 - Math :: 자바랑 거의 같네
var doubleNum = 3.141592;
var maxNum = Math.max(1,7,2,3,4);
document.writeln("<br> ",maxNum);

var absNum = Math.abs(-1.7);
document.writeln("<br> ",absNum);



