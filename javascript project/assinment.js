var jay11 = document.getElementById("pass")

function cki() 
{
    if (jay11.type == "password") 
    {
        jay11.type = "text"
    }

    else
    {
        jay11.type = "password"
    }

}


// **********


var nid = document.getElementById("sec1")

        var nidde = document.getElementById("sec2")

        var bol = document.getElementById("hove")

        function plus() 
        {
            bol.innerHTML = Number(nid.value) + Number(nidde.value)
        }

        function mines()
        {
            bol.innerHTML = nid.value - nidde.value
        }

        function guniya()
        {
            bol.innerHTML = nid.value * nidde.value
        }

        function bhagiya()
        {
            bol.innerHTML = nid.value / nidde.value
        }
25
        function taka()
        {
            bol.innerHTML = nid.value % nidde.value
        }

// ******************


        var nil1 = document.getElementById("p1")
        var nil2 = document.getElementById("p2")
        var nil3 = document.getElementById("p3")
        var nil4 = document.getElementById("p4")
        var nil5 = document.getElementById("p5")
        var nil6 = document.getElementById("p6")
        var nil7 = document.getElementById("p7")

        var resl = document.getElementById("re")

        var spiv = document.getElementById("sp")

        var secon = document.getElementById("prese")


        sp_tag1 = document.getElementById("sp1")
        sp_tag2 = document.getElementById("sp2")

        function test() 
        {
           
                sp_tag1.innerHTML = Number(inp1.value) + Number(inp2.value) + Number(inp3.value)
                + Number(inp3.value) + Number(inp3.value) + Number(inp3.value) + Number(inp3.value)

                sp_tag2.innerHTML = Number(sp_tag1.innerHTML) * Number("100") / Number("350")

        }

        function xyz(mayur)

            {
                if(mayur.value>50)

                {
                    alert("allowd only 0-50 numbers") 
                    mayur.value="" 

                }
                else if(mayur.value<0)
                {
                    alert("not accept nagative numbers") 
                    mayur.value="" 
                }

            }

            // slider****   

            const swiper = new Swiper(".swiper", {
                slidesPerView: 5,
                spaceBetween: 50,
                loop: true,
                grabCursor: true,
                centeredSlides: true,
                slideActiveClass: "active",
                navigation: {
                  nextEl: ".next",
                  prevEl: ".prev"
                },
                pagination: {
                  el: ".pagination",
                  clickable: true
                },
                autoplay: {
                  enabled: true,
                  delay: 2000
                },

              });
              
