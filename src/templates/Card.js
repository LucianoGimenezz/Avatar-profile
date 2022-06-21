import gitHub from '../assets/icons/github1.png';
import profile from '../assets/images/perfilPng.png';

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
                <a>
                  <img 
                   src="assets/icons/twitter1.png"
                   alt="Logo de twitter"
                   />
                </a>
                <a>
                 <img 
                    src="${gitHub}" 
                    alt="Logo de github"
                    /> 
                </a>
                <a>
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
