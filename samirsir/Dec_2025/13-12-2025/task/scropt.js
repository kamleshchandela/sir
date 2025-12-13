
// dono link practice ke liye he
// https://aliexpress-datahub.p.rapidapi.com/item_detail_2?itemId=1005005244562338&rapidapi-key=33ed7bd58amsh4599a8293d9bcb2p1f4b20jsndc356e5c891b
// https://taobao-datahub.p.rapidapi.com/item_search?q=%E9%9E%8B%E5%AD%90&page=1&loc=%E4%B8%8A%E6%B5%B7&startPrice=20&endPrice=49&switches=tmall&pageSize=20&rapidapi-key=33ed7bd58amsh4599a8293d9bcb2p1f4b20jsndc356e5c891b












var all = document.querySelector(".all");

fetch("https://real-time-amazon-data.p.rapidapi.com/top-product-reviews?asin=B07ZPKN6YR&country=US&rapidapi-key=33ed7bd58amsh4599a8293d9bcb2p1f4b20jsndc356e5c891b")
.then((response)=>response.json())
.then((data1)=>{
    console.log(data1);


    data1.data.reviews.forEach(element => {
        // if (element.review_star_rating == "5") {
        if (element.review_date.includes("October")) {
        console.log(element.review_id);
        console.log(element.review_title);
        console.log(element.review_comment);
        console.log(element.review_star_rating);


        var title = document.createElement("h3");
        title.textContent = element.review_title
        title.classList.add("h1");
        all.appendChild(title)
        
        var img = document.createElement("img");
        img.setAttribute("src" , element.review_author_avatar)
        img.classList.add("img");
        all.appendChild(img)


        var div = document.createElement("div");
        div.classList.add("div")
        all.appendChild(div);


        
        var id = document.createElement("p");
        id.textContent = element.review_id
        id.classList.add("id");

        div.appendChild(id)
        
        var comment = document.createElement("p");
        comment.textContent = element.review_comment
        comment.classList.add("comment");
        div.appendChild(comment)
        
        var ret = document.createElement("p");
        ret.textContent = element.review_star_rating
        ret.classList.add("ret");
        div.appendChild(ret)
        










    }
    }
    )









})


























