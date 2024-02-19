var number = 0;
var random = 0;
function changeNumber(){
    random = Math.ceil(Math.random()*10);
    console.log(random);
    number = random;
    document.querySelector(".bluebox").innerHTML = number;
    const tim = setTimeout(changeNumber, 5000);
};
const myTimeout = setTimeout(changeNumber, 5000);
var clicks = 0;
const clickee = document.getElementById('bluebox');
clickee.addEventListener('click', function() {
    clicks += 1;
    console.log("clicked");
    $("h1").html(clicks);
});
