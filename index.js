// // Code your solution in this file!

// //let passenger = parseInt(43, 10);
// //let hq = parseInt(42, 10);

// var a = 43;
// var b = 42;
// var distance = 0;
// var feet = 264;

// function distanceFromHqInFeet(feet){
//     //var final = 0;
//     var feet = 264;

//     function distanceFromHqInBlocks(a, b){
//         distance = a-b;
//         console.log(parseInt(distance,0));
//         return parseInt(distance,0);
     
//     }
    
//     distanceFromHqInBlocks(a,b);

//     var final = feet * distanceFromHqInBlocks(a,b);
//     console.log(typeof final);
//     console.log(final);
//     return final;
// }

// distanceFromHqInFeet(feet); 



function distanceFromHqInBlocks(value){
    //return value;
    if (value > 42) {
        return value - 42;
    } else {
        return 42 - value;
    }

}

//distanceFromHqInBlocks(1)


function distanceFromHqInFeet(value){

    return distanceFromHqInBlocks(value) * 264;
}

function distanceTravelledInFeet(start, destination){
    if (start < destination){
        return (destination - start) * 264
    } else {
        return (start - destination) * 264
    }

}

function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination)
    // when distance <= 400
    if (distance <= 400){
        return 0;
    } else if (distance > 400 && distance <= 2000){
        //charges 2 cents per foot when total feet travelled is between 400 and 2000 (
            //remember the first 400 feet are free
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance < 2500){
        return 25;
    } else {
        return 'cannot travel that far';
    }
}