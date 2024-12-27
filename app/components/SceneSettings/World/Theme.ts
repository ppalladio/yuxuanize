import EventEmitter from 'events';

export default class Theme extends EventEmitter {
    public theme: string;
    public toggleButton: any;
    constructor() {
        super();
        this.theme = 'light';
        this.toggleButton = document.querySelector('.toggle-button');

        this.setEventListeners();
    }
    setEventListeners() {
        this.toggleButton.addEventListener('click', () => {
            this.theme = this.toggleButton.getAttribute('data-state') === 'checked' ? 'light' : 'dark';
            document.body.classList.toggle('dark-theme');
            document.body.classList.toggle('light-theme');
            this.emit('switch', this.theme);
        });
    }
}
