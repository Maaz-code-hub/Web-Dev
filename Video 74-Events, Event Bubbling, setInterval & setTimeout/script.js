let button=document.getElementById("btn")

// https://developer.mozilla.org/en-US/docs/Web/API/Element          #mouse_events
button.addEventListener("dblclick",()=>{
    // alert("I was clicked")
    document.querySelector(".box").innerHTML="<b>Hey you were clicked</b> Enjoy it!!"
    // document.querySelector(".box").innerText="Hey you were clicked Enjoy it!!"

})


button.addEventListener("contextmenu",()=>{            //When right clicked
    alert("Right clicked")
})

document.addEventListener("keydown",(e)=>{            //When keyboard keys are pressed
    console.log(e,e.key,e.keyCode)
})