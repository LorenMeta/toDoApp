const addItemBtn = document.getElementById('add-item');
const input = document.getElementById('input');
const ulList = document.getElementById('to-do-list');
const p = document.querySelector('p');

addItemBtn.addEventListener('click', () => {
    let inputValue = input.value;
    if (inputValue !== '') {
        let li = document.createElement('li');
        let btn = document.createElement('button');
        btn.className = "liBtn";
        btn.textContent = "Remove"
        li.innerHTML = inputValue;
        li.appendChild(btn);
        ulList.appendChild(li);
    } else {
        p.innerHTML = 'Please type something...'
    }

})