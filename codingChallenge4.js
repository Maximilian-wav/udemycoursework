//CODING CHALLENGE 4
/*

Let's remember the first coding challenge where Max and Tony compared their BMIs.Let's now implement the same functionality with objects and methods.
1.) For each of them, create an object with properties for their full name, mass and height.
2.)Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3.) In the end, log to the console who has the highest BMI, together with the full name and respective BMI. Don't foret they might have the same BMI

Remember: BMI = mass / height^2 =  mass / (height * height). (mass in kg and height in meter)

*/

var max = {
  firstName: "Maximilian",
  lastName: "Albekier",
  height: 1.85,
  mass: 79,
  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

var tony = {
  firstName: "Tony",
  lastName: "Bognanno",
  height: 1.79,
  mass: 78,
  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

max.calcBMI();
tony.calcBMI();
console.log(max, tony);

if (max.bmi > tony.bmi) {
  console.log(max.firstName + max.lastName + " has a higher BMI of " + max.bmi);
} else if (tony.bmi > max.bmi) {
  console.log(
    tony.firstName + tony.lastName + " has a higher BMI of " + tony.bmi
  );
} else {
  console.log(max.firstName + tony.firstName + " have the same BMI");
}
