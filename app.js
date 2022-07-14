const addItemBtn = document.getElementById('add-item');
const input = document.getElementById('input');
const ulList = document.getElementById('to-do-list');
const p = document.querySelector('p');

addItemBtn.addEventListener('click', () => {
    let inputValue = input.value;
    if (inputValue !== '') {
        let li = document.createElement('li');
        let input = document.createElement('input');
        input.className = "li-input";
        input.value = inputValue;
        let removeBtn = document.createElement('button');
        removeBtn.className = "removeBtn";
        removeBtn.textContent = "Remove";
        li.appendChild(input);
        li.appendChild(removeBtn);
        ulList.appendChild(li);
        p.innerHTML = '';

        removeBtn = document.querySelector('.removeBtn');
        removeBtn.addEventListener('click', () => {
            ulList.removeChild(li);
        })
    } else {
        p.innerHTML = 'Please type something...'
    }
});

