function c(){
    bok1=document.getElementById("bok1").value;
    bok2=document.getElementById("bok2").value;
    bok3=document.getElementById("bok3").value;
    if(bok1==bok2){
        if(bok2==bok3){
            alert("trójkąt jest równoboczny");
        }
        else{
            alert("trójkąt jest równoramienny");
        }
    }
    else{
        alert("trójkąt nie jest równoramienny i równoboczny");
    }
}