const main = document.querySelector(".main");
const orbs = document.querySelectorAll(".orb");
const trigger = document.querySelector(".forground");

trigger.addEventListener("click", () => {

    if (main.dataset.on == "#") {
        orbs.forEach((orb) => {
            orb.dataset.on = "true";
        });
        main.dataset.on = "true";
        return;
    }

    if (main.dataset.on == "false") {
        orbs.forEach((orb) => {
            orb.dataset.on = "true";
        });
        main.dataset.on = "true";
    } else {
        orbs.forEach((orb) => {
            orb.dataset.on = "false"
        });
        main.dataset.on = "false";
    }


});