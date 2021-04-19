const toggleNavbar=(e)=>{
  e.preventDefault();
  document.querySelector('body').classList.toggle('active')
  document.querySelector('.bg-link').classList.toggle('active')
  return document.querySelector('#navCollapse').classList.toggle('active') ;
}

document.querySelector('#toggleBtn').addEventListener('click', toggleNavbar)
document.querySelector('.bg-link').addEventListener('click', toggleNavbar)