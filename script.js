const img=document.querySelector("img");
const btn=document.querySelector("button");
const input=document.querySelector("input");
const p=document.querySelector("p");

let keyword="cats";

function getImg(keyword){
    fetch("https://api.giphy.com/v1/gifs/translate?api_key=ytpfw643S4754fwpWwpwN8RONluD5T8x&s="+keyword,{mode:"cors"})
    .then(function(response){
        return response.json();
    })
    .then(function(response){
        img.src=response.data.images.original.url;
    })
    .catch(function(e){
        p.textContent=e;
    });
}

btn.addEventListener("click",()=>{
    p.textContent="";
    if(input.value) keyword=input.value;
    getImg(keyword);
})

// init
getImg(keyword);