
window.addEventListener('scroll', ()=>{
    if(window.scrollY >= 200){
        console.log(document.querySelector('.images-all'));
        document.querySelector('.images-all').style.display = "flex"
        document.querySelector('.images-all').style.animation="cards-anim 2s ease 0s 1 normal forwards";
    }
})