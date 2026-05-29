function gladiator_expenses(lost_fights_count,helmet_price,sword_price,shield_price,armor_price){
    let expenses=0;
    let shield_counts=0;
    for(let i=1; i<=lost_fights_count;i++){
        if(i%2==0){
            expenses+=helmet_price;
        }
        if(i%3===0){
            expenses+=sword_price;
        }
        if(i%6==0){
            expenses+=shield_price;
            shield_counts++;
             if(shield_counts%2===0 ){
            expenses+=armor_price;
        }
        }
       

    }
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}gladiator_expenses(23,
12.50,
21.50,
40,
200

);