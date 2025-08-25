function signup() {
   // alert("Sign up button clicked!");
   window.location.href = ("signup.html")
}

let intervalid;

// setInterval(alerttt(), 3000)


// function alertt() { if (window.location.href.includes("main2.html")) {
//   document.getElementById("alert").style.display = 'block'
// }
// }


function alerttt() {
   if (window.location.href.includes("main2.html")) {
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
   window.location.href = "main2.html"
}


document.getElementById("search").addEventListener("keydown", function (e) {

   if (e.key === "Enter") {
      search()
   }
})


      function search() {
         search = document.getElementById("search").value
         if (search == "phones") {
            window.location.href = "Phones.html"
         } else if (search == "headphones") {
            window.location.href = "headPhones.html"
         }
         else if (search == "all") {
            window.location.href = "main2.html"
         }
         else if (search == "earpods") {
            window.location.href = "earpods.html"
         } else {
            alert("Sorry User You can Only Serach for Phones Earpods and Headphones. Site is still under construction")
         }
      }
// Run when page loads
window.onload = alerttt;




