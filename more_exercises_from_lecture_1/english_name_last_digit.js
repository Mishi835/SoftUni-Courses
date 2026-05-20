function last_name_digit(num){
let string_num=num.toString();
let last_digit="";
for(let i=0; i<string_num.length;i++){
    last_digit=string_num[i];
    
}
if(last_digit=='1'){
      console.log("one");  
    }
else if(last_digit=='2'){
    console.log("two");
}
else if(last_digit=="3"){
    console.log("three")
}
else if(last_digit=="0"){
    console.log("zero");
}
else if(last_digit=="4"){
    console.log("four");
}
else if(last_digit=="5"){
    console.log("five");
}
else if(last_digit=="6"){
    console.log("six");
}
else if(last_digit=="7"){
    console.log("seven");
}
else if(last_digit=="8"){
    console.log("eight");
}
else if(last_digit=="9"){
    console.log("nine");
}


}last_name_digit(512)