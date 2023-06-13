// gnb - subMunu

window.addEventListener('load',()=>{

    let gnbTitle = document.querySelectorAll(".gnb>ul>li>a");
let subNavLists = document.querySelectorAll(".sub_nav_lists");
let sub_nav_wrap = document.querySelector(".sub_nav_wrap");

for(let i=0; i<gnbTitle.length; i++){
    gnbTitle[i].addEventListener("mouseover",e=>{
        for(let j=0; j<subNavLists.length; j++){
            subNavLists[j].classList.remove("show");  
            gnbTitle[j].classList.remove("mouseover");
        }
        gnbTitle[i].classList.add("mouseover");
        subNavLists[i].classList.add("show");
        sub_nav_wrap.style.padding = "0px 0px 30px 0px";
    })
}

for(let k=0; k<subNavLists.length; k++){
    subNavLists[k].addEventListener("mouseover",e=>{
        subNavLists[k].classList.add("show");
        gnbTitle[k].classList.add("mouseover");
        sub_nav_wrap.style.padding = "0px 0px 30px 0px";
    })
}

for(let k=0; k<subNavLists.length; k++){
    subNavLists[k].addEventListener("mouseout",e=>{
        subNavLists[k].classList.remove("show");
        sub_nav_wrap.style.padding = "0px";
        gnbTitle[k].classList.remove("mouseover");
    })
}
})


// section 트랜지션
let content1_inner = document.querySelector(".content1_inner");
window.addEventListener("scroll",(e)=>{
    let scroll = this.scrollY
    console.log(scroll)
    if(scroll >= 200){
        content1_inner.classList.add("section_show");
    }else{
        content1_inner.classList.remove("section_show");
    }
})