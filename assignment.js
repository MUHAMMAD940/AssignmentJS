// https://github.com/MUHAMMAD940/AssignmentJS


// killometer to meter convert program

function killometerToMeter(killometer) {
    if (killometer < 0) {
        return "Error: Distance cannot be negative";
    } else {
        var meter = killometer * 1000;
        return meter;
    }
}


//Budget calculator program in javaScript

function budgetCalculator(watch, mobile, laptop){

    if( watch < 0 || mobile < 0 || laptop < 0){
        return "Erorr: Your input is empty";
    }
    else{
        var watchCost = watch * 50;
        var mobileCost = mobile * 100;
        var laptopCost = laptop * 500;
    
        totalCost = watchCost + mobileCost + laptopCost;
        return totalCost;
    }
 }



// Hotel cost program in javaScript

function hotelCost(day) {
    var cost = 0;
    if (day <= 0) {
        return "Erorr: Your input is invalid";
    } else if (day <= 10) {
        cost = day * 100;
    } else if (day <= 20) {
        var firstCost = 10 * 100;
        var remaining = day - 10;
        var secondCost = remaining * 80;
        cost = firstCost + secondCost;
    } else {
        var firstCost = 10 * 100;
        var secondCost = 10 * 80;
        var remaining = day - 20;
        var thirdCost = remaining * 50;
        cost = firstCost + secondCost + thirdCost;
    }
    return cost;
}



//Mega friend program in javaScript

function megaFriend(friendList) {

    var lngth = 0;
    var longest = "";

    for (var i = 0; i < friendList.length; i++) {
        if(lngth < friendList[i].length) {
            var lngth = friendList[i].length;
            longest = friendList[i];
        } 
       else if( longest == ""){
            return "Erorr: your array is empty";
        }
    }
    return longest;
}
