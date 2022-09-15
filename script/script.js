const FeaturesButtons = document.querySelectorAll('.category-button');
const FeaturesImg = document.querySelector('#feature-image');
const FeaturesTitle = document.querySelector('#features-title');
const FeaturesDescription = document.querySelector('#features-description')
const QuestionButtons = document.querySelectorAll('.question-button');
const Question = document.querySelectorAll('.question');
const Arrow = document.querySelectorAll('.arrow');
const SubmitButton = document.querySelector('#submit-button');
const Header = document.querySelector('header');
const Hamburger = document.querySelector('#hamburger');
const Logo = document.querySelector('#bookmark-logo');
const MobileLinks = document.querySelector('#mobile-links');
const screen = window.matchMedia( "(min-width: 768)" );


let arr;

fetch('data.json')
    .then((res) => res.json())
    .then(json => {arr = json})


const removeAllActive = () => {
    for(let i = 0; i < FeaturesButtons.length; i++){
        FeaturesButtons[i].classList.value -= ' active'
    }
}

for(let i = 0; i < FeaturesButtons?.length; i++){
    FeaturesButtons[i].addEventListener('click', () => {
        removeAllActive();
        let {id, title, button, description, img} = arr[i];
        FeaturesButtons[i].classList.value += ' active'
        FeaturesImg.src = img;
        FeaturesTitle.innerHTML = title;
        FeaturesDescription.innerHTML = description;
    })
}

const removeAllHeight = () => {
    for(let i = 0; i < QuestionButtons?.length; i++){
        Question[i].style.height = 0;
        Arrow[i].style.transform = 'rotate(0deg)';
    }
}

for(let i = 0; i < QuestionButtons?.length; i++){
    QuestionButtons[i].addEventListener('click', () => {
        if(Question[i].style.height == 'fit-content'){
            Question[i].style.height = 0;
            Arrow[i].style.transform = 'rotate(0deg)'
        } else {
            removeAllHeight();
            Question[i].style.height = 'fit-content';
            Arrow[i].style.transform = 'rotate(180deg)'
        }
    })
    
}

SubmitButton.addEventListener('click', (e) => {
    e.preventDefault();
})

Hamburger.addEventListener('click', () => {
    if(Logo.src == 'http://127.0.0.1:5500/images/logo-bookmark.svg'){
        Header.classList.value += 'header-active';
        Logo.src = './images/logo-bookmark-footer.svg'  
        Hamburger.src = './images/icon-close.svg'
        MobileLinks.style.display = 'flex';
    } else {
        Header.classList.value = '';
        Logo.src = './images/logo-bookmark.svg'
        Hamburger.src = './images/icon-hamburger.svg'
        MobileLinks.style.display = 'none';
    }
})