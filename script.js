const projectState = document.querySelector(".pass")

document.addEventListener('visibilitychange', () =>{
    if(document.visibilityState === "visible"){
        document.title = "Active Tab"
    }else{
        document.title = "InActive Tab"
    }

    projectState.innerHTML = "(Faild)";
    projectState.classList.add('faild')
})