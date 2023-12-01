const acceskey = "CqQwp5pSchiau1cmT-e2-kXZ2d2I_PmprivCjSucnZ4"


const forme1 = document.querySelector("form")
const inpute1 = document.getElementById("Search-input")
const searchresult = document.querySelector(".search-results")
const showmore = document.getElementById("show-more-button")


let inputdata = " "
let page = 1;


async function searchImage(){
    inputdata = inpute1.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputdata}&client_id=${acceskey}`;

    const response = await fetch(url)
    const data = await response.json()


    const results = data.results
    if(page == 1){
        searchresult.innerHTML = ""
    }

    results.map((result) =>{

        const imageWrapper = document.createElement('div')
        imageWrapper.classList.add("search-result")
        const image = document.createElement('img')
        image.src = result.urls.small
        image.alt = result.alt_description
        const imageLink = document.createElement('a')
        imageLink.href = result.links.html
        imageLink.target = "_blank"
        imageLink.textContent = result.alt_description


        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searchresult.appendChild(imageWrapper);



    });
    page++
    if(page>1){
        showmore.style.display = "block"

    }
}

forme1.addEventListener("submit",(event) => {

    event.preventDefault()
    page =1
    searchImage()
})


showmore.addEventListener("click",() => {

    
    searchImage()
})

