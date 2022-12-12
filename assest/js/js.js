const Nav_end_icon = document.querySelectorAll('#EndIcon div');
window.onload = () => {
  if (window.innerWidth <= 505) {
    Nav_end_icon[2].classList.add("hide")
    Nav_end_icon[1].classList.add("hide")
  }
  window.onresize = (e) => {
    if (window.innerWidth <= 505) {
      Nav_end_icon[2].classList.add("hide")
      Nav_end_icon[1].classList.add("hide")
    }
    if (window.innerWidth >= 505) {
      Nav_end_icon[2].classList.replace("hide", "show")
      Nav_end_icon[1].classList.replace("hide", "show")
    }
  }
}