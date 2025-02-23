const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
    counter.innerText = "0";

    const targetValue = Number(counter.getAttribute("data-ceil"));
    const duration = 1000;
    const startTime = performance.now();

    function updateCounter(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress =  Math.min(elapsedTime / duration, 1);

        counter.innerText = Math.floor(progress * targetValue);

        if(progress < 1) {
            requestAnimationFrame(updateCounter);
        }else{
            counter.innetText = targetValue;
        }
    }
    requestAnimationFrame(updateCounter);
})