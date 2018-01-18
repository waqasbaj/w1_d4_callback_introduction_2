
function findWaldo(arr, found)

{
  arr.forEach(function(element)
  {
    if (element === "Waldo")
    {
      found.r=arr.indexOf("Waldo");

      found();   // execute callback
    }
  });

}


function actionWhenFound()
{

  console.log("Found him at number " + actionWhenFound.r );
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);




// var myFn = function() {
//   console.log("I am function.");
// }

// myFn.someAttribute = 42;
// console.log(myFn.someAttribute);

// function runner(f) {
//   f();
// }

// runner(myFn);