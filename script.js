let x = "img/X.jpg";
let o = "img/O.jpg";
let mx = [];
let mo = [];
document.addEventListener("click", function(e) {
    let child = e.target.querySelector('#child');
    if (e.target.classList.contains('XO_Child') === true) {
        if (e.target.contains(child) === false){
            e.target.insertAdjacentHTML('afterbegin', '<img src="'+x+'" alt="" class="img_flex" id="child">');
            child = e.target.querySelector('#child');
            mx.push(e.target.id);

            let ran = [];
            for (let i = 0; i < 9; i++) {
                let elem = document.getElementById(i);
                if (elem.children.length == 0) {
                    ran.push(i);
                }
            }

            let a = ran[Math.floor(Math.random() * ran.length)];
            if (a != undefined) {
            document.getElementById(a).insertAdjacentHTML('afterbegin', '<img src="'+o+'" alt="" class="img_flex" id="child">');
            mo.push(a);
            }
         }
         
    }
if (mx.includes('0') && mx.includes('1') && mx.includes('2') ||
    mx.includes('3') && mx.includes('4') && mx.includes('5') ||
    mx.includes('6') && mx.includes('7') && mx.includes('8') ||
    mx.includes('0') && mx.includes('3') && mx.includes('6') ||
    mx.includes('1') && mx.includes('4') && mx.includes('7') ||
    mx.includes('2') && mx.includes('5') && mx.includes('8') ||
    mx.includes('0') && mx.includes('4') && mx.includes('8') ||
    mx.includes('2') && mx.includes('4') && mx.includes('6')) {
    alert('x WIN');
}
if (mo.includes(0) && mo.includes(1) && mo.includes(2) ||
    mo.includes(3) && mo.includes(4) && mo.includes(5) ||
    mo.includes(6) && mo.includes(7) && mo.includes(8) ||
    mo.includes(0) && mo.includes(3) && mo.includes(6) ||
    mo.includes(1) && mo.includes(4) && mo.includes(7) ||
    mo.includes(2) && mo.includes(5) && mo.includes(8) ||
    mo.includes(0) && mo.includes(4) && mo.includes(8) ||
    mo.includes(2) && mo.includes(4) && mo.includes(6)) {
    alert('o WIN');
}
});

document.querySelector("#button").onclick = function(){
mx = [];
mo = [];
    for (let i = 0; i < 9; i++) {
        var node = document.getElementById("child");
        if (node.parentNode) {
            node.parentNode.removeChild(node);
          }
        }

};
