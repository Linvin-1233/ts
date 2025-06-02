document.addEventListener("DOMContentLoaded", () => {
    const rippleDelay = 350; // 波纹触发间隔(ms)

    document.querySelectorAll("a").forEach(a => {
        let lastRippleTime = 0;

        const spawnRipple = (e) => {
            const now = Date.now();
            if (now - lastRippleTime < rippleDelay) return;
            lastRippleTime = now;

            const ripple = document.createElement("span");
            ripple.classList.add("ripple");

            const rect = a.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;

            ripple.style.left = `${mouseX - 8}px`;
            ripple.style.top = `${mouseY - 8}px`;

            a.appendChild(ripple);

            ripple.addEventListener("animationend", () => {
                ripple.remove();
            });
        };

        a.addEventListener("mousemove", spawnRipple);
    });
});