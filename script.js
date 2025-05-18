const counters = document.querySelectorAll('conter');
const speed = 200;
 
counters.forEach(counter => {
  const updateCount = () => {
    const target = counter.getAttribute('data-target');

     console.log(target);
  }
  updateCount();
});
let buttons = document.querySelector(".font-btn");
let button = buttons.querySelectorAll(".btn1");

        for(var i = 0; i < button.length; i++){
            button[i].addEventListener('click', function(){
                var current = document.getElementsByClassName('btn-active');
                current[0].className = current[0].className.replace("btn-active", "");
                this.className += " btn-active"
            })
        }