let routine=[
function wakeDog(dogName, dogBreed) {
  console.log(`Wake ${dogName} the ${dogBreed}`);
  return`Wake ${dogName} the ${dogBreed}`
},
function leashDog(dogName, dogBreed) {
  console.log(`leash ${dogName} the ${dogBreed}`);
  return`leash ${dogName} the ${dogBreed}`
},
function walkToPark(dogName, dogBreed) {
  console.log(`walk to the park with ${dogName} the ${dogBreed}`);
  return `walk to the park with ${dogName} the ${dogBreed}`
},
function throwFrisbee(dogName, dogBreed) {
  console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
    return`Throw the frisbee for ${dogName} the ${dogBreed}`
},
function walkHome(dogName, dogBreed) {
   console.log(`walk home with ${dogName} the ${dogBreed}`);
  return  `walk home with ${dogName} the ${dogBreed}`
},
function UnleashDog(dogName, dogBreed) {
  console.log(`Unleash ${dogName} the ${dogBreed}`);
    return`Unleash ${dogName} the ${dogBreed}`
},
]
function exerciseDog(dogName,dogBreed){
  let array=[]
  for (let i=0; i<routine.length; i++) {

  let result=routine[i](dogName,dogBreed);
  array.push(result)
  }
  return array
}
