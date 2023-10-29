

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
// console.log(selectedUser.id);


function renderingUnits(selectedUser){
    unitTitle.textContent = selectedUser.title;
    unitImg.src = selectedUser.img;
    unitDate.textContent = selectedUser.date;
    unitName.textContent = selectedUser.name;
    unitComment.textContent = selectedUser.comment;
    const numberListMark = renderingNumberList();

    numberList.forEach((element) => {
        element.innerHTML = numberListMark;
        if(numbers[i] === selectedUser.id){
            // console.log(numbers[i] , "num")
        }
        })
}
// console.log(selectedUser.id);
renderingUnits(selectedUser);

// swipePage.forEach((number) => {
// number.addEventListener('click' , () => {
//         window.location.href = `./blogPixelUnit.html?${selectedUser.id}`, "_self";
// })
// })