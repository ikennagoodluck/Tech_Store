function signup() {
   const heading = document.getElementById("head")
   const emailinput = document.getElementById("email").value
   const passwordinput = document.getElementById("password").value
   // const emailsign = "@"
      if (emailinput === "" || passwordinput === "") {
      heading.innerText = "Please enter all fields";
      return;
   }


   // Save the signup data to localStorage
   localStorage.setItem("userEmail", emailinput);
   localStorage.setItem("userPassword", passwordinput);

   // alert("Signup successful! You can now log in.");
   window.location.href = "login.html"; // Redirect to login page


}


function previous() {
   window.location.href = "main.html"
}
