//CALCULATOR
    function calculate(t) {

    var x = parseFloat(document.getElementById("numOne").value);
    var y = parseFloat(document.getElementById("numTwo").value);
    var res;
    switch(t)
    {case 1: res = x + y;
        
    break;
    case 2 : res = x - y;
    break; 
    case 3: res = x * y;
    break;
    case 4: res = x / y;
    break;
    default: 
    break;
    }
    alert(res);
    }

//PALINDROME
function pallindrome() {
    
    //programe to check pallindrome 
        
        var x = document.getElementById("field").value;
        var y = x.split("").reverse().join("");
    
    if(x === y) {
        
        alert("Yes, it is a PALLINDROME");
    } 
    else
       {
    
    alert("No, Not a PALLINDROME");
   
    }
}

//Compare Date
function compare() {
    var x = document.getElementById("dateOne").value;
    var y = document.getElementById("dateTwo").value;
    if (x === y) {
        alert("dates are equal");
    } 
    else {
        alert("no,dates are not equal");
    }
}

//PRIME 
function prime() {
    var x = parseFloat(document.getElementById("prime").value);
    var j=1;
    var i;
    for (i=1;i<=x;i++)
    {
        j = j*i;
    }
    alert(j);
}

//FOO BAR
function checkit() {
    document.getElementById("resultHere").innerHTML = "";
    var x = parseFloat(document.getElementById("numThree").value);
    var y = parseFloat(document.getElementById("numFour").value);
    if (x < y) {
        var z = document.createElement("div");
        var t;
        var i;
        for(i=x;i<=y;i++)
        { 
            if (i % 15 == 0) {
                t = document.createTextNode(i + " is FOOBAR.");
                z.appendChild(t);
                document.getElementById("resultHere").appendChild(z);
            } else  if (i % 3 == 0) {
                t = document.createTextNode(i + " is FOO.");
                z.appendChild(t);
                document.getElementById("resultHere").appendChild(z);
        } else  if (i % 5 == 0 ) {
                t = document.createTextNode(i + " is BAR.");
                z.appendChild(t);
                document.getElementById("resultHere").appendChild(z);
            }
        }
    } 
    else {
        alert("Rnge is not correct");
    }
}

//PRIME 
function primeCheck() {
    //programe to check a prime no.
    var num = parseFloat(document.getElementById("number").value);
    var sqnum = Math.sqrt(num);
    var i;
    var isPrime = true ;
    for (i=2;i<=sqnum;i++)
    {
        if (num%i == 0)
        {
            isPrime = false;
            break;
        }
    }
    
    if (isPrime == true) {
        alert("Yes,it is a prime number");
    }
    else{
        alert("No, not a prime number");
    }
    
}

//No of Words
function strCheck() {
    var string = document.getElementById("str").value;
    var strMod = string.replace(/ {1,}/g, " ");
    var wordCount = strMod.split(" ").length;
    alert(wordCount);
}
