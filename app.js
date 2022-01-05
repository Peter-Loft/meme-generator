const form = document.querySelector("#memeform");
const imgInput = document.querySelector('input[name="img-url"]');
const topInput = document.querySelector('input[name="top-text"]');
const bottomInput = document.querySelector('input[name="bottom-text"]');
const gallery = document.querySelector('#gallery')


form.addEventListener('submit', function(e) {
    e.preventDefault();
    const newMeme = makeMeme(
        imgInput.value,
        topInput.value,
        bottomInput.value
    );
    gallery.appendChild(newMeme);
    imgInput.value = '';
    topInput.value = '';
    bottomInput.value = '';
});

function makeMeme(imgUrl,tText,bText) {
    const img = document.createElement('img');
    img.src = imgUrl;

    const p1 = document.createElement('div');
    p1.innerText = tText;
    p1.classList.add("toptext");

    const p2 = document.createElement('div');
    p2.innerText = bText;
    p2.classList.add("bottomtext");

    const p3 = document.createElement('p');
    const dBtn = document.createElement('button');
    dBtn.innerText = "Delete";
    dBtn.addEventListener('click', function(e){
        e.target.parentElement.parentElement.remove();
    });
    p3.classList.add("deleter");
    dBtn.classList.add("btn");
    p3.appendChild(dBtn);

    const newDiv = document.createElement('div');
    newDiv.appendChild(p1);
    newDiv.appendChild(p2);
    newDiv.appendChild(img);
    newDiv.appendChild(p3);
    newDiv.classList.add("gitem");


    return newDiv;
    
}

// Code for Letter Color Changes
function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r},${g},${b})`
}

const letters = document.querySelectorAll(".letter");

setInterval(function () {
    for (let letter of letters) {
    letter.style.color = randomRGB();
    }
}, 500)