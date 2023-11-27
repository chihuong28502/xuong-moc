export const showControlAdmin = () => {
  var check = document.querySelector(".nav.nav-treeview");
  var icon = document.querySelector(".right.fas.fa-angle-left");
  if (check.classList.value.includes("d-block")) {
    check.classList.remove("d-block");
  } else {
    check.classList.add("d-block");
  }
};
