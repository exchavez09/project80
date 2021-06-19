function getParagraph1()
{
    var input =[];
    for (var j = 1; j <= 6; j++)
{
input.push(document.getElementById("Input_Box_1_para_"+j).value);
}
document.getElementById("showParagraph1").innerHTML = input.join(". ");
}