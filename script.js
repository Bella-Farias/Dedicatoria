document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("click", () => {
        const text = button.parentElement.nextElementSibling;
        const icon = button.querySelector(".mdi");

        text.classList.toggle("active");

        if (text.classList.contains("active")) {
            icon.classList.remove("mdi-menu-down");
            icon.classList.add("mdi-menu-up");
        } else {
            icon.classList.remove("mdi-menu-up");
            icon.classList.add("mdi-menu-down");
        }
    });
});
