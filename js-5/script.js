

function getUsers() {

    fetch("https://jsonplaceholder.typicode.com/users")

        .then(response => response.json())
        .then(data => {


            const container = document.getElementById("userContainer")

            container.innerHTML = "";

            data.forEach(element => {

                container.innerHTML +=

                    `<div class="card">

                        <h3>${element.name}</h3>

                        <p><strong>Email:</strong> ${element.email}</p>
                        <p><strong>Phone:</strong> ${element.phone}</p>
                        <p><strong>City:</strong> ${element.address.city}</p>

                    </div>`





            });

        })  

}   

    //     data.forEach(element => {

    //         document.body.innerHTML += `<P>${element.name}</P>`

    //     });

    //     console.log(data);
    // })


