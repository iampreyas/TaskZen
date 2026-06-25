function addTask()
{
    let text=document.getElementById('task-input').value.trim();
    if(text=="")
    {
        return alert("please enter task");
    }
    let card=document.createElement('div');
    card.innerText=text;
    card.classList.add('task-card');
    document.getElementById('todo-list').appendChild(card);
    document.getElementById('task-input').value="";
}