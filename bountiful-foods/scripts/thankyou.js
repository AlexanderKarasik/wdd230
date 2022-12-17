let numDrinks=0;

function getInfo(){
    let fname = document.getElementById("fname").value;
    if(fname===""){
        fname="N/A"
    }
   localStorage.setItem("fname", fname);
    
   let email = document.getElementById("email").value;
   localStorage.setItem("email", email);
   let phone = document.getElementById("phone").value;
   if(phone===""){
    phone="N/A"
   }
   localStorage.setItem("phone", phone);
   
   let description = document.getElementById("description1").value;
   if(description===""){
    description="N/A"
   }
   localStorage.setItem("description", description);

   let fruit_one = document.getElementById("ingredient_one").value;
   localStorage.setItem("fruit1", fruit_one);
   let fruit_two = document.getElementById("ingredient_two").value;
   localStorage.setItem("fruit2", fruit_two);
   let fruit_three = document.getElementById("ingredient_three").value;
   localStorage.setItem("fruit3", fruit_three);

   if (fruit_one != "" && fruit_two != "" && fruit_three != "" && fname != "N/A" && 
   email != "N/A" && phone != "N/A"){ 
   numDrinks = numDrinks+1;
//    console.log(numDrinks)
   localStorage.setItem("numDrinks", numDrinks);

    document.querySelector("#userInfo").style.display = 'block';
   }

   document.getElementById("joinFname").innerHTML = (window.localStorage.getItem("fname"));
   document.getElementById("joinEmail").innerHTML = (window.localStorage.getItem("email"));
   document.getElementById("joinPhone").innerHTML = (window.localStorage.getItem("phone"));
   document.getElementById("fruit1").innerHTML = (window.localStorage.getItem("fruit1"));
   document.getElementById("fruit2").innerHTML = (window.localStorage.getItem("fruit2"));
   document.getElementById("fruit3").innerHTML = (window.localStorage.getItem("fruit3"));

   document.getElementById("joinDescription").innerHTML = (window.localStorage.getItem("description"));
   document.getElementById("joinTime").innerHTML = new Date().toDateString() + ", " + new Date().getHours() + ":" + 
   new Date().getMinutes();

//   CALORIES, FAT, SUGAR....

const url = 'https://brotherblazzard.github.io/canvas-content/fruit.json';


async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const fruits = await response.json();
        // console.log(fruits); // this is for testing the call
        fruits.forEach(checkMatch);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
 apiFetch();

 let fruit_one_carbo;
 let fruit_one_protein;
 let fruit_one_fat;
 let fruit_one_calories;
 let fruit_one_sugar;
 let fruit_two_carbo;
 let fruit_two_protein;
 let fruit_two_fat;
 let fruit_two_calories;
 let fruit_two_sugar;
 let fruit_three_carbo;
 let fruit_three_protein;
 let fruit_three_fat;
 let fruit_three_calories;
 let fruit_three_sugar;
 let total_carbo = 0;
 let total_protein = 0;
 let total_fat = 0;
 let total_calories = 0;
 let total_sugar = 0;

 function checkMatch(fruit){
    if (fruit.name == fruit_one){
        fruit_one_carbo = fruit.nutritions.carbohydrates;
        total_carbo= total_carbo+fruit_one_carbo
        fruit_one_protein = fruit.nutritions.protein;
        total_protein= total_protein+fruit_one_protein;
        fruit_one_fat = fruit.nutritions.fat;
        total_fat= total_fat+fruit_one_fat;
        fruit_one_calories = fruit.nutritions.calories;
        total_calories= total_calories+fruit_one_calories;
        fruit_one_sugar = fruit.nutritions.sugar;
        total_sugar= total_sugar+fruit_one_sugar;
    } 

    if (fruit.name == fruit_two){
        fruit_two_carbo = fruit.nutritions.carbohydrates;
        total_carbo= total_carbo+fruit_two_carbo;
        fruit_two_protein = fruit.nutritions.protein;
        total_protein= total_protein+fruit_two_protein;
        fruit_two_fat = fruit.nutritions.fat;
        total_fat= total_fat+fruit_two_fat;
        fruit_two_calories = fruit.nutritions.calories;
        total_calories= total_calories+fruit_two_calories;
        fruit_two_sugar = fruit.nutritions.sugar;
        total_sugar= total_sugar+fruit_two_sugar;
    }
    
    if (fruit.name == fruit_three){
        fruit_three_carbo = fruit.nutritions.carbohydrates;
        total_carbo= total_carbo+fruit_three_carbo;
        fruit_three_protein = fruit.nutritions.protein;
        total_protein= total_protein+fruit_three_protein;
        fruit_three_fat = fruit.nutritions.fat;
        total_fat= total_fat+fruit_three_fat;
        fruit_three_calories = fruit.nutritions.calories;
        total_calories= total_calories+fruit_three_calories;
        fruit_three_sugar = fruit.nutritions.sugar;
        total_sugar= total_sugar+fruit_three_sugar;
    }

    document.querySelector('#carbo').innerHTML = total_carbo.toFixed(2);
    document.querySelector('#protein').innerHTML = total_protein.toFixed(2);
    document.querySelector('#fat').innerHTML = total_fat.toFixed(2);
    document.querySelector('#calories').innerHTML = total_calories.toFixed(2);
    document.querySelector('#sugar').innerHTML = total_sugar.toFixed(2);
 }
//  console.log(total_carbo)

   }
   

function dismiss(){
    document.querySelector("#userInfo").style.display = 'none';
}
   
   
