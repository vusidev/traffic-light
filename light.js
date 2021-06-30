const bulb =
document.querySelectorAll (".bulb");
let activeLight = 0;
setInterval(() => {
changeLight();
},10000);

function changeLight() {
bulb [activeLight].className =
"bulb";
activeLight++;
if (activeLight > 2) {
activeLight = 0;
}

const currentLight = bulb
[activeLight]
currentLight.classList.add
(currentLight.getAttribute ("style"));

}