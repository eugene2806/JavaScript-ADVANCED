'use strict';

class Button {
    constructor(width, height, background, value) {
        this.width = width;
        this.height = height;
        this.background = background;
        this.value = value;
    }
    render() {
        const button = document.createElement('button');
        button.style.width = this.width;
        button.style.height = this.height;
        button.style.background = this.background;
        button.innerHTML = this.value;
        // document.querySelector('.body').append(button);
        return button
    }
}

const button1 = new Button('100px', '50px', 'white', 'Touch').render();

document.querySelector('.body').append(button1);