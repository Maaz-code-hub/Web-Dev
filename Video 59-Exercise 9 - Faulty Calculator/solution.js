r=Math.random()*100
a=Number(prompt("Enter the First number:"))
op=prompt("Enter the operator")
b=Number(prompt("Enter the Second number:"))
console.log(r)

if(r<10){
    if(op="+"){
        console.log(a-b)
    }
    else if(op="*"){
        console.log(a+b)
    }
    else if(op="-"){
        console.log(a/b)
    }
    else if(op="/"){
        console.log(a**b)
    }
}

else{
    if(op="+"){
        console.log(a+b)
    }
    else if(op="*"){
        console.log(a*b)
    }
    else if(op="-"){
        console.log(a-b)
    }
    else if(op="/"){
        console.log(a/b)
    }
}