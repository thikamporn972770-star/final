   // โหลด menu1.js
   fetch("navbar.html")
   .then(res => res.text())
   .then(data => {
       document.getElementById("navbar").innerHTML = data;

       // ✅ re-bind toggle หลังจากเมนูถูก inject
       const sidebarToggle = document.body.querySelector('#sidebarToggle');
       if (sidebarToggle) {
           sidebarToggle.addEventListener('click', event => {
               event.preventDefault();
               document.body.classList.toggle('sb-sidenav-toggled');
           });
       }
   });
