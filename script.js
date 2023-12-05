
// nav bar section start
var mobile_btn = document.querySelector(".mobile-nav-btn")
var header = document.querySelector(".header")
var header_parent = document.querySelector("#nav")
mobile_btn.addEventListener("click", function () {
    header.classList.toggle("active")
})
const navlink = (id) => {
    header.classList.toggle("active")
    delay: "0.7"
}
const hero_section = document.querySelector(".hero-section")
const observer = new IntersectionObserver((entries) => {
    const ent = entries[0]
    const isScrolling = window.scrollY > 0;

    if (isScrolling) {
        document.body.classList.add("sticky");
    } else {
        document.body.classList.remove("sticky");
    }
}, {
    root: null,
    threshold: 0
})
observer.observe(hero_section)
// const activationScrollPosition = 10; // Adjust this position as needed
// let isStickyActive = false;
// window.addEventListener("wheel", (event) => {
//     if (!isStickyActive && Math.abs(event.deltaY) > scrollThreshold) {
//         document.body.classList.add("sticky");
//         isStickyActive = true;
//     }
// });
// window.addEventListener("scroll", () => {
//     if (window.scrollY <= 0) {
//         document.body.classList.remove("sticky");
//         isStickyActive = false;
//     } else if (window.scrollY > activationScrollPosition) {
//         document.body.classList.add("sticky");
//         isStickyActive = true;
//     }
// });
// nav bar section end
// <!-- <-------FAQS Section start ------->
const ActiveAccordon = (id) => {
    const currentAcc = document.querySelector(id)
    currentAcc.classList.toggle("faqs-active")

}
// <!-- <-------FAQS Section End ------->
// <!-- <-------Clients Reviews Section start ------->
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 2000,
        disableOnInteration: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
const swiperfunc = (widthSize) => {
    if (widthSize.matches) {
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 2,
            spaceBetween: 30,
        });
    } else {
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 3,
            spaceBetween: 30,
            freeMode: true,
        });
    }
}
const widthSize = window.matchMedia("(width < 1150px)")
swiperfunc(widthSize)
widthSize.addEventListener("change", swiperfunc)

const swiperfun2 = (widthSize2) => {
    if (widthSize2.matches) {
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
        });
    } else {
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 3,
            spaceBetween: 30,
        });
    }
}
const widthSize2 = window.matchMedia("(max-width:674px )")
swiperfun2(widthSize2)
widthSize2.addEventListener("change", swiperfun2)
// <!-- <-------Clients Reviews Section end ------->

var cursur = document.querySelector(".cursur")
var main = document.querySelector("body")
main.addEventListener("mousemove", function (dets) {
    // alert("kancf")
    cursur.style.left = dets.x + "px"
    cursur.style.top = dets.y + "px"
})

const cursurZero = (cursurWidth) => {
    if (cursurWidth.matches) {
        cursur.style.display = "none"
 
    } else {
        cursur.style.display = "block"
    }
}
const cursurWidth = window.matchMedia("(max-width : 850px)")
cursurZero(cursurWidth)
cursurWidth.addEventListener("change", cursurZero)
function aboutainmation() {
    var about_left = document.querySelector(".about-left")
    about_left.addEventListener("mouseenter", function () {
        cursur.style.width = "150px"
        cursur.style.height = "150px"
        cursur.style.backgroundColor = "rgb(222, 171, 133,0.8)"

    })
    about_left.addEventListener("mouseleave", function () {
        cursur.style.width = "15px"
        cursur.style.height = "15px"
        cursur.style.backgroundColor = "#d69667"

    })
    const about_tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#about-work",
            scroller: "body",
            start: "top 50%",
            end: "top 40%",

        }
    })
    about_tl.from(".about-left ", {
        y: 150,
        scale: 1,
        opacity: 0,
        duration: 0.5,

    }, "anim")
    about_tl.from("#about-right ", {
        y: 150,
        scale: 1,
        opacity: 0,
        duration: 0.5,
    }, "anim")


}
aboutainmation()
function portfolio_animation() {
    var portfolio_card = document.querySelectorAll(".card")
    const portfolio_tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#portfolio-work",
            scroller: "body",
            start: "top 60%",
            end: "top 50%",
        }
    })
    portfolio_tl.from("#portfolio-top", {
        y: 150,
        scale: 1,
        opacity: 0,
        duration: 0.5,

    }, "port")
    portfolio_tl.from("#portfolio-bottom", {
        y: 150,
        scale: 1,
        opacity: 0,
        duration: 0.5,
    }, "port")
}
portfolio_animation()
function price_animation() {
    const price_div = document.querySelectorAll(".price-div")
    const price_tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#price-work",
            scroller: "body",
            start: "top 60%",
            end: "top 50%",
        }
    })
    price_tl.from("#price-top", {
        y: 150,
        scale: 1,
        opacity: 0,
        duration: 0.5,
    }, "price")
    price_tl.from("#price-bottom", {
        y: 150,
        scale: 1,
        opacity: 0,
        duration: 0.5,
    }, "price")
}
price_animation()
function faqs_animation() {
    const faqs_animation = gsap.timeline({
        scrollTrigger: {
            trigger: "#faqs-work",
            scroller: "body",
            // markers : true,
            start: "top 70%",
            end: "top 80%",

        }
    })
    faqs_animation.from("#faqs-top", {
        y: 150,
        scale: 1,
        opacity: 0,
        duration: 0.5,
    }, "faqs")
    faqs_animation.from("#faqs-bottom", {
        y: 150,
        scale: 1,
        opacity: 0,
        duration: 0.5,
    }, "faqs")
}
faqs_animation()
function client_animation() {
    // const client_tl =gsap.timeline({
    //     scrollTrigger: {
    //         trigger: "#clients-swiper",
    //         scroller: "body",
    //         // markers : true,
    //         start: "top 70%",
    //         end: "top 60%",

    //     }
    // })
    // client_tl.from("#clients-swiper-top",{
    //     y: 150,
    //     scale: 1,
    //     opacity: 0,
    //     duration:0.5,
    // },"client")
    // client_tl.from(".mySwiper",{
    //     y: 100,
    //     scale: 1,
    //     opacity: 0,
    //     duration:0.1,
    // },"client")
}
client_animation()
function contact_animation() {
    const contact_tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#contact-div",
            scroller: "body",
            // markers : true,
            start: "top 60%",
            end: "top 50%",

        }
    })
    contact_tl.from(".contact-heading", {
        y: 150,
        scale: 1,
        opacity: 0,
        duration: 0.5,
    }, "contact")
    contact_tl.from("#contact-bottom", {
        y: 100,
        scale: 1,
        opacity: 0,
        duration: 0.1,
    }, "contact")
}
contact_animation()
function nav_animation() {
    const nav_tl = gsap.timeline()
    nav_tl.from("#right", {
        y: -200,
        duration: 0.5,
        delay: 0.3,
    }, "nav")
    nav_tl.from("#left ul li ", {
        y: -200,
        duration: 1,
        // delay: 0.1,
        stagger: 0.2,
    })
    nav_tl.from("#working-left", {
        y: 200,
        //    delay: -1,
        opacity: 0
    })
}
nav_animation()
var footer_inner = document.querySelector("#footer-subs-inner-1")
footer_inner.addEventListener("mouseenter", function () {
    cursur.style.display = "none"
})
footer_inner.addEventListener("mouseleave", function () {
    cursur.style.display = "block"
})
// Animation section end

