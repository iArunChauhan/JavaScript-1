

let fruits = ["Apple", "Orange", "Banana", "Lichi", "Blackberry"]

let lists = document.getElementById("list")

let search = document.getElementById("search-box")





search.addEventListener("keyup", (event) => {

    const query = event.target.value.toLowerCase();

    const filtered = (fruits.filter(fruits => fruits.toLowerCase().includes(query)))



    showList(filtered)


})

function showList(data) {

    lists.innerHTML = "";

    data.forEach(elem => {

        li = document.createElement("li")

        li.textContent = elem


        lists.appendChild(li)
    });

}


