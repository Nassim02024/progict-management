let next = document.querySelector('.next')
let back = document.querySelector('.back')
let page = document.querySelectorAll('.page')
let curent = 0

if (curent < 1 ) {
  back.style.display = 'none'
}


next.addEventListener('click' , function () {
  curent++
  back.style.display = 'block'
  let wathpage = document.getElementById(`page${curent}`)
  wathpage.classList.add('active')
  if (curent == 4 ) {
    next.style.display = 'none'
  }
  

  if (curent > curent-1) {
    let wathpage = document.getElementById(`page${curent-1}`).classList.remove('active')
  }
  console.log(wathpage);

})


back.addEventListener('click' , function () {
  curent--
  let wathpage = document.getElementById(`page${curent}`)

  wathpage.classList.add('active')
  if (curent < curent+1) {
    let wathpage = document.getElementById(`page${curent+1}`).classList.remove('active')
  }
  if (curent < 4) {
    next.style.display = 'block'
  }
  if (curent == 1) {
    back.style.display = 'none'
  }

  console.log(wathpage);
  
})

