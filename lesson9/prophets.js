// -----Store the resource, the URL of the JSON file into a const variable--------

const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // ----Store the results of the converted response into an array-----
  const prophets = jsonObject['prophets'];
    // console.table(jsonObject);  // temporary checking for valid response and data parsing
    prophets.forEach(displayProphets);
});

//   Build the HTML of the prophet card using the createElement() and appendChild() methods on the document
  function displayProphets(prophet) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let div = document.createElement("div");
    let portrait = document.createElement('img');
    let birthplace = document.createElement('p');
    let birthdate = document.createElement('p');
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    // TEXT FOR DATE AND PLACE OF BIRTH
    birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;
    birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;
    let order = String(prophet.order);
    if (order==="1"){
        order = "first"
    }else if(order==="2"){
        order= "second"
    }else if(order==="3"){
        order="third"
    }else{
        order=`${order}-th`
    }
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - ${order} Latter-day President`);
    portrait.setAttribute('loading', 'lazy');
    div.setAttribute('class', 'image')
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    div.appendChild(portrait)
    card.appendChild(div);
    card.appendChild(birthdate);
    card.appendChild(birthplace);

  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }
