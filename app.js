
gsap.registerPlugin(ScrollTrigger);
// alert("Site is currently Work in Progress and so a good amount of things are not working");

const heroTl = gsap.timeline();
const mouseTl = gsap.timeline({
    delay: 2,
    onComplete: initHeroParallax
});


gsap.from(".navbar",
    {
    delay:1,              
    backgroundColor: "#2d2d2d00",
    boxShadow: "0px 0px 0px rgba(0, 0, 0, 0.200)",
    duration: 0.5,              
    ease: "power2.out" ,
     scrollTrigger: {
    trigger: ".Bento_grid", 
    start: "top 50%",       
    toggleActions: "play reverse play reverse" 
    }
    }
);

const cards = gsap.utils.toArray(".Grid_card");

cards.forEach((card) => {
    const animation = gsap.to(card,{
        scale:1.05,
        duration:0.3,
        paused: true,
        reverse: true,
        ease: "power1.inOut"
    });
    card.addEventListener("mouseenter", () => animation.play());
    card.addEventListener("mouseleave", () => animation.reverse());
});


const skills = gsap.utils.toArray(".Skills, .Status_card");

skills.forEach((skill) => {
    const animation = gsap.to(skill,{
        boxShadow: "2px 8px 10px rgba(0, 0, 0, 0.200)",
        y:-10,
        scale:1.05,
        duration:0.2,
        paused: true,
        reverse: true,
        ease: "power1.inOut"
    });
    skill.addEventListener("mouseenter", () => animation.play());
    skill.addEventListener("mouseleave", () => animation.reverse());
});

heroTl.from(".heading", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    ease: "power4.out"
})
.from(".float_icon", {
    scale: 0,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
    ease: "back.out(1.7)"
}, "-=0.5")
gsap.from(".grid1 , .navbar, .Cta", {
    y: 100,
    opacity: 0,
    delay: 1.5,
    duration: 1.5,
    stagger: 0.3,
    ease: "power4.out",
     scrollTrigger: {
        trigger: ".Hero", 
        start: "top 20%",       
        toggleActions: "play none none none" 
    }

});

//mouse animation
document.addEventListener("DOMContentLoaded", () => {
const heroContainer = document.querySelector(".hero");

    if (!heroContainer) return;

function initHeroParallax() {
    if(window.matchMedia("pointer:fine").matches){
    heroContainer.addEventListener("mousemove", (e) => {
        const { width, height, left, top } = heroContainer.getBoundingClientRect();
        const xPos = ((e.clientX - left) / width) - 0.5;
        const yPos = ((e.clientY - top) / height) - 0.5;

        gsap.to(".heading", {
            x: xPos * 10, 
            y: yPos * 10,
            duration: 0.6,
            ease: "power2.out"
        });

        gsap.to(".float_icon", {
            x: xPos * 50,
            y: yPos * 50,
            duration: 0.6,
            ease: "power2.out"
        });
    });

    heroContainer.addEventListener("mouseleave", () => {
        gsap.to([".heading", ".float_icon"], {
            x: 0,
            y: 0,
            duration: 1,
            ease: "elastic.out(1, 0.3)"
        });
    });
}
}
initHeroParallax();
});

gsap.from(".grid_item3, .grid_item4, .Status_card, .grid_item5", {
    y: 50,              
    opacity: 0,          
    duration: 1,       
    stagger: 0.3,       
    ease: "power2.out",  
    scrollTrigger: {
        trigger: ".Bento_grid", 
        start: "top 15%",       
        toggleActions: "play none none none" 
    }
});

gsap.from(".Skills",
    {
    delay:1.5,
    y: 50,              
    opacity: 0,          
    duration: 1,       
    stagger: 0.1,       
    ease: "power2.out" 
    }
);


    const radius = 40;
    const circumference = 2 * Math.PI * radius; 


gsap.fromTo(".progress-stroke", 
        { strokeDashoffset: circumference }, 
        { 
            strokeDashoffset: (i, target) => {
                const percent = target.getAttribute('data-percent');
                return circumference - (percent / 100) * circumference;
            },
            duration: 1,
            ease: "power2.out",
            stagger: 0.2, 
            delay: 2,
        scrollTrigger: {
        trigger: ".Bento_grid", 
        start: "top 20%",       
        toggleActions: "play none none none" 
    }

        }
    );

    gsap.from(".email, .Handle_cover", {
    y: 50,              
    opacity: 0,          
    duration: 1,       
    stagger: 0.3,       
    ease: "power2.out",  
    scrollTrigger: {
        trigger: ".grid_item4", 
        start: "top 80%",       
        toggleActions: "play none none none" 
    }
});