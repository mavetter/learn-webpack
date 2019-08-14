function component() {
  let element = document.createElement('div');

  element.innerHTML = 'Hallo Webpack!';

  return element;
}

document.body.appendChild(component());
