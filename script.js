 
const tabButtons = document.querySelectorAll(".tab-button");//this finds elements with .tab-button
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(function(button) {
    button.addEventListener("click", function() {

        tabButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        tabContents.forEach(function(content) {
            content.classList.remove("active");
        });

        button.classList.add("active");

        const selectedTab = button.getAttribute("data-tab");
        document.getElementById(selectedTab).classList.add("active");

    });
});
