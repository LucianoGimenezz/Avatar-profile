import gitHub from '@icons/github1.png';
import profile from '@images/perfilPng.png';

const Card = () => {
    const view = `
    <section class="card">
        <div class="card__image">
            <span>
              <img src="${profile}"/>
            </span>
        </div>
        <div class="card__info">
            <p class="card__about">Hi, My name is Luciano Gimenez</p>
            <h3 class="card__title">Front-end</h3>
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

export default Card;
