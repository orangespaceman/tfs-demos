let itemsPerPage = 3;
let currentIndex = 0;
let data = [];

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".load-more").addEventListener("click", loadMoreItems);
    document.querySelector(".sort-asc").addEventListener("click", () => sortData("asc"));
    document.querySelector(".sort-desc").addEventListener("click", () => sortData("desc"));
    fetchData();
});

function fetchData() {
    fetch("data.json")
        .then(response => response.json())
        .then(jsonData => {
            data = jsonData;
            loadMoreItems();
        })
        .catch(error => console.error("Error fetching data:", error));
}

function loadMoreItems() {
    const container = document.querySelector(".items");
    const spinner = document.querySelector(".spinner");
    const button = document.querySelector(".load-more");

    spinner.classList.remove("hidden");
    button.disabled = true;

    setTimeout(() => {
        const nextItems = data.slice(currentIndex, currentIndex + itemsPerPage);

        nextItems.forEach(item => {
            const div = document.createElement("div");
            div.classList.add("item");
            div.textContent = item.name;
            container.appendChild(div);
        });

        currentIndex += itemsPerPage;
        if (currentIndex >= data.length) {
            button.style.display = "none";
        }

        spinner.classList.add("hidden");
        button.disabled = false;
    }, 1000);
}

function sortData(order) {
    data.sort((a, b) => {
        return order === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
    });
    currentIndex = 0;
    document.querySelector(".items").innerHTML = "";
    document.querySelector(".load-more").style.display = "block";
    loadMoreItems();
}