
let equalTab = document.getElementById("equalTab");
let customTab = document.getElementById("customTab");

let equalContent = document.getElementById("equalContent");
let customContent = document.getElementById("customContent");

equalTab.addEventListener("click", function () {
    
    equalContent.style.display = "block";
    customContent.style.display = "none";

    equalTab.classList.add("activeTab");
    customTab.classList.remove("activeTab");
});

customTab.addEventListener("click", function () {
    
    customContent.style.display = "block";
    equalContent.style.display = "none";

    customTab.classList.add("activeTab");
    equalTab.classList.remove("activeTab");
});
