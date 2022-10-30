var d1=document.createElement("div");
d1.classList.add("container");
d1.classList.add("calcula");
var d2= document.createElement("div");
d2.classList.add("container-fluid");
d2.classList.add("cal");
d1.appendChild(d2);
var card1=document.createElement("div");
card1.classList.add("card");
card1.classList.add("card-w")
var card_header=document.createElement("div");
card_header.classList.add("card-header");
var h_1=document.createElement("h1");
h_1.id="title";
h_1.innerHTML="Calculator";
var p=document.createElement("p")
p.id="description";
p.innerHTML="A small calculation to Perform";
card_header.appendChild(h_1);
card_header.appendChild(p);
card1.appendChild(card_header);
var card_body=document.createElement("div");
card_body.classList.add("card-body");
card1.appendChild(card_body);
var result=document.createElement("div");
var h1=document.createElement("h1");
h1.classList.add("h1-d");
var inp=document.createElement("input");
inp.classList.add("form-control");
inp.classList.add("lg");
inp.id="result";
h1.appendChild(inp)
result.appendChild(h1);
result.classList.add("hi");
result.classList.add("res");
var key_row_1=document.createElement("div");
key_row_1.classList.add("row");
key_row_1.classList.add("m-0");
var key1=document.createElement("button");
key1.classList.add("col-3");
key1.classList.add("btn-b");
key1.classList.add("btn");
key1.innerHTML="%";
key1.setAttribute("onclick","cl(this)");
var key2=document.createElement("button");
key2.classList.add("btn");
key2.classList.add("btn-b");
key2.classList.add("col-3");
key2.innerHTML="(";
key2.setAttribute("onclick","cl(this)");
var key3=document.createElement("button");
key3.classList.add("btn");
key3.classList.add("col-3")
key3.classList.add("btn-b");
key3.innerHTML=")";
key3.setAttribute("onclick","cl(this)");
var key4=document.createElement("button");
key4.classList.add("btn");
key4.classList.add("btn-b");
key4.classList.add("col-3");
key4.id="clear"
key4.innerHTML="CLR";
key4.setAttribute("onclick","clr(this)");
key_row_1.appendChild(key1);
key_row_1.appendChild(key2);
key_row_1.appendChild(key3);
key_row_1.appendChild(key4);
var key_row_2=document.createElement("div");
key_row_2.classList.add("row");
key_row_2.classList.add("m-0");
var key1=document.createElement("button");
key1.classList.add("col-3");
key1.classList.add("btn-b");
key1.classList.add("btn");
key1.innerHTML="1";
key1.id="1";
key1.setAttribute("onclick","cl(this)");
var key2=document.createElement("button");
key2.classList.add("btn");
key2.classList.add("btn-b");
key2.classList.add("col-3");
key2.innerHTML="2";
key2.id="2";
key2.setAttribute("onclick","cl(this)");
var key3=document.createElement("button");
key3.classList.add("btn");
key3.classList.add("col-3")
key3.classList.add("btn-b");
key3.innerHTML="3";
key3.id="3";
key3.setAttribute("onclick","cl(this)");
var key4=document.createElement("button");
key4.classList.add("btn");
key4.classList.add("btn-b");
key4.classList.add("col-3");
key4.innerHTML="+";
key4.id="add";
key4.setAttribute("onclick","cl(this);");
key_row_2.appendChild(key1);
key_row_2.appendChild(key2);
key_row_2.appendChild(key3);
key_row_2.appendChild(key4);
var key_row_3=document.createElement("div");
key_row_3.classList.add("row");
key_row_3.classList.add("m-0");
var key1=document.createElement("button");
key1.classList.add("col-3");
key1.classList.add("btn-b");
key1.classList.add("btn");
key1.innerHTML="4";
key1.id="4";
key1.setAttribute("onclick","cl(this)");
var key2=document.createElement("button");
key2.classList.add("btn");
key2.classList.add("btn-b");
key2.classList.add("col-3");
key2.innerHTML="5";
key2.id="5";
key2.setAttribute("onclick","cl(this)");
var key3=document.createElement("button");
key3.classList.add("btn");
key3.classList.add("col-3")
key3.classList.add("btn-b");
key3.innerHTML="6";
key3.id="6";
key3.setAttribute("onclick","cl(this)");
var key4=document.createElement("button");
key4.classList.add("btn");
key4.classList.add("btn-b");
key4.classList.add("col-3");
key4.innerHTML="-";
key4.id="subtract";
key4.setAttribute("onclick","cl(this)");
key_row_3.appendChild(key1);
key_row_3.appendChild(key2);
key_row_3.appendChild(key3);
key_row_3.appendChild(key4);
var key_row_4=document.createElement("div");
key_row_4.classList.add("row");
key_row_4.classList.add("m-0");
var key1=document.createElement("button");
key1.classList.add("col-3");
key1.classList.add("btn-b");
key1.classList.add("btn");
key1.innerHTML="7";
key1.id="7";
key1.setAttribute("onclick","cl(this)");
var key2=document.createElement("button");
key2.classList.add("btn");
key2.classList.add("btn-b");
key2.classList.add("col-3");
key2.innerHTML="8";
key2.id="8";
key2.setAttribute("onclick","cl(this)");
var key3=document.createElement("button");
key3.classList.add("btn");
key3.classList.add("col-3")
key3.classList.add("btn-b");
key3.innerHTML="9";
key3.id="9";
key3.setAttribute("onclick","cl(this)");
var key4=document.createElement("button");
key4.classList.add("btn");
key4.classList.add("btn-b");
key4.classList.add("col-3");
key4.innerHTML="*";
key4.id="multiple"
key4.setAttribute("onclick","cl(this)");
key_row_4.appendChild(key1);
key_row_4.appendChild(key2);
key_row_4.appendChild(key3);
key_row_4.appendChild(key4);
var key_row_5=document.createElement("div");
key_row_5.classList.add("row");
key_row_5.classList.add("m-0");
var key1=document.createElement("button");
key1.classList.add("col-9");
key1.classList.add("btn-b");
key1.classList.add("btn");
key1.innerHTML="0";
key1.id="0";
key1.setAttribute("onclick","cl(this)");
var key2=document.createElement("button");
key2.classList.add("btn");
key2.classList.add("btn-b");
key2.classList.add("col-3");
key2.innerHTML="=";
key2.id="equal";
key2.setAttribute("onclick","equal(this)");
key_row_5.appendChild(key1);
key_row_5.appendChild(key2);
// key_row_5.appendChild(key3);
// key_row_5.appendChild(key4);
card_body.appendChild(result);
card_body.appendChild(key_row_1);
card_body.appendChild(key_row_2);
card_body.appendChild(key_row_3);
card_body.appendChild(key_row_4);
card_body.appendChild(key_row_5);
d1.appendChild(card1);
document.body.appendChild(d1);

function cl(v){
    // alert(v.innerHTML);
    if(Number(v.innerHTML)){
      var n1=  Number(v.innerHTML);
    }
    else{
        var n1=v.innerHTML;
    }
    document.getElementById("result").value+=n1;
    
}

function clr(){
    document.getElementById("result").value="";
}

function equal(){
    var val= document.getElementById("result").value;
   let y= eval(val);
   document.getElementById("result").value=y;

    
    }
