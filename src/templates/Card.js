const Card = () => {
    const view = `
    <section class="card">
        <div class="card__image">
            <span></span>
        </div>
        <div class="card__info">
            <p class="card__about">Hi, My name is Luciano Gimenez</p>
            <h3 class="card__title">Front-end</h3>
            <div class="icons-container">
                <span>Twitter</span>
                <span>Github</span>
                <span>Linkedin</span>
            </div>
        </div>
    </section>
    `;

    return view;
}

export default Card;