var num=0; 
function countup(){
    num++;
    document.getElementById("display").innerHTML=num;
    
}

document.querySelector('#btn1').onclick = () => {
    countup();

};


