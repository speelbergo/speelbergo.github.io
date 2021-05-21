const fav = document.querySelector('#fav');
const button = document.querySelector('button');    
const output = document.querySelector('.list');


button.addEventListener('click', () => {
    if (fav.value != '') {
        let li = document.createElement('li');
        let deletebutton = document.createElement
        ('button');
        li.textContent = fav.value;
        deletebutton.textContent = '❌';
        li.append(deletebutton);
        output.append(li);
        deletebutton.addEventListener('click', function()
        {
            output.removeChild(li);
            fav.focus;
        });
        fav.value = '';
        fav.focus;
    }

} )



const list = document.querySelector("#ul");

//add event listener with querySelector for clicking add chapter button
//In the even listener you add the value of the input into a new li
//Then append the li to list

const li = document.createElement('li');
li.innerHTML = "Something"; //<li>Something</li>

list.appendChild(li)

button.addEventListener('click',() => {
    //Get the input value and append the new child
})