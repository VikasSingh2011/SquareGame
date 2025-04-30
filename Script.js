//box 1
let s1 = document.getElementById("sq1");
// s1.addEventListener("mouseenter",function(){
//     s1.style.backgroundColor="red";//add color when mouseenter
// })
// s1.addEventListener("mouseleave",function(){
//     s1.style.backgroundColor="white";//when leave then move in previous path.
// })
s1.addEventListener("mouseenter",function(){
    let r =Math.floor(Math.random()*100);//This is used to give the random number.
    s1.innerHTML=`<h1>${r}</h1>`;//add random number
    // s1.innerHTML="5";//when we use this small size 5 coming so , we have another way
    //s1.innerHTML="<h1>5</h1>";//by using this when mouseenter then they change the digit of the same size.
})
s1.addEventListener("mouseleave",function(){
    s1.innerHTML=`<h1>1</h1>`;// by using this they move in a previous path.
    //s1.innerHTML="<h1>1</h1>";//by using this when mouseleave then they move in previous path.
});

s1.addEventListener("dblclick",function(){//when we double click then give the random color.
    let r1 =Math.floor(Math.random()*256);
    let r2 =Math.floor(Math.random()*256);
    let r3 =Math.floor(Math.random()*256);
    s1.style.backgroundColor =`rgb(${r1},${r2},${r3})`;//they give random color.
})

//box 2
let s2 = document.getElementById("sq2");
let clr ="red";
s2.addEventListener("mouseenter",function(){
    if(clr=='red'){
        s2.style.backgroundColor="red";//add color when mouseenter
        clr="green";
    }
    else if(clr=="green"){
        s2.style.backgroundColor="green";
        clr="blue";
    }
    else{
        s2.style.backgroundColor="blue"
        clr="red";
    }
    })
    s2.addEventListener("mouseleave",function(){
        s2.style.backgroundColor="white";//when leave then move in previous path.
    })
//box 3
    let s3 = document.getElementById("sq3");
    s3.addEventListener("mouseenter",function(){
        let r1 =Math.floor(Math.random()*256);//they provide the all random color
        let r2 =Math.floor(Math.random()*256);
        let r3 =Math.floor(Math.random()*256);
        
        s3.style.backgroundColor=`rgb(${r1},${r2},${r3})`;
    })
    s3.addEventListener("mouseleave",function(){
        s3.style.backgroundColor="white";//by using this move there in previous condition.
    })

    //box 4
    let s4 = document.getElementById("sq4");
    s4.addEventListener("click",function(){
        let r1 =Math.floor(Math.random()*256);//they provide the all random color
        let r2 =Math.floor(Math.random()*256);
        let r3 =Math.floor(Math.random()*256);
        s1.style.backgroundColor =`rgb(${r1},${r2},255)`;
        s2.style.backgroundColor =`rgb(${r1},255,${r3})`;
        s3.style.backgroundColor =`rgb(255,${r2},${r3})`;
        
        // s4.style.backgroundColor=`rgb(${r1},${r2},${r3})`;
    })
    s4.addEventListener("mouseleave",function(){
        s1.style.backgroundColor="white";//by using this move there in previous condition.
        s2.style.backgroundColor="white";//by using this move there in previous condition.
        s3.style.backgroundColor="white";//by using this move there in previous condition.
    })

    let main = document.getElementById("main");
    let crsr = document.getElementById("cursor");
    main.addEventListener("mousemove",function(details){ //here we give details inside the function.
        console.log(details.x,details.y);// they decide the movement of the cursor    
        crsr.style.left = details.x + "px";
        crsr.style.top = details.y + "px";
    })
