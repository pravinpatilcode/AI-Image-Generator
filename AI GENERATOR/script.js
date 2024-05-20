const accesskey = 'jRNGd0F5lcPp2n-8EyFwTARaXcYG56w57qrSeR40kpg';
const showMore = document.getElementById("showMore");
const serachbox = document.getElementById("search-box");
const imagebox = document.getElementById("image-box");
const serachresult = document.getElementById("search-result");
const searchform = document.getElementById("search-form");



let keyword ="";
let page =1;

async function searchImage(){
  keyword = serachbox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=16`;
  const response = await fetch(url);
  const data = await response.json();

  if(page===1){
    serachresult.innerHTML="";
  }


  const results = data.results;

  results.map((result) =>{
    const image = document.createElement("img")
    image.src = result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href=result.links.html;
    imageLink.target= "_blank";

    imageLink.appendChild(image);
    serachresult.appendChild(imageLink);
    
  })


}

searchform.addEventListener("submit", (e) =>{
  e.preventDefault();
  page = 1;
  searchImage();
})



