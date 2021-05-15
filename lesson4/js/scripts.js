function toggleMenu() {
    console.log(document.getElementById("primaryNav").classList);
    document.getElementById("primaryNav").classList.toggle("hide");

    let hamburger = document.querySelector("nav button");

    if (!hamburger.classList.contains("hotdog"))
    {
        hamburger.classList.add("hotdog");
        hamburger.style.transform="rotate(90deg)";
    }

    else {
    hamburger.classList.remove("hotdog");
    hamburger.style.transform="rotate(0deg)";
    }

}

