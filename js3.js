
dzien=Number(prompt("Jaki jest dzisiaj dzień tygodnia ?(liczba od 1-7)",));
if(dzien>=1&&dzien<=5){
    alert("Dzień roboczy");
}
else if(dzien>5&&dzien<8){
    alert("Weekend");
}
else{
    alert("nie ma takiej opcji!");
}