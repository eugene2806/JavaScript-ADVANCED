'use strict';

class ModernButton extends Button {
  constructor(width, height, background, value, borderRadius = 0) {
    super(width, height, background, value);
    this.borderRadius = borderRadius;
  }

  render() {
    const button = super.render();
    button.style.borderRadius = this.borderRadius;
    return button;
  }
}

const button2 = new ModernButton('100px', '50px', 'white', 'Touch', '20px').render();

document.querySelector('.body').append(button2);