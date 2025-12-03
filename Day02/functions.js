
// Adding 2 variables by declaring directly
function test() {
    var a = 1
    var b = 2
    var c = a+b
    console.log(c);
   
}
test()

// Adding 2 variables by passing the parameters
function test1(a,b){
        var c = a+b
        console.log(c);
        
}
  test1(10,20)

  // Adding 2 variables and storing the function value in return 
  function test2(a,b){
    var c=a+b
    return c
  }
  console.log(test2(10,10));
  