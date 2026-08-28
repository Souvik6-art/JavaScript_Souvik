const url = "https://api.thecatapi.com/v1/images/0XYvRd7oD"


const getdata= async ()=> {
    let response = await fetch(url);
    console.log(response.status);
    
};