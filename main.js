
  "use strict"
const time = document.querySelector(".time")
const toggle = document.querySelector("#switch")
toggle.addEventListener("change", function(){
    if (toggle.checked) {
   time.innerHTML = `<span class="time">/year</span>`
    }
 
    else {
        time.innerHTML = `<span class="time">/month</span>`
    }
})