function addTask()
{
    let text=document.getElementById('task-input').value.trim();
    if(text=="")
    {
        return alert("please enter task");
    }
    let card=document.createElement('div');
    card.classList.add('task-card');
    card.innerHTML=text + '<button class="del-btn">X</button>';
    card.onclick=function()
    {
        if(card.parentElement.id=='todo-list')
        {
            document.getElementById('in-progress-list').appendChild(card);
        }
        else if(card.parentElement.id=='in-progress-list')
        {
            document.getElementById('done-list').appendChild(card);
        }
    }
    card.querySelector('.del-btn').onclick=function()
    {
        card.remove();
    }
    document.getElementById('todo-list').appendChild(card);
    document.getElementById('task-input').value="";
}