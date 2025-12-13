
var check = document.querySelector(".check");

check.addEventListener("change" , ()=>{
    if( check.checked ){
        fetch("https://real-time-amazon-data.p.rapidapi.com/top-product-reviews?asin=B07ZPKN6YR&country=US&rapidapi-key=33ed7bd58amsh4599a8293d9bcb2p1f4b20jsndc356e5c891b")
        .then((response)=>response.json())
        .then((data1)=>{
            console.log(data1);
        })



















    }
} )













