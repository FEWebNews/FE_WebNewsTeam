var hideicon1 = document.querySelector('.pass .user-input .hideeye');

var hideicon2 = document.querySelector('.pass1 .user-input .hideeye');



var pass1 =document.querySelector('.pass .user-input input')

var pass2 =document.querySelector('.pass1 .user-input input')

console.log(pass1)
console.log(pass2)

function show1(){
    pass1.setAttribute("type","text");
}
function hide1(){
    pass1.setAttribute("type","password");
}

function show2(){
    pass2.setAttribute("type","text");
}
function hide2(){
    pass2.setAttribute("type","password");
}
function swap11(){
 
    hideicon1.classList.add('fa-eye');
    hideicon1.classList.remove('fa-eye-slash');
}
function swap12(){
    hideicon1.classList.add('fa-eye-slash');
    hideicon1.classList.remove('fa-eye');

}
function swap21(){
 
    hideicon2.classList.add('fa-eye');
    hideicon2.classList.remove('fa-eye-slash');
}
function swap22(){
    hideicon2.classList.add('fa-eye-slash');
    hideicon2.classList.remove('fa-eye');

}
var curent =0;
hideicon1.onclick=function(){
   if(curent==0){
    curent=1;
    show1();
    swap11();
   }else{
    curent=0;
    hide1();
   swap12();
   }
}
var curent1 =0;
hideicon2.onclick=function(){
    if(curent1==0){
     curent1=1;
     show2();
     swap21();
    }else{
     curent1=0;
     hide2();
     swap22();
    }
 }