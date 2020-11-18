const button1 = document.getElementById('one');

button1.onclick = () => alert('You Clicked Button One');

const button2 = document.getElementById('two');

button2.addEventListener('dblclick', () => alert{'You DOUBLE Clicked The Second Button!!!'});

const form = document.querySelector('form');

form.addEventListener('submit', () => {
    const username = form.elements.username.value;
    alert(username);
});

const darkMode = document.getElementById('dm');

const allElements = document.querySelectorAll('*');
console.log(allElements);
darkMode.addEventListener('click', () => {
    for(element of allElements){
        element.classList.toggle('dark-mode');
    }
});