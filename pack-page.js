const params = new URLSearchParams(window.location.search);

const club = params.get("club");


document.getElementById("club-title").innerHTML =
club.toUpperCase() + " SCENEPACKS";


const container = document.getElementById("pack-container");


const packs = scenepacks.filter(pack =>
    pack.club === club
);


packs.forEach(pack => {


const card = document.createElement("div");

card.className="pack";


card.innerHTML=`

<img src="${pack.image}">

<div class="pack-line"></div>

<div class="pack-name">
${pack.name.toUpperCase()}
</div>

`;


container.appendChild(card);


});



/* SEARCH */

document.getElementById("search")
.addEventListener("input", e=>{


let value=e.target.value.toLowerCase();


document.querySelectorAll(".pack")
.forEach(pack=>{


pack.style.display =
pack.innerText.toLowerCase().includes(value)
?"block"
:"none";


});


});
