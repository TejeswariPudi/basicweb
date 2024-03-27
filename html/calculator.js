var num1,num2;

function getInputValues()
{


     num1=parseInt(document.getElementById('num1').value);
     num2=parseInt(document.getElementById('num2').value);

}

function add()
{
    getInputValues();
    
    if((num1>=0) && (num2>=0))
    {
        const result=num1+num2;
        document.getElementById('result').value=result;
    } 

}


function sub()
{

   getInputValues();
    if((num1>=0) && (num2>=0))
    {
        const result=num1-num2;
        document.getElementById('result').value=result;
    } 

}

function mul()
{

   getInputValues();
    if((num1>=0) && (num2>=0))
    {
        const result=num1*num2;
        document.getElementById('result').value=result;
    } 

}

function div()
{

   getInputValues();
    if((num1>=0) && (num2>=0))
    {
        const result=num1/num2;
        document.getElementById('result').value=result;
    } 

}
function clearScreen()
{
    document.getElementById("result").value=" ";
}
 
function display(value)
{
    document.getElementById("result").value += value;
}
 
function calculate() 
{
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}