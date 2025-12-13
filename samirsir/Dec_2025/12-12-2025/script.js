


// fetch("https://jsearch.p.rapidapi.com/job-details?job_id=gcnkkB1_QjIlxbV9AAAAAA%3D%3D&country=us&rapidapi-key=33ed7bd58amsh4599a8293d9bcb2p1f4b20jsndc356e5c891b")
// .then((response) => response.json())
// .then((data)=>{
//     console.log(data);
// })




// fetch("https://open-weather13.p.rapidapi.com/fivedaysforcast?latitude=40.730610&longitude=-73.935242&lang=EN&rapidapi-key=33ed7bd58amsh4599a8293d9bcb2p1f4b20jsndc356e5c891b")
// .then((response) => response.json())
// .then((data)=>{
//     console.log(data);
// })




// fetch("https://rottentomato.p.rapidapi.com/get-spoilers-for-movie?spoiler_id=grudge-match&rapidapi-key=33ed7bd58amsh4599a8293d9bcb2p1f4b20jsndc356e5c891b")
// .then((response) => response.json())
// .then((data)=>{
//     console.log(data);
// })



// // yahoo ka long data he
// fetch("https://yahoo-finance166.p.rapidapi.com/api/news/list-by-symbol?s=AAPL%2CGOOGL%2CTSLA&region=US&snippetCount=500&rapidapi-key=33ed7bd58amsh4599a8293d9bcb2p1f4b20jsndc356e5c891b")
// .then((response) => response.json())
// .then((data)=>{
//     console.log(data);
// })



// // long data api
// fetch("https://instagram-looter2.p.rapidapi.com/search?query=javan&select=users&rapidapi-key=33ed7bd58amsh4599a8293d9bcb2p1f4b20jsndc356e5c891b")
// .then((response) => response.json())
// .then((data)=>{
//     console.log(data);
// })

var input = document.querySelector(".search");
var all = document.querySelector(".all");
var btn = document.querySelector(".btn");
var loader = document.querySelector(".loader");

// long data api
fetch("https://imdb232.p.rapidapi.com/api/news/get-by-category?limit=25&category=CELEBRITY&rapidapi-key=fb7acee410msh612566e76a2b02fp1aa042jsn9cb3c0a02cb4")
.then((response) => response.json())
.then((data1)=>{



    loader.classList.add("hidden");




    for ( let i = 0 ; i < 25 ; i++ ){

        console.log(data1.data.news.edges[0].node.text.plainText);

    var name = document.createElement("h1");
    name.textContent = data1.data.news.edges[i].node.byline;
    name.setAttribute("class" , "name")
    all.appendChild(name)

    var img = document.createElement("img");
    img.setAttribute("src" , data1.data.news.edges[i].node.image.url)
    img.setAttribute("class" , "img")

    all.appendChild(img)


    var para = document.createElement("p");
    para.textContent = data1.data.news.edges[i].node.text.plainText;
    para.setAttribute("class" , "para")
    all.appendChild(para)

   
    var a = document.createElement("a");
    a.textContent = "link";
    a.setAttribute("href" , data1.data.news.edges[i].node.source.homepage.url)
    all.appendChild(a)
    a.setAttribute("class" , "anker")


    
    }








    
    btn.addEventListener("click",()=>{


        for ( let i = 0 ; i < 25 ; i++ ){


            

            
            

            if(input.value == data1.data.news.edges[i].node.byline && input.value != ""){

                        all.innerHTML = "" ; 
                        input.value = "";

                

        console.log(data1.data.news.edges[0].node.text.plainText);


        


    var name = document.createElement("h1");
    name.textContent = data1.data.news.edges[i].node.byline;
    name.setAttribute("class" , "name")
    all.appendChild(name)

    var img = document.createElement("img");
    img.setAttribute("src" , data1.data.news.edges[0].node.image.url)
    img.setAttribute("class" , "img")

    all.appendChild(img)


    var para = document.createElement("p");
    para.textContent = data1.data.news.edges[i].node.text.plainText;
    para.setAttribute("class" , "para")
    all.appendChild(para)

   
    var a = document.createElement("a");
    a.textContent = "link";
    a.setAttribute("href" , data1.data.news.edges[0].node.source.homepage.url)
    all.appendChild(a)
    a.setAttribute("class" , "anker")


    











            }
           


}











    })
    



})



// https://rapidapi.com/
// is link se alag alag api free me milegi par free vali ko dhund na pade ga 














