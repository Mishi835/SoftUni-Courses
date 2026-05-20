function distance_between_two_points(x1,y1,x2,y2){
    let diff_x=(x1-x2);
    let diff_y=(y1-y2);
    let distance=Math.sqrt((diff_x*diff_x)+(diff_y*diff_y));
    console.log(Number(distance));
    
}distance_between_two_points(2.34, 15.66, -13.55, -2.9985);