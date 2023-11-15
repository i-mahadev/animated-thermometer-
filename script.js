const tempLoad = () => {
    let temp = document.getElementById("temp");
    temp.innerHTML = "&#xf2cb";
    temp.style.color = "#ffffff"

    setTimeout(() => {
        temp.innerHTML = "&#xf2ca";
        temp.style.color = "#68d96e";
    }, 1000);
    setTimeout(() => {
        temp.innerHTML = "&#xf2c9";
        temp.style.color = "#ffff00";
    }, 2000);
    setTimeout(() => {
        temp.innerHTML = "&#xf2c8";
        temp.style.color = "#ff4000";
    }, 3000);

    setTimeout(() => {
        temp.innerHTML = "&#xf2c7";
        temp.style.color = "#ff0000";
    }, 4000);
};

tempLoad();
setInterval(tempLoad,5000);
