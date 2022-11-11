console.log("Hello World");

const a = 10;
const b = 12;

if (a > b) console.log(a + "is greater than" + b);
else console.log(b + "is greater than" + a);

const n = 10;

for(let i = 0;i < n; i++)
{
    console.log(i);
}

try {
    const x = a / 0;
    console.log(x);
}catch(e){
    console.log(e);
}
