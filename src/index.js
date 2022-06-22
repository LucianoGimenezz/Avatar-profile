import router from '../src/routes/index';
import '@styles/styles.css';
console.log('Probando la variable de entorno:', process.env.ALGO);

window.addEventListener('load',router);

