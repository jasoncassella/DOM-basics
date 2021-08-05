// assign variable to the node list containing the 3 buttons
const buttons = document.querySelectorAll('button');

// use the forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});
