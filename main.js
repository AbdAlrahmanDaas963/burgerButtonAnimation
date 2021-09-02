const icon = document.querySelector(".navbar-toggler");
const bur1 = document.querySelector(".bur1");
const bur2 = document.querySelector(".bur2");
const bur3 = document.querySelector(".bur3");

let flipFlop = true;
icon.onclick = () => {
    if ( flipFlop ) {
        // x
        bur1.style.transform= "translate( -50% , -50% ) rotate(45deg)";
        bur2.style.opacity= "0";
        bur3.style.transform= "translate( -50% , -50% ) rotate(-45deg)";



        flipFlop = false
        console.log(`flipFlop`, flipFlop)
    } else {
        //  =

        bur1.style.transform= "translate( -50% , -12px )  rotate(0deg)";
        bur2.style.transform= "translate( -50% , -50% )  rotate(0deg)";
        bur2.style.opacity= "1";
        bur3.style.transform= "translate( -50% , 10px ) rotate(0deg)";

        flipFlop = true
        console.log(`flipFlop`, flipFlop)

    }
}