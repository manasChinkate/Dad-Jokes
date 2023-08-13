const btn =document.getElementById("btn");
const apikey = "taRFAcmK3E7aOtwfeRTcrQ==K7AKgu6cnyV6pVe0";
const jokeEl = document.getElementById("joke")


const option={
    method:"GET",
    headers:{
        "X-Api-Key": apikey,
    },    
};


const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
async function myjoke(){
        jokeEl.innerHTML="Wait joke is loading....";
        btn.disabled=true;
        btn.innerHTML="Loading..";
    const response = await fetch(apiURL, option);
    const data = await response.json();

    jokeEl.innerHTML=data[0].joke;
    btn.disabled=false;
        btn.innerHTML="Generate Joke";

    
}
btn.addEventListener("click", myjoke);