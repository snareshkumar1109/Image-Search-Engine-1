const accesskey = "Uf-BvjXuFGWLgDbj2yqk7HR7OlZ6JZnX8SdsG1zLuyU";
const searchform = document.getElementById("search_form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchimage() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;
    const response = await fetch(url);
    const data = await response.json();

    if(page === 1){
        searchResult.innerHTML = "";
    }
    const results = data.results;
    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    showMoreBtn.style.display="block";
}
searchform.addEventListener("submit", (e) =>{
    e.preventDefault();
    page = 1;
    searchimage();
})

showMoreBtn.addEventListener("click", (e) =>{
    page++;
    searchimage();
})