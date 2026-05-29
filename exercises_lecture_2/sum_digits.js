function sum_digits(num){
    let string_num=String(num);
    let sum=0;
    for(let i=0; i<string_num.length;i++){
        sum+=Number(string_num[i]);
    }
    console.log(sum);
}sum_digits(543);