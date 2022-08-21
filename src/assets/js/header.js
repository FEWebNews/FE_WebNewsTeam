window.addEventListener('scroll', function(){
    var header = document.querySelector('.header-main')
    header.classList.toggle('sticky',window.scrollY > 0)
})


