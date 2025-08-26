   function signup() {
      window.location.href = "signup.html"
   }


let intervalid;

// setInterval(alerttt(), 3000)


// function alertt() { if (window.location.href.includes("main2.html")) {
//   document.getElementById("alert").style.display = 'block'
// }
// }


function alerttt() {
   if (window.location.href.includes("index.html")) {
      let alertBox = document.getElementById("alert");

      if (alertBox) {
         alertBox.style.display = 'block'; // show it when page loads

         // hide after 5 seconds (5000ms)
         setTimeout(() => {
            alertBox.style.display = 'none';
         }, 5000);
      }
   }
}

function seemore() {
   window.location.href = "index.html"
}


document.getElementById("search").addEventListener("keydown", function (e) {

   if (e.key === "Enter") {
      search()
   }


})


function search() {
   search = document.getElementById("search").value
   if (search == "phones" || search == "phone" || search == "Phone" || search == "Phones" || search == "PHONES" || search == "mobile" || search == "Mobile" || search == "MOBILE") {
      window.location.href = "Phones.html"
   } else if (search == "headphones" || search == "headphone" || search == "Headphones" || search == "Headphone" || search == "HEADPHONES" || search == "HEADPHONE" ) {
      window.location.href = "headPhones.html"
   }
   else if (search == "all" || search == "All"|| search == "ALL" || search == "home" || search == "Home" || search == "HOME" || search == "main" || search == "Main" || search == "MAIN") {
      window.location.href = "index.html"
   }
   else if (search == "earpods" || search == "Earpods" || search == "EARPODS" || search == "earpod" || search == "Earpod" || search == "EARPOD"|| search == "ear pods" || search == "Ear pods" || search == "Ear Pods" || search == "EAR PODS" || search == "ear Pod" || search == "Ear Pod" || search == "EAR POD") {
      window.location.href = "earpods.html"
   }
   else {
      alert("Sorry User You can Only Serach for Phones Earpods and Headphones")
   }
}
// Run when page loads
window.onload = alerttt;




