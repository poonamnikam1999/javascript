// ----------looping /iteration------------

// for -------------

for(a=10; a<=20; a=a*2)
{
 
    console.log("sam" +a)
}


for(b=10; b>=0; b-=2)
{
 
    console.log("sai" +b)
}

// while--------------------

c=10;

while(c<=20)
{
    console.log("value of c is" +c);

    c+=2;
}

// do while-----------------

d=30;
do
{

    console.log("d="+d);
    d+=4;
}
while(d<=50);

// simple function--------------

function add(){

    let sum1=30;
    let sum2=60;
    let sum3=5;
    let value=sum1+sum2*5;
    console.log(value);
}
add();

// parametrized function------------------

function addition(a,b,c)
{
    d=a+b*c;
    console.log(d)

}
addition(12,24,3);