let bulld = document.querySelector('.bulld')
let imgebullav = document.querySelector('.imgebullav')
let sp1 = document.querySelector('.isaddtext h2 .sp1')
let sp2 = document.querySelector('.sp2')

setTimeout(() => {
  bulld.style.left = '-4rem'

  setTimeout(() => {
    imgebullav.classList.add('routait')
    sp1.style.bottom = '2px'
    sp1.style.left = '6px'
    sp2.style.bottom = '10px'
    setTimeout(() => {
      sp2.style.top = '5px'
      setTimeout(() => {
        sp1.style.left = '20rem'
        sp2.style.left = '15rem'
        sp2.style.transition = ' left 7s'
        setTimeout(() => {
          
            window.location.href = '/home'
        }, 2000);
      }, 500);
    }, 500);

    setTimeout(() => {
      bulld.style.left = '27rem'
    }, 1000);
  }, 2000);
}, 1000);