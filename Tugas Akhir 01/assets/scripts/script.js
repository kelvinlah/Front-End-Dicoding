let button = document.querySelector(".js");

let hiddens = document.querySelectorAll(".hidden");

let x = 0;

button.addEventListener('click', function(event) {
    x++;
    if(x === 1){
        for(const hidden of hiddens){
            hidden.setAttribute("class", "flex-container center");
        }
        button.innerHTML = 'View Less';
    }else{
        x = 0;
        for(const hidden of hiddens){
            hidden.setAttribute("class", "hidden flex-container center");
        }
        button.innerHTML = 'View More';
    }
});
