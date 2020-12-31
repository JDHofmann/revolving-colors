let background = document.querySelector('.container');

const colors = [ '#ffcc00','#00DEFF','#FFCB77','#FF6687'];

background.style.backgroundColor = colors[0];

let i = 1;

function changeColors(){
    background.style.backgroundColor = colors[i];
    i++;
    if( i === colors.length){
        i = 0;
    }
    return i;
}
setInterval(() => {
    changeColors()
}, 30000);