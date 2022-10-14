const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', function() {
    let myStr = "  ";

    if (myStr.trim().length === 0) {
    console.log("This is an empty string!");
    } else{
    const li = document.createElement('li');
    const litext = document.createElement('span');
    const btn = document.createElement('button');
    
    li.appendChild(litext);
    li.textContent = myStr;
    btn.textContent = 'X';
    li.appendChild(btn);
    list.appendChild(li);

    input.value = "";

    btn.addEventListener('click', function() {
        list.removeChild(li);
    })
    }
    input.focus();
})   