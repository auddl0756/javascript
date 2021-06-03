// 브라우저에 내장된 객체
// window가 최상위 객체

// // 팝업 창
// window.open("http://www.naver.com","네이버","width=350,height=400,left=50,top=10,scrollbars=no");

// //질의응답
// window.prompt("what is hobby? ","none");
// prompt("also possible");

// //경고 창
// window.alert("alert message");
// alert("also possible");

//일정 시간 간격으로 반복 실행하기
var num=1;
var timer = setInterval(function(){
    num++;
    console.log(num);
    if(num==3){
        clearInterval(timer);
    }
},1000);


//일정 시간이 지나면 코드 실행하고 종료하기
var reservated = setTimeout(function(){
    console.log("after 3 seconds.");
},3000);


//location 객체 : URL 창 관련
location.href="http://www.naver.com";

