import _ from 'lodash';
import './assets/style/style.css';
// import Icon from './assets/img/icon.svg';
// import Xml from './assets/files/test.xml';
// import Csv from './assets/files/test.csv';
// import Json from './assets/files/test.json';

import printMe from './print.js';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // Add the image to our existing div.
    // const myIcon = new Image();
    // myIcon.src = Icon;

    // element.appendChild(myIcon);

    // console.log(Xml);
    // console.log(Csv);
    // console.log(Json);

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());