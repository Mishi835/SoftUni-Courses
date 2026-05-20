function reverse_string(word){
    let string_l=String(word);
    let reversed="";
    for(let i=string_l.length-1;i>=0;i--){
        reversed+=string_l[i];
        
    }
    console.log(reversed);

}
reverse_string('Softuni');