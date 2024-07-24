var istatus = document.querySelector("h5")

var btn = document.querySelector("#add")
    var check = 0

  btn.addEventListener("click", function(){
    if ( check == 0){
    istatus.innerHTML = "Friends"
    istatus.style.color =  "green"
    btn.innerHTML = "Remove Friend"
    btn.style.color = "black"
    btn.style.background = "grey"
   check = 1 
    }
      else{
        check =1 
        istatus.innerHTML = "Stranger"
        istatus.style.color =  "red"
        btn.style.color = " white"
    btn.style.background = " cornflowerblue"
        check = 0
      }
     
})

 

