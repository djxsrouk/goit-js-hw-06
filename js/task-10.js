function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.getElementById('controls');
  const createButton = controls.querySelector('[data-create]');
  const destroyButton = controls.querySelector('[data-destroy]');
  const boxesContainer = document.getElementById('boxes');

  function createBoxes(amount) {
    const boxes = [];
    let size = 30;

    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxes.push(box);
      size += 10;
    }

    boxesContainer.append(...boxes);
  }

  function destroyBoxes() {
    boxesContainer.innerHTML = '';
  }

  createButton.addEventListener('click', function () {
    const amount = parseInt(controls.querySelector('input').value);
    createBoxes(amount);
  });

  destroyButton.addEventListener('click', function () {
    destroyBoxes();
  });