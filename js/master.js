//check if there's locale sterage color option
let mainColor = localStorage.getItem('color-option');
if(mainColor!==null){
    document.documentElement.style.setProperty("--main-color", mainColor)
    document.querySelectorAll(".colors-list li").forEach(li =>{
        li.classList.remove("active");
        
        //add class active on element with data-color === locale storage item
        if(li.dataset.color===mainColor){
            li.classList.add('active')
        }
    })
}
//change the color of the page option

//change --main-color 
const colorList = document.querySelectorAll(".colors-list li");
colorList.forEach(li =>{
    li.addEventListener("click", (e)=>{
        //set color on root
        document.documentElement.style.setProperty("--main-color",`${e.target.dataset.color}`);
        for(let i=0 ;i<colorList.length ;i++){
            colorList[i].removeAttribute("class")
        }
        e.target.setAttribute('class','active')
        localStorage.setItem('color-option' , e.target.dataset.color)
    })
})

//switch the color in heading area(links)
let linkList = document.querySelectorAll(".header-area .links li a");
linkList.forEach(li=>{
    li.addEventListener('click',(e)=>{
    linkList.forEach(link=>{
        link.classList.remove("active")
    })
    li.classList.add("active")
}
)});


//######################################################################
//random background


//variable to stored the choose (yes/no)
let backgroundRandom = true;
//here we will check in the value of background random option in local storage
if(localStorage.getItem("background_option") === "false"){
    backgroundRandom = false;
    document.querySelectorAll(".random-backgrounds span").forEach(e =>{
        e.classList.remove("active");
        document.querySelector(".random-backgrounds .No").classList.add("active")
    })
}else{
    document.querySelector(".random-backgrounds .Yes").classList.add("active")
}
//variable to controle the intervale (use in clearInterval)
let backgroundIntervale;
// call the radomizerImges function active the random background
radomizeImges();
//switch color in random baackground sitting
let randomBackground = document.querySelectorAll(".random-backgrounds span");
randomBackground.forEach(e=>{
    e.addEventListener('click',()=>{
    randomBackground.forEach(link=>{
        link.classList.remove("active");
    });
    e.classList.add("active");
    if(e.classList.contains("Yes")){
        backgroundRandom = true;
        radomizeImges();
        localStorage.setItem("background_option",true)
    }
    else{
        backgroundRandom = false;
        clearInterval(backgroundIntervale)
        localStorage.setItem("background_option",false) 
    }
})})


// (yes/no) change the background imge
let landingpage = document.querySelector(".landing-page");
let imgsarray = ["01.jpg","02.jpg","03.jpg"];
landingpage.style.backgroundImage = 'url("imgs/02.jpg")';
//function to randomize imgs
function radomizeImges(){
    if(backgroundRandom===true){
    backgroundIntervale = setInterval(()=>{
    let randomnumber = Math.floor(Math.random() * imgsarray.length);
    landingpage.style.backgroundImage = 'url("imgs/'+ imgsarray[randomnumber]+'")';
},1000)
    }
    else{
        clearInterval(backgroundIntervale)
    }
}


//##############################################################################
//settingbox move
let gearContanier = document.querySelector(".toggle-setting");
let gear =document.querySelector(".fa")
let settingbox = document.querySelector(".setting-box")
gearContanier.addEventListener("click",()=>{
    settingbox.classList.toggle("open")
    gear.classList.toggle("fa-spin")
})