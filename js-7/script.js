

const form = document.getElementById("userform")

const output = document.getElementById("output")

const btn = document.getElementById("btn")

let users = JSON.parse(localStorage.getItem("users")) || []


let editIndex = null;

renderUsers()

form.addEventListener("submit", function (elem) {

    elem.preventDefault();

    let name = document.getElementById("name").value

    let email = document.getElementById("email").value

    if (name === "" || email === "") {

        return;
    }



    if (editIndex === null) {

        users.push({ name, email })



    }
    else {

        users[editIndex] = { name, email }

        editIndex = null;

    }






    localStorage.setItem("users", JSON.stringify(users))

    renderUsers();


    form.reset();

})

function renderUsers() {

    output.innerHTML = ""


    users.forEach((user, index) => {

        const div1 = document.createElement("div")

        div1.className = "card"

        div1.innerHTML = `
            
               <p>Name: ${user.name}</p

               <p>Email: ${user.email}</p>

              <button onclick="editUser(${index})">Update</button>
              <button onclick="userDelete(${index})">Delete</button>

               <button onclick="searchUser(${index})">Search</button>
              
            
            `
        output.appendChild(div1)


        btn.textContent = "Add User"


    });
}
function userDelete(index) {


    users.splice(index, 1)

    localStorage.setItem("users", JSON.stringify(users));

    renderUsers();

}


function editUser(index) {

    let name = document.getElementById("name").value = users[index].name
    let email = document.getElementById("email").value = users[index].email

    editIndex = index



    btn.textContent = "Upadte User"


}

function searchUser(index) {

    let foundUsers = users.filter(user => user.email === email);

   
    btn.textContent = "Search User"

}


