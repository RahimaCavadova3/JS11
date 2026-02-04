function menuOpen() {
    let menubar = document.getElementById('menubar')
    if (menubar.style.left === '-100%') {
        menubar.style.left = 0
        menubar.classList.add('menuOpen')
    
    } else {
 menubar.style.left = '-100%'
    }
}
 let fixdesktop = document.getElementById('fixdesktop')
window.addEventListener("scroll",function(){
    if(window.scrollY > 90) {
        fixdesktop.classList.add('fixdesktop')
    } else {
          fixdesktop.classList.remove('fixdesktop')
    }
})