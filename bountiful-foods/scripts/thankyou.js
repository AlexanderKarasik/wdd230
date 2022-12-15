let numDrinks=0

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


   
   
