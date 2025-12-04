
//Palindrome
function isPal(input){

    let text = String(input)

    let chars = text.split("")

    let revChars = chars.reverse()

    let finalString = revChars.join("")
    console.log("Reversed string is:",finalString);
    if (finalString===text) {
        console.log('The final string is Palindrome',finalString);
        
    }else{

        console.log('The final string is not Palindrome',finalString);
        
    }
    
}
isPal('Madam')


//Looping Odd numbers

function printOddNumbers(){
    
    for (let i = 0; i <= 25; i++) 
        {
                if (i%2 != 0) {

            console.log("This is an Odd number:",i);
            
        }           
    }
}
printOddNumbers();

//Arrays

let string = "Arun is a good boy"
let string1 = string.split(" ")
console.log(string1);
let string2 = string1[string1.length-1]
let length = string1[string1.length-1].length
console.log(string2);
console.log(length); 





 