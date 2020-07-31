const bulb = document.querySelector("#bulb");

bulb.addEventListener("click", (event) => {
  event.preventDefault();
    let target = event.target;

    if(target.classList.contains("bulb-off")){
        // alert("OFF");
        target.classList.toggle("bulb-off");
        target.classList.toggle("bulb-on");
    }else if (target.classList.contains("bulb-on")){
        // alert("ON");
        target.classList.toggle("bulb-on");
        target.classList.toggle("bulb-off");
    }
  console.log(event.target)
});
