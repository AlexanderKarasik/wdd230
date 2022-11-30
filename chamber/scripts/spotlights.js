// -----Store the resource, the URL of the JSON file into a const variable--------

const requestURL = "scripts/JSON/data.json";
// const companies = document.querySelector('.companies');
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // ----Store the results of the converted response into an array-----
  const companies = jsonObject['companies'];
console.log(companies)
    displaySpotlights(companies);
});

function displaySpotlights(array){
    // program to get a random item from an array
    function getRandomItem(arr) {
        // get random index value
        const randomIndex = Math.floor(Math.random() * arr.length);
        // get random item
        const item = arr[randomIndex];
        return item;}

        // SET VALUES TO FIRST SPOTLIGHT
    let result = getRandomItem(array);
        // CHECK IF THE RESULT IS SILVER OR GOLD MEMBER
    while (result.level !== 'Silver' && result.level !== 'Gold'){
        result = getRandomItem(array);
    }
        // SET VALUES
        document.querySelector('#spotlight1 .spotName').innerHTML = result.name;
        document.querySelector('#spotlight1 .spotIcon').setAttribute('src',result.icon);
        document.querySelector('#spotlight1 .spotPhone').innerHTML = result.phone;
        document.querySelector('#spotlight1 .spotWebsite').innerHTML = result.website;
        document.querySelector('#spotlight1 .spotAddress').innerHTML = result.address;

        // SET VALUES TO SECOND SPOTLIGHT
    let result1 = getRandomItem(array);
    // CHECK IF THE RESULT IS SILVER OR GOLD MEMBER AND SPOTLIGHTS ARE NOT THE SAME
    while ((result1.level !== 'Silver' && result1.level !== 'Gold')||(result1 === result)){
        result1 = getRandomItem(array);
    } 
        // SET VALUES
    document.querySelector('#spotlight2 .spotName').innerHTML = result1.name;
    document.querySelector('#spotlight2 .spotIcon').setAttribute('src',result1.icon);
    document.querySelector('#spotlight2 .spotPhone').innerHTML = result1.phone;
    document.querySelector('#spotlight2 .spotWebsite').innerHTML = result1.website;
    document.querySelector('#spotlight2 .spotAddress').innerHTML = result1.address;

    // SET VALUES TO THIRD SPOTLIGHT
    let result2 = getRandomItem(array);
        // CHECK IF THE RESULT IS SILVER OR GOLD MEMBER AND SPOTLIGHTS ARE NOT THE SAME
    while ((result2.level !== 'Silver' && result2.level !== 'Gold') || (result2 === result || result2 === result1)){
        result2 = getRandomItem(array);
    }
    // SET VALUES
    document.querySelector('#spotlight3 .spotName').innerHTML = result2.name;
    document.querySelector('#spotlight3 .spotIcon').setAttribute('src',result2.icon);
    document.querySelector('#spotlight3 .spotPhone').innerHTML = result2.phone;
    document.querySelector('#spotlight3 .spotWebsite').innerHTML = result2.website;
    document.querySelector('#spotlight3 .spotAddress').innerHTML = result2.address;
}









