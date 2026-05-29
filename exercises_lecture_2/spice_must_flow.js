function spice_must_flow(yield){
    let spice_amount=0;
    let days=0;
    while(yield>=100){
        spice_amount+=yield;
        yield-=10;
        days++;
        spice_amount-=26;
    

    }
    if(spice_amount>=26){
        spice_amount-=26;
    }
    
    console.log(days);
    console.log(spice_amount);
}
spice_must_flow(450);