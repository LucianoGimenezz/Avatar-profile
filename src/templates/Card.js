import gitHub from '@icons/github1.png';
import profile from '@images/perfilPng.png';
import sunIcon from '@icons/sun-icon- 1.png'
import moonIcon from '@icons/moon-icon 1.png'

const Card = () => {
    const view = `
    <section class="card">
        <div class="card__image">
            <div class="change_mode">
                <img id="icon_mode" src="${sunIcon}" alt="icon" />
            </div>
            <span>
              <img src="${profile}"/>
            </span>
        </div>
        <div class="card__info">
            <p class="card__about">Hi, My name is Luciano Gimenez</p>
            <h3 class="card__title">FRONT-END</h3>
            <div class="rule"></div>
            <div class="icons-container">
                <a target="_blank" href="https://twitter.com/LucianoG211">
                  <img 
                   src="assets/icons/twitter1.png"
                   alt="Logo de twitter"
                   />
                </a>
                <a target="_blank" href="https://github.com/LucianoGimenezz">
                 <img 
                    src="${gitHub}" 
                    alt="Logo de github"
                    /> 
                </a>
                <a  target="_blank" href="https://www.linkedin.com/in/luciano-martin-gimenez-52986a1ba/">
                  <img
                     src="assets/icons/linkedin1.png"
                     alt="Logo de linkedin"
                    />
                </a>
            </div>
        </div>
    </section>
    `;

    return view;
}

window.addEventListener('load',() => {
    setTimeout(() =>{
        const button = document.querySelector('.change_mode');
        button.addEventListener('click', () => {
            const body = document.querySelector('body');
            const div1 = document.querySelector('.card__image');
            const div2 = document.querySelector('.card__info');
            const buttonChangeMode = document.querySelector('.change_mode');
            const iconMode = document.querySelector('#icon_mode');

            if(!body.classList.value.includes('dark-mode')){
                 body.classList.add('dark-mode');   
                 div1.classList.add('card__image--dark');
                 div2.classList.add('card__info--dark');
                 buttonChangeMode.classList.add('change_mode--dark')
                 iconMode.src = moonIcon;
            }else {
                body.classList.remove('dark-mode');   
                div1.classList.remove('card__image--dark');
                div2.classList.remove('card__info--dark');
                buttonChangeMode.classList.remove('change_mode--dark')
                iconMode.src = sunIcon;
            }
        })
    } ,1000)
})

export default Card;
