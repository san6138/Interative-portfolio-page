let popup_window = document.querySelector(".window");
function pop_up() {
    popup_window.style.display = "block";
}
function close_popup() {
    popup_window.style.display = "none";
}

function display_menu(element) {
    menu_detail = document.querySelector("nav");
    menu_bar = document.getElementById("menu-button");
    close_button = document.getElementById("close-btn")
    console.log(element.id)
    // console.log(event.target)
    if (element.id == "menu-button") {
    // menu_detail = document.querySelector("nav");
    // menu_bar = document.getElementById("menu-button")
        console.log(menu_detail)
    menu_detail.className = "menu-detail";
    menu_bar.style.display = "none";
    close_button.style.display = "block";
    } else  {
        menu_detail.className = "";
        menu_bar.style.display = "block";
        element.style.display = "none";

    }
}
function add_class_to_menu() {
    menu_bar = document.getElementById("menu-button");
    menu_div = menu_bar.querySelector("div")
    if (!window.innerWidth >= 900) {
        menu_div.className = "";
    }


}

window.addEventListener('resize', add_class_to_menu)
