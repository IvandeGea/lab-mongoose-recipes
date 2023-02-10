var number = function(busStops){
    //busStops: [[10,0],[3,5],[5,8]] -> 5
    //busStops: [[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]] -> 17

    // let passengers = 0;
    
    // for(let i = 0; i<busStops.length; i++) {
        //     passengers = passengers + busStops[i][0];
        //     passengers = passengers - busStops[i][1];
    // }

    // busStops.forEach(busStop => {
    //     // passengers += busStop[0];
    //     // passengers -= busStop[1];
    //     passengers = passengers + busStop[0] - busStop[1];
    // })

    // let passengers = busStops.reduce((acc, busStop)=>{
    //     return acc + busStop[0] - busStop[1];
    // }, 0);

    // return passengers;

    return busStops.reduce((acc, busStop)=> acc + busStop[0] - busStop[1], 0);
}