const img=document.querySelector("img");
const btn=document.querySelector("button");
const input=document.querySelector("input");
const p=document.querySelector("p");

let keyword="cats";

async function getImg(keyword){
    try{
        const response = await fetch("https://api.giphy.com/v1/gifs/translate?api_key=ytpfw643S4754fwpWwpwN8RONluD5T8x&s="+keyword,{mode:"cors"});
        const data = await response.json();
        img.src=data.data.images.original.url;
    }
    catch(e){
        p.textContent=e;
    }
}

btn.addEventListener("click",()=>{
    p.textContent="";
    if(input.value) keyword=input.value;
    getImg(keyword);
})

// init
getImg(keyword);