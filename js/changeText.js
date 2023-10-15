

const discription = document.querySelectorAll('.block-discription');

function renderingSmallerDiscription() {
    return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';
}

function renderingBiggerDiscription() {
    return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.';
}

function updateDescription() {
    const pageWidth = window.innerWidth;

    discription.forEach(element => {
        if (pageWidth <= 1080) {
            element.innerHTML = renderingSmallerDiscription();
        } else {
            element.innerHTML = renderingBiggerDiscription();
        }
    });
}
updateDescription();

window.addEventListener('resize', updateDescription);





function generateNumbersRecurs(numbers , total , Multinumbers){
    const num = Math.floor(Math.random * Multinumbers);
    if(numbers.lenght !== total){
        if(!numbers.includes(num)){
            numbers.push(num)
        }
        generateNumbersRecurs(numbers , total , Multinumbers);
    }
}

function generateNumberFromRec(total = 5, Multinumbers = 10){
    const generetedNumber = [];

    generateNumbersRecurs(generetedNumber , total , Multinumbers);

    return generetedNumber;
}

console.log(generetedNumber);