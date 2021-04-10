
if(document.getElementById('submit')){
document.getElementById('submit').addEventListener('click',async(e)=>{
    e.preventDefault();
    console.log('work')
    contact={};
    contact.name=document.getElementById('name').value;
    contact.email=document.getElementById('email').value;
    contact.subject=document.getElementById('subject').value;
    contact.message=document.getElementById('message').value;
    console.log(contact)
    const response = await fetch('/sendMail', {
        method: 'POST',
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body:JSON.stringify(contact)
    })
    console.log(response)
})
}