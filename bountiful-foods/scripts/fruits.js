const url = 'https://brotherblazzard.github.io/canvas-content/fruit.json';


async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const fruits = await response.json();
        // console.log(fruits); // this is for testing the call
        fruits.forEach(addFruits);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
 apiFetch();
// ADD FRUITS FROM JSON TO FORM
 function addFruits(fruit){
    // console.log(fruit)
    let option = document.createElement('option');
    let option_one = document.createElement('option');
    let option_two = document.createElement('option');
    let name = fruit.name;
    option.setAttribute('value', name);
    option.textContent = name;
    option_one.setAttribute('value', name);
    option_one.textContent = name;
    option_two.setAttribute('value', name);
    option_two.textContent = name;
    let select_one = document.getElementById('ingredient_one');
    // console.log(select_one)
    let select_two = document.getElementById('ingredient_two');
    // console.log(select_two)
    let select_three = document.getElementById('ingredient_three');
    select_one.appendChild(option_one);
    select_two.appendChild(option);
    select_three.appendChild(option_two);
  }

//   let selects = document.getElementById('ingredient_three');
//   selects.style.display='none'
