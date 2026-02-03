

const form = document.getElementById("userform")

const output = document.getElementById("output")

const btn = document.getElementById("btn")

let users = JSON.parse(localStorage.getItem("users")) || []


let editIndex = null;

renderUsers()

form.addEventListener("submit", function(elem){

     elem.preventDefault();

    let name = document.getElementById("name").value

    let email = document.getElementById("email").value

    if(name==="" || email===""){
            
         return;
    }

    if(editIndex===null){

        users.push({name,email})
    
    }
    else{

        users[editIndex] = {name,email}

        editIndex = null;

        btn.textContent = "Add User"
    }



    localStorage.setItem("users", JSON.stringify(users))

    renderUsers();

    form.reset();

})

function renderUsers(){

    
}


