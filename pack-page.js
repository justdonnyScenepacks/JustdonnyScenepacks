console.log("PACK PAGE LOADED");


const params = new URLSearchParams(window.location.search);

const club = params.get("club");


document.getElementById("club-title").innerHTML =
    club.toUpperCase() + " SCENEPACKS";


const container = document.getElementById("pack-container");


const packs = window.scenepacks.filter(pack =>
    pack.club === club
);



packs.forEach((pack, index) => {


    const card = document.createElement("div");


    card.className = "pack show";


    card.innerHTML = `

        <img src="${pack.image}">

        <div class="pack-line"></div>

        <div class="pack-name">
            ${pack.name.toUpperCase()}
        </div>

    `;


    card.style.transitionDelay = `${index * 0.05}s`;


    card.onclick = () => {

        if(pack.download === "") {

            alert("DOWNLOAD COMING SOON");

            return;

        }

        window.location.href = pack.download;

    };


    container.appendChild(card);


});



/* SEARCH */

const search = document.getElementById("search");


search.addEventListener("input", e => {


    let value = e.target.value.toLowerCase();


    document.querySelectorAll(".pack")
    .forEach(card => {


        card.style.display =
        card.innerText.toLowerCase().includes(value)
        ? "block"
        : "none";


    });


});
