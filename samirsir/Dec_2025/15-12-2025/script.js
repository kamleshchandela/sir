var c1 = document.querySelector("#c1");
var c2 = document.querySelector("#c2");
var c3 = document.querySelector("#c3");
var c4 = document.querySelector("#c4");

// document.cookie = "username = kamlesh; expires =Mon ,15 Dec 2025 15:12:00 UTC ; path =/";

// document.cookie.split(' ').forEach((e)=>{
//     console.log(e)
//     var p = document.createElement("p");
//     p.textContent = e ;
//     document.body.appendChild(p)
// })





// setTimeout vala checkbox par click karne par thode thode time pe data thoda thoda data cookie me add katre is liye sir ne sikhya tha
c1.addEventListener("change", (e) => {
    if (e.target.checked) {
        setTimeout(() => {

            document.cookie = "username=kamlesh; path=/";
            console.log("1")

            setTimeout(() => {
                document.cookie = "email=kamlesh@1234; path=/";
                console.log("2")
                setTimeout(() => {
                    document.cookie = "username1=kamlesh ; expires = Mon, 15 Dec 2025 15:35:00 UTC ; path=/";
                    document.cookie = "email=kamlesh@1234 ; expires = Mon, 15 Dec 2025 15:35:00 UTC ; path=/";
                    console.log("3")

                    setTimeout(() => {


                        var p = document.createElement("p");
                        p.textContent = "okokokokokkkk";
                        document.body.appendChild(p)
                        console.log("4")

                    },
                        6000
                    )

                },
                    5000)
            }
                ,
                4000)








        }


            ,
            3000

        )
    }


})



// jab checked ho tab ye karna is liye ye task tha ( click ki jagah checked ki practice )
c2.addEventListener("change", (e) => {
    if (e.target.checked) {
        document.cookie = "email=kamlesh@1234 ; path=/";
    }

})

c3.addEventListener("change", (e) => {
    if (e.target.checked) {
        document.cookie = "username1=kamlesh ; expires = Mon, 15 Dec 2025 15:35:00 UTC ; path=/";
        document.cookie = "email=kamlesh@1234 ; expires = Mon, 15 Dec 2025 15:35:00 UTC ; path=/";
    }

})

c4.addEventListener("change", (e) => {
    if (e.target.checked) {

        var p = document.createElement("p");
        p.textContent = "okokokokokkkk";
        document.body.appendChild(p)
    }

})




// imp chij he sirfa cookie ka valu print karvana ho to split kar kar ke print karvae ge 
var arr = document.cookie.split("; ");
arr.forEach((e)=>{
    console.log(e.split("=")[1]);
    
})
console.log(document.cookie.split("; "))

