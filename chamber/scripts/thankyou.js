function getInfo(){
    let fname = document.getElementById("fname").value;
   localStorage.setItem("fname", fname);
    let lname = document.getElementById("lname").value;
    localStorage.setItem("lname", lname);
    let title = document.getElementById("title").value;
   localStorage.setItem("title", title);
   let email = document.getElementById("email").value;
   localStorage.setItem("email", email);
   let phone = document.getElementById("phone").value;
   localStorage.setItem("phone", phone);
   let bname = document.getElementById("bname").value;
   localStorage.setItem("bname", bname);
   let membership = document.getElementsByClassName("membership").value;
   localStorage.setItem("membership", membership);
   let description = document.getElementById("description1").innerHTML;
   localStorage.setItem("description", description);
   }
   
   document.getElementById("joinFname").innerHTML = (window.localStorage.getItem("fname"));
   document.getElementById("joinLname").innerHTML = (window.localStorage.getItem("lname"));
   document.getElementById("joinTitle").innerHTML = (window.localStorage.getItem("title"));
   document.getElementById("joinEmail").innerHTML = (window.localStorage.getItem("email"));
   document.getElementById("joinPhone").innerHTML = (window.localStorage.getItem("phone"));
   document.getElementById("joinBname").innerHTML = (window.localStorage.getItem("bname"));
   document.getElementById("joinMlevel").innerHTML = (window.localStorage.getItem("membership"));
   document.getElementById("joinDescription").innerHTML = (window.localStorage.getItem("description"));
   
   document.getElementById("joinTime").innerHTML = new Date().toDateString() + ", " + new Date().getHours() + ":" + 
   new Date().getMinutes();