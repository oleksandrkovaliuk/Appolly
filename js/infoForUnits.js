

const searchLocation = window.location.search;
const searchParams = new URLSearchParams(searchLocation);
const searchUnit = parseInt(searchParams.get("unit"));

const unitTitle = document.querySelector("#unit-title");
const unitImg = document.querySelector("#unit-img");
const unitDate = document.querySelector("#date");
const unitName = document.querySelector("#unit-name");
const unitComment = document.querySelector("#unit-comment");
const numberList = document.querySelectorAll("#number-list");
const numbers = [1, 2, 3, 4, 5];
const activeNumber = 1;



function renderingNumberList() {
    let markUp = "";
    for (let i = 0; i < numbers.length; i++) {
        markUp += `<li class="numbers">${numbers[i]}</li>`;
    }
    return markUp;
}
const findSelectedUnit = units.findIndex((selectedUser) => {
    return selectedUser.id === searchUnit;
})
const selectedUser = units[findSelectedUnit];



function renderingUnits(selectedUser){
    unitTitle.textContent = selectedUser.title;
    unitImg.src = selectedUser.img;
    unitDate.textContent = selectedUser.date;
    unitName.textContent = selectedUser.name;
    unitComment.textContent = selectedUser.comment;
    const numberListMark = renderingNumberList();

    numberList.forEach((element) => {
        element.innerHTML = numberListMark;
        })
}
renderingUnits(selectedUser);


const rightBlocksContainer = document.querySelector('.right-news-blocks-container');
function renderingRightSmallBlocks() {
    let markUpRight = "";
      units.forEach((unit) => {
            if(unit.id !== selectedUser.id){
                markUpRight += `<a href="./blogUnits.html?unit=${unit.id}" class="rigth-news-block">
                <div class="img">
                    <img src="${unit.img}">
                </div>
                <div class="news-text">
                    <h2 class="name-of-news">${unit.title}</h2>
                </div>
            </a>`
            }
    })
    return markUpRight;
}
const renderedBlocks = renderingRightSmallBlocks();
rightBlocksContainer.innerHTML = renderedBlocks;

 