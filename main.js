const form  = document.getElementById('addForm');
const itemlist = document.getElementById('items');
const filter = document.getElementById('filter');
const runEvent = document.querySelector('body');

//Form submit event
form.addEventListener('submit', (e) => { 
    e.preventDefault();
    //get input value
    const newItem = document.getElementById('item').value;
    //create new li element
    const li = document.createElement('li');
    li.className = 'list-group-item';
    //add Textnode with inputvalue
    li.appendChild(document.createTextNode(newItem));
    
    //delete button

    const deleteBtn = document.createElement('button');
    //add classes to delete button
    deleteBtn.className="btn btn-danger btn-sm float-right delete";
    //append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    li.appendChild(deleteBtn);
    itemlist.appendChild(li);

    });
itemlist.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            const li = e.target.parentElement;
            itemlist.removeChild(li);

        }    
    }
})

filter.addEventListener('keyup', (e) => {
    // convert text to lowercase
    const text = e.target.value.toLowerCase();
    // Get lis
    const items = itemlist.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach((item) => {
      const itemName = item.firstChild.textContent;
      if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
})
