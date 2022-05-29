let HEXnumbers = ["1","2","3","4","5","6","7","8","9","0","A","B","C","D","E","F"];

function setstyle(){
    let body = document.getElementsByTagName("body")[0];
    const text = document.getElementById("colorname");
    let firstpart = HEXnumbers[Math.floor(Math.random()*HEXnumbers.length)];
    let secondpart = HEXnumbers[Math.floor(Math.random()*HEXnumbers.length)];
    let thirdpart = HEXnumbers[Math.floor(Math.random()*HEXnumbers.length)];
    let firstcolor = firstpart+secondpart+thirdpart;

    let firstp = HEXnumbers[Math.floor(Math.random()*HEXnumbers.length)];
    let secondp = HEXnumbers[Math.floor(Math.random()*HEXnumbers.length)];
    let thirdp = HEXnumbers[Math.floor(Math.random()*HEXnumbers.length)];
    let scondcolor = firstp+secondp+thirdp;
    
    body.style.backgroundImage = `linear-gradient(to right,#${firstcolor},#${scondcolor})`;
    text.innerText = `linear-gradient(to right,#${firstcolor},#${scondcolor})`;
}