const url = "https://api.thecatapi.com/v1/images/0XYvRd7oD"

/*
const getdata= async ()=> {
    let response = await fetch(url);
    console.log(response);
    console.log(response.status);
   let data = await response.json() // .json is also asynchronous and returns a promise.
console.log(data);

};  */
const button1= document.getElementById("btn");
const paragraph = document.querySelector("#para");
 

function getdata (){
    fetch(url)
    .then((response)=> {return response.json();})
    .then((data)=> {paragraph.innerText = JSON.stringify(data, null, 2);
//paragraph.innerHTML =data.description;
    });
}
button1.addEventListener("click", getdata);