import { render } from './app/todos.js';
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#yr').textContent = `${new Date().getFullYear()}`;
});
render();
