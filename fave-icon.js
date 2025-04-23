

document.addEventListener("DOMContentLoaded", function () {
    
    let favoriteIcons = document.querySelectorAll(".favorite-icon");
    
    favoriteIcons.forEach(function (icon) {
        icon.addEventListener("click",
            function () {
                if (icon.classList.contains("filledIt")) {
                    icon.classList.remove("filledIt");
                    icon.innerHTML = "&#9825;"; // Empty heart
                } else {
                    icon.classList.add("filledIt");
                    icon.innerHTML = "&#10084;"; // Filled black heart
                }
            });
    });
    console.log(favoriteIcons);
});