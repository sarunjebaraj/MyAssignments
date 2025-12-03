/* 
var genderType = "male"

function printGender()
{
    
    let color = "brown"

    if (genderType.startsWith ("female")){

        var age = 30
        let color = "pink"
        console.log(color);        
    }
    else
        {
        var age = 35
        console.log(color)
    }
    console.log(age); 
}
printGender()
console.log(genderType);  */

var houseType = "test"
var rooms = 6
var walls = "Blue"

function getHouse()
{

    var rooms = 5

    if (houseType.startsWith ("Duplex")) {
   
    console.log("Walls inside if block",walls);    
}
else {    
    // var walls = "Red" 
    // var rooms = 7
    console.log("Walls inside if block",walls);     
}
// console.log("Rooms outside the if block is",rooms);
}
getHouse()
console.log("Rooms outside the if block is",rooms);
console.log("houseType ouside function block is",houseType);



