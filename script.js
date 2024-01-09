// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
let fungusHP = 100;
let attackPoint = 100;

function onReady() {
    console.log("Ready to go!");
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!

    let attackBtns = document.getElementsByClassName('attack-btn');
    for (const btn of attackBtns) {
        btn.onclick = calcAttackPoint;
        // console.log(btn.onclick);
    }
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}

function disableButtons(){
    let attackBtns = document.getElementsByClassName('attack-btn');
    // console.log(attackBtns);
    for (const btn of attackBtns) {
        btn.disabled = true;
        console.log(btn);
        // console.log(btn.onclick);
    }
}

function render() {
    const apText = document.getElementById('ap-text');
    const attackProgress = document.getElementById('ap-meter');
    const fungusWalk = document.getElementById('fungus-walk');
    const hpText = document.getElementById('hp-text');
    const hpMeter = document.getElementById('hp-meter');

    //attack
    apText.textContent = attackPoint > 0? attackPoint : 0;
    attackProgress.value = attackPoint > 0? attackPoint : 0;
    // console.log(attackPoint < fungusHP && attackPoint === 0);
    if(attackPoint < fungusHP && attackPoint < 0){
        // console.log(fungusWalk);
        fungusWalk.classList.remove('walk');
        fungusWalk.classList.add('jump');
        disableButtons();
        // console.log(fungusWalk);
    }

    //enemy
    hpText.textContent = fungusHP > 0? fungusHP : 0;
    hpMeter.value = fungusHP > 0? fungusHP : 0;
    if(fungusHP < attackPoint && fungusHP < 0){
        // console.log(fungusWalk);
        fungusWalk.classList.remove('walk');
        fungusWalk.classList.add('dead');
        disableButtons();
        // console.log(fungusWalk);
    }
}
function calcAttackPoint(event) {
    // console.log(event.target);
    if(event.target.classList[1] === 'arcane-scepter'){
        attackPoint -= 12;
        fungusHP -= 14;
    }
    else if(event.target.classList[1] === 'entangle'){
        attackPoint -= 23;
        fungusHP -= 9;

    }
    else if(event.target.classList[1] === 'dragon-blade'){
        attackPoint -= 38;
        fungusHP -= 47;

    }
    else if(event.target.classList[1] === 'star-fire'){
        attackPoint -= 33;
        fungusHP -= 25;

    }
    
    console.log(attackPoint, fungusHP);
    render();
    
}


onReady()