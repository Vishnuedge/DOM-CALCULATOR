//CREATING ELEMENTS


//FIRST DIV OUTPUT :
let c = document.createElement('div');
c.className= "container"
c.id = "container";

document.body.appendChild(c);

let OUTPUT = document.createElement('div');
OUTPUT.className = "output";
let CONTAINER1 = document.getElementById('container');
CONTAINER1.appendChild(OUTPUT);

let SCREEN  = document.createElement('input');
SCREEN.id = "output"
SCREEN.placeholder = "Calculator"
OUTPUT.appendChild(SCREEN);

let BUTTON = document.createElement('div')
BUTTON.className = 'btn'
CONTAINER1.appendChild(BUTTON);


let ROW1 = document.createElement('div')
ROW1.className = "row1";
BUTTON.appendChild(ROW1);

//LIST 1 :
var LIST1 = document.createElement('li');
LIST1.id = "list1";
ROW1.appendChild(LIST1)

var b1 = document.createElement('input');
b1.type = 'button';
b1.value = 'C';
b1.name = "cln";
b1.onclick = clean;
LIST1.appendChild(b1);

//LIST 2 :

var LIST2 = document.createElement('li');
LIST2.id = "list2";
ROW1.appendChild(LIST2)

var b2 = document.createElement('input');
b2.type = 'button';
b2.value = '/';
b2.name = "";
b2.setAttribute("onclick","enter(this.value)");
LIST2.appendChild(b2);

//LIST 3 :

var LIST3 = document.createElement('li');
LIST3.id = "list3";
ROW1.appendChild(LIST3)

var b3 = document.createElement('input');
b3.type = 'button';
b3.value = '*';
b3.name = "";
b3.setAttribute("onclick","enter(this.value)");
LIST3.appendChild(b3);

//ROW 2 :
let ROW2 = document.createElement('div')
ROW2.className = "row2";
BUTTON.appendChild(ROW2);

//LIST 4 : 
var LIST4 = document.createElement('li');
LIST4.id = "list4";
ROW2.appendChild(LIST4)

var b4 = document.createElement('input');
b4.type = 'button';
b4.value = '7';
b4.name = "";
b4.setAttribute("onclick","enter(this.value)");
LIST4.appendChild(b4);

//LIST 5 :

var LIST5 = document.createElement('li');
LIST5.id = "list5";
ROW2.appendChild(LIST5)

var b5 = document.createElement('input');
b5.type = 'button';
b5.value = '8';
b5.name = "";
b5.setAttribute("onclick","enter(this.value)");
LIST5.appendChild(b5);

//LIST 6 : 

var LIST6 = document.createElement('li');
LIST6.id = "list6";
ROW2.appendChild(LIST6)

var b6 = document.createElement('input');
b6.type = 'button';
b6.value = '9';
b6.name = "";
b6.setAttribute("onclick","enter(this.value)");
LIST6.appendChild(b6);

 //LIST 7 : 

 var LIST7 = document.createElement('li');
 LIST7.id = "list7";
 ROW2.appendChild(LIST7)
 
 var b7 = document.createElement('input');
 b7.type = 'button';
 b7.value = '-';
 b7.name = "";
 b7.setAttribute("onclick","enter(this.value)");
 LIST7.appendChild(b7);

//ROW 3 :

let ROW3 = document.createElement('div')
ROW3.className = "row3";
BUTTON.appendChild(ROW3);

//LIST 8:

var LIST8 = document.createElement('li');
LIST8.id = "list7";
ROW3.appendChild(LIST8)

var b8 = document.createElement('input');
b8.type = 'button';
b8.value = '4';
b8.name = "";
b8.setAttribute("onclick","enter(this.value)");
LIST8.appendChild(b8);


//LIST 9:

var LIST9 = document.createElement('li');
LIST9.id = "list9";
ROW3.appendChild(LIST9)

var b9 = document.createElement('input');
b9.type = 'button';
b9.value = '5';
b9.name = "";
b9.setAttribute("onclick","enter(this.value)");
LIST9.appendChild(b9);

//LIST 10:

var LIST10 = document.createElement('li');
LIST10.id = "list10";
ROW3.appendChild(LIST10)

var b10 = document.createElement('input');
b10.type = 'button';
b10.value = '6';
b10.name = "";
b10.setAttribute("onclick","enter(this.value)");
LIST10.appendChild(b10);

//LIST 11 :

var LIST11 = document.createElement('li');
LIST11.id = "list11";
ROW3.appendChild(LIST11)

var b11 = document.createElement('input');
b11.type = 'button';
b11.value = '+';
b11.name = "add";
b11.setAttribute("onclick","enter(this.value)");
LIST11.appendChild(b11);


//ROW 4 :

let ROW4 = document.createElement('div')
ROW4.className = "row4";
BUTTON.appendChild(ROW4);

//LIST 12 :

var LIST12 = document.createElement('li');
LIST12.id = "list12";
ROW4.appendChild(LIST12)

var b12 = document.createElement('input');
b12.type = 'button';
b12.value = '1';
b12.name = "";
b12.setAttribute("onclick","enter(this.value)");
LIST12.appendChild(b12);

//LIST 13 :

var LIST13 = document.createElement('li');
LIST13.id = "list13";
ROW4.appendChild(LIST13)

var b13 = document.createElement('input');
b13.type = 'button';
b13.value = '2';
b13.name = "";
b13.setAttribute("onclick","enter(this.value)");
LIST13.appendChild(b13);


//LIST 14 :

var LIST14 = document.createElement('li');
LIST14.id = "list14";
ROW4.appendChild(LIST14)

var b14 = document.createElement('input');
b14.type = 'button';
b14.value = '3';
b14.name = "";
b14.setAttribute("onclick","enter(this.value)");
LIST14.appendChild(b14);

//ROW 5 :

let ROW5 = document.createElement('div')
ROW5.className = "row5";
BUTTON.appendChild(ROW5);

//LIST 15:

var LIST15 = document.createElement('li');
LIST15.id = "list15";
ROW5.appendChild(LIST15)

var b15 = document.createElement('input');
b15.type = 'button';
b15.value = '0';
b15.name = "zero";
b15.setAttribute("onclick","enter(this.value)");
LIST15.appendChild(b15)

//LIST 16:

var LIST16 = document.createElement('li');
LIST16.id = "list16";
ROW5.appendChild(LIST16)

var b16 = document.createElement('input');
b16.type = 'button';
b16.value = '00';
b16.name = "";
b16.setAttribute("onclick","enter(this.value)");
LIST16.appendChild(b16);

//LIST 17:


var LIST17 = document.createElement('li');
LIST17.id = "list17";
ROW5.appendChild(LIST17)

var b17 = document.createElement('input');
b17.type = 'button';
b17.value = '.';
b17.setAttribute("onclick","enter(this.value)")


LIST17.appendChild(b17);

//LIST 18:


var LIST18 = document.createElement('li');
LIST18.id = "list18";
ROW5.appendChild(LIST18)

var b18 = document.createElement('input');
b18.type = 'button';
b18.value = '=';
b18.name = "";

b18.onclick = calculate;
LIST18.appendChild(b18);


document.body.appendChild(CONTAINER1);



//Enter Value inside inputfields

function enter(inputs){
    document.getElementById('output').value+=inputs;
}

//Clear the inputField

function clean(){
    document.getElementById('output').value = "";
}

//Calculate

function calculate()

{
    var output = document.getElementById('output').value;   
    var result = eval(output);
    document.getElementById('output').value = result;


}