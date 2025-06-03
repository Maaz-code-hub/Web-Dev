let r=Math.random()

//Generating first name(adjective)
if (r>0 && r<=0.33){
    first="Crazy"
} 
else if (r>0 && r<=0.66){
    first="Amazing"
} 
else if (r>0.66 && r<=1){
    first="Fire"
} 

//Generating second name(shop name)
r=Math.random()
if (r>0 && r<=0.33){
    second="Engine"
} 
else if (r>0 && r<=0.66){
    second="Foods"
} 
else if (r>0.66 && r<=1){
    second="Garments"
} 

//Generating first name(adjective)
r=Math.random()
if (r>0 && r<=0.33){
    third="bros"
} 
else if (r>0 && r<=0.66){
    third="limited"
} 
else if (r>0.66 && r<=1){
    third="hub"
} 

console.log(`${first} ${second} ${third}`)