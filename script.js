const container = document.querySelector('#container');
console.log(container);

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const para = document.createElement('p');
para.textContent = "Hey I'm red!";
para.style.color = 'red';

const smallBlueHeading = document.createElement('h3');
smallBlueHeading.textContent = "I'm a blue h3!";
smallBlueHeading.style.color = 'blue';

const pinkDiv = document.createElement('div');
pinkDiv.style.cssText = 'border: 1px solid black; background-color: pink;';

const divHeader = document.createElement('h1');
divHeader.textContent = "I'm in a div";

const divPara = document.createElement('p');
divPara.textContent = 'ME TOO!';

pinkDiv.appendChild(divHeader);
pinkDiv.appendChild(divPara);

container.appendChild(content);
container.appendChild(para);
container.appendChild(smallBlueHeading);
container.appendChild(pinkDiv);
