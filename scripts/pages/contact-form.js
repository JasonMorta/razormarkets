
    document.querySelectorAll(".tabs ul li").forEach(tab => {
        tab.addEventListener("click", () => {
            document.querySelectorAll(".tabs ul li").forEach(t => t.classList.remove("is-active"));
            tab.classList.add("is-active");
            
            const target = tab.getAttribute("data-tab");
            document.querySelectorAll(".tab-content").forEach(content => {
                content.style.display = content.id === target ? "block" : "none";
            });
        });
    });
