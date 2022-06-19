import Card from "../templates/Card";

const router = async () => {
    const content = null || document.getElementById('container');

    content.innerHTML = await Card();
}

export default router;