// let onCLick = document.querySelectorAll(" .sidenav");
// onCLick.addEventListener("click", function() {
// //    return e.style.color = 'red';
//     onCLick.alert("clicked");
// });

// function changeColor() {
//     // document.querySelectorAll(".clickEvent").style.color = 'red';
//     document.querySelectorAll(".clickEvent");
//     classList.add('active');
// }

// ----------- working ------------

function openNav() {
  document.getElementById("slideNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("slideNav").style.width = "0";
}

const links = document.querySelectorAll(".nav-link");

links.forEach((link) => {
  link.addEventListener("click", function () {
    links.forEach((link) => {
      return link.classList.remove("active");
    });
    return link.classList.add("active");
  });
});

