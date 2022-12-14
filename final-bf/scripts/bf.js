function toggleMenu () {
    document.getElementById("navigation").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
    //add if statement to make it change to an x and then change it back
};

const x = document.getElementById('hamburgerBtn');

x.onclick = toggleMenu;