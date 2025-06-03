function nice(name) {
    console.log("Hey " +name+" U are nice")
    console.log("Hey " +name+" U are Good")
    console.log("Hey " +name+" U are T-shirt is nice")
    console.log("Hey " +name+" Ur cource is good to")
    
}

function sum(a,b,c=3) {     //c=3 if c is not passed..If passed c will be the passed value
    // console.log(a+b)
    return a+b+c
    
}

result1=sum(3,5)           //c will ba taken as 3
result2=sum(13,14)         //c will ba taken as 3
result3=sum(37,51,4)       //c will ba taken as 4
console.log("The sum of these number is : ",result1)
console.log("The sum of these number is : ",result2)
console.log("The sum of these number is : ",result3)

// nice("rohan")
// nice("shivam")


const func1=(x)=>{
    console.log("I am a arrow function",x)
}
func1(34);
func1(66);
func1(84);