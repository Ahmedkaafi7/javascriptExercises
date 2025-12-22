const title = document.querySelector('#title');
console.log('title');

const info = document.querySelector('.info'); 

console.log('info');
const changeTextBtn = document.querySelector('#changeTextBtn');
console.log('changeTextBtn');

function changeTitle() {
    title.textContent = 'Dom solution!';
}


function changeElement( ) {
 info.innerHTML =
    "<p> This is the <strong> new info paragraph.</strong>  </p>";
}