const shareBtn = document.getElementById("share");
const tooltip = document.querySelector(".tooltip-container");
const shareRemove = document.getElementById("share-remove");

const toogleTooltip = () => tooltip.classList.toggle("active");

shareBtn.addEventListener('click', toogleTooltip);
shareRemove.addEventListener('click', toogleTooltip);