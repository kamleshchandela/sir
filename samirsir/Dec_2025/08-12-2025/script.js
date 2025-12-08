
try{
    console.log(a);
    let a = 10;
}
catch{
    console.log("error");
    alert("first diclar and then print");
}
finally{

}





// link sahi he to console me link ka data print hoga fir para var ka color red hoga 
fetch("https://www.themedb.com/api/json/v1/1/categories.php")
.then((response)=> response.json())
.then((data)=> console.log(data))
.catch((error)=>{console.log("got an error")})
.finally(()=>{
para.style.color = "red";
})




















