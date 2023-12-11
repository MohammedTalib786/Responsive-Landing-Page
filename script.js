let hamBtn = document.getElementById('ham-btn')
let faBars = document.getElementsByClassName('fa-bars')[0]
let navBarHam = document.getElementById('navBarHam')

hamBtn.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('clicked')
    faBars.classList.toggle('fa-xmark')
    if (navBarHam.style.display == 'flex') {
        navBarHam.style.display = 'none'
    }
    else {
        navBarHam.style.display = 'flex'
    }
})
