document.querySelector('textarea').addEventListener("input",()=>{
    const inputLength=document.querySelector('textarea').value.length;
    const remain = 200- inputLength;
    if(remain<=0){
        document.querySelector('textarea').value=
         document.querySelector('textarea').value.slice(0,200);
        document.getElementById('remain').innerText=0;
    }
    else document.getElementById('remain').innerText= remain;
});