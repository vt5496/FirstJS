let user;
loadUser().then(users=>{
        user=users;
    console.log(user);
});

const onClickHanlder=(event)=> {
    $(`#${event.target.getAttribute('current_id')}>.card-main`).toggleClass('card-main-move');
    $(`#${event.target.getAttribute('current_id')}>.card-info`).toggleClass('card-info-move');
};

for (let card of $('.card-main')) {
    card.onclick =onClickHanlder
}

async function loadUser() {
    const response = await fetch('../../script/user.json');
    const users = await response.json();
   const userCard=users.map((user,index)=>{
       return createUserCard(user,index)
   });
    return users;
}


function createUserCard(user,index) {
    const card=document.createElement('div');
    card.current_id=index;


    return card;
}



