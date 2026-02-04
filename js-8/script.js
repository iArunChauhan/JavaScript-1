const form = document.getElementById("loginForm");

const loginBtn = document.getElementById("loginBtn");

const loader = document.getElementById("loader");

const messageDiv = document.getElementById("message");


form.addEventListener("submit", async (e) => {

    e.preventDefault()

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    document.querySelectorAll(".error").forEach(elem => elem.textContent = "")

    messageDiv.textContent = ""


    let valid = true;

    if (!email.includes("@")) {
        document.getElementById("emailError").textContent = "Invalid email ";
        valid = false;
    }

    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!regex.test(password)) {
        document.getElementById("passwordError").textContent = "Please , Use the Strong Password";
        
        valid = false;
    }
    if (!valid) return;




    loginBtn.disabled = true;

    loader.style.display = "block";

    try {

        const res = await fetch("https://jsonplaceholder.typicode.com/posts", {

            method: "POST",

            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })


        })

        if (res.ok) {

            const data = await res.json();
          
            alert("Login Successfull!")

            form.reset();
             loginBtn.disabled = false;

            console.log("Response:", data);

        }
        else {

            messageDiv.textContent = "Invalid Request request. Check your input.";
            messageDiv.className = "error";

        }

    } catch (error) {

        messageDiv.textContent = "Network error. Please try again.";

        messageDiv.className = "error";


    }


})



