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

function render() {

    //attack
    const apText = document.getElementById('ap-text');
    const attackProgress = document.getElementById('ap-meter');
    apText.textContent = attackPoint > 0? attackPoint : 0;
    attackProgress.value = attackPoint > 0? attackPoint : 0;

    //enemy
    const hpText = document.getElementById('hp-text');
    const hpMeter = document.getElementById('hp-meter');
    hpText.textContent = fungusHP > 0? fungusHP : 0;
    hpMeter.value = fungusHP > 0? fungusHP : 0;



    
}
function calcAttackPoint(event) {
    // console.log(event.target);
    if(event.target.classList[1] === 'arcane-scepter'){
        attackPoint -= 12;
        fungusHP -= 14;
        render();

    }
    else if(event.target.classList[1] === 'entangle'){
        attackPoint -= 23;
        fungusHP -= 9;
        render();

    }
    else if(event.target.classList[1] === 'dragon-blade'){
        attackPoint -= 38;
        fungusHP -= 47;
        render();

    }
    else if(event.target.classList[1] === 'star-fire'){
        attackPoint -= 33;
        fungusHP -= 25;
        render();

    }
    // console.log(attackPoint, fungusHP);
}


onReady()