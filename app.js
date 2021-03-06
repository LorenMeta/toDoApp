const addItemBtn = document.getElementById('add-item');
const input = document.getElementById('input');
const ulList = document.getElementById('to-do-list');
const p = document.querySelector('p');

addItemBtn.addEventListener('click', () => {
    let inputValue = input.value;
    if (inputValue === '') {
        p.innerHTML = 'Please type something...'
    } else {

        let li = document.createElement('li');

        let input = document.createElement('input');
        input.classList.add("li-input");
        input.value = inputValue;

        let removeBtn = document.createElement('button');
        removeBtn.classList.add("removeBtn");
        removeBtn.textContent = "X";

        let doneBtn = document.createElement('button');
        doneBtn.classList.add("doneBtn");
        doneBtn.textContent = "✓";

        li.appendChild(input);
        li.appendChild(removeBtn);
        li.appendChild(doneBtn)
        ulList.appendChild(li);

        p.innerHTML = '';


        removeBtn.addEventListener('click', () => {
            ulList.removeChild(li);
        })

        doneBtn.addEventListener('click', () => {
            input.style.textDecoration = 'line-through';
            input.style.textDecorationColor = 'red'
        })

        // if (ulList.innerHTML = '') {
        //     p.innerHTML = '';
        // }
    }
    input.value = '';
});

