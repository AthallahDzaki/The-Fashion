let solve = (Math.floor(Math.random() * 1000) + 1).toString() + " + " + (Math.floor(Math.random() * 1000) + 1).toString();

$(document).ready(function() {
    $(".human").text(solve);
})

$("#contact").submit(function(e) {
    e.preventDefault();
    CheckEasterEgg();
    if($("#human").val() == parseInt(solve.split(" + ")[0]) + parseInt(solve.split(" + ")[1]))
    {
        alert("Thanks For Your Feed Back");
    }
})