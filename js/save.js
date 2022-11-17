const saveButton = document.querySelector('#save');
const saveBlock = document.querySelector('#save-block');
const sendButton = document.querySelector('#send'); 

saveButton.addEventListener('click', ()=>{
    saveBlock.style.visibility = 'visible';  
})
sendButton.addEventListener('click', ()=>{
    const saveId = document.querySelector('#saveId').value; 
    localStorage.setItem('info',saveId);
    saveBlock.style.visibility = 'hidden' ;
})
