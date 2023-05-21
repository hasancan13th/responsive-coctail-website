var menuItems=document.getElementById("menuItems");
menuItems.style.maxHeight="0px";
function menuToggle()
{
    if(menuItems.style.maxHeight=="0px")
    {
        menuItems.style.maxHeight="240px"
    }
    else {
        menuItems.style.maxHeight="0px"
    }
}

window.sr=ScrollReveal();
sr.reveal(".ani-left",{
    origin:'left',
    duration:1000,
    distance:'25rem',
    delay:300
})
sr.reveal(".ani-right",{
    origin:'right',
    duration:1000,
    distance:'25rem',
    delay:300
})
sr.reveal(".ani-bottom",{
    origin:'bottom',
    duration:1000,
    distance:'25rem',
    delay:300
})

ScrollReveal().reveal(".ani1",{delay:250});
ScrollReveal().reveal(".ani2",{delay:500});
ScrollReveal().reveal(".ani3",{delay:750});
ScrollReveal().reveal(".ani4",{delay:1000});