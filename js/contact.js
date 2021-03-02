function sendEmail() {
var name = document.getElementById("user_name").value
var email = document.getElementById("user_email").value
var msg = document.getElementById("user_msg").value
var service = document.getElementById("service").value
var budget = document.getElementById("budget").value

if (!(name === "") && !(email === "") && !(msg === "")&& !(service === "")&& !(budget === "")) {
    Email.send({
        SecureToken: "dcd9ed28-225d-4e18-96ca-8a114eaf88f1",
        To: 'sushant.bansal@somaiya.edu',
        From: "dbugtechnicals@gmail.com",
        Subject: "User contact information",
        Body: `Name : ${name} <br/> Email: ${email} <br/>  Message :${msg}<br/>  Services needed :${service}<br/>  Budget :${budget}`,
    }).then(
        alert("Mail has been sent successfully")
    );
}
} 
