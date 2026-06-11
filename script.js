document.addEventListener("DOMContentLoaded", () => {
    
    // --- FEATURE 1: HIGH-PERFORMANCE LIVE SCROLL OBSERVER ---
    const revealOptions = {
        threshold: 0.15, // Triggers when 15% of the content block becomes visible
        rootMargin: "0px 0px -40px 0px"
    };

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Stops watching once loaded beautifully
            }
        });
    }, revealOptions);

    // Attach observer to all target word blocks
    const itemsToReveal = document.querySelectorAll(".scroll-reveal-word");
    itemsToReveal.forEach(item => {
        revealOnScroll.observe(item);
    });


    // --- FEATURE 2: GEOGRAPHIC OFFICE PRESENCE COLLAPSIBLE ---
    const presenceBtn = document.getElementById("presenceBtn");
    const mapBlock = document.getElementById("map-collapse-block");

    if (presenceBtn && mapBlock) {
        presenceBtn.addEventListener("click", () => {
            mapBlock.classList.toggle("expanded");
            if (mapBlock.classList.contains("expanded")) {
                presenceBtn.textContent = "Collapse Spatial Map";
                // Smoothly roll the screen to bring map interface fully into view
                setTimeout(() => {
                    mapBlock.scrollIntoView({ behavior: "smooth", block: "nearest" });
                }, 300);
            } else {
                presenceBtn.textContent = "Our Geographic Footprint";
            }
        });
    }


    // --- FEATURE 3: TAB CONTROL SWITCHER FOR THREE REGIONAL MAPS ---
    const tabButtons = document.querySelectorAll(".map-tab-btn");
    const mapIframes = document.querySelectorAll(".map-iframe-target");

    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove active classes
            tabButtons.forEach(btn => btn.classList.remove("active"));
            mapIframes.forEach(iframe => iframe.classList.remove("active"));

            // Set current active frame parameters
            button.classList.add("active");
            const targetId = button.getAttribute("data-target");
            document.getElementById(targetId).classList.add("active");
        });
    });

});