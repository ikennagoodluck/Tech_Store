function login() {
   const loginEmail = document.getElementById("loginEmail").value;
   const loginPassword = document.getElementById("loginPassword").value;

   const savedEmail = localStorage.getItem("userEmail");
   const savedPassword = localStorage.getItem("userPassword");
   const adminemail = "goodluckikennac@gmail.com"
   const adminpassword = "afrihub2016"

   if (loginEmail === savedEmail && loginPassword === savedPassword) {
      alert("Login successful!");
      // Redirect to dashboard or home
      window.location.href = "main.html";
   } else  if (loginEmail === adminemail && loginPassword === adminpassword) {
      alert("Welcome sir")
      window.location.href = "index.html" 
   }
   
   else {
      alert("Invalid email or password.");
   }

}
