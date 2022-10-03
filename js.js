let imglist = document.querySelectorAll(".imglist");
let itemBox = document.querySelectorAll(".itemBox");

for(let i = 0; i<imglist.length ; i++){
    imglist[i].addEventListener('click', function(){
        for(let j = 0; j<imglist.length; j++){
            imglist[j].classList.remove("active");
        }

        this.classList.add('active');

        let dataFilter = this.getAttribute("data-filter");

        for(let k = 0; k<itemBox.length; k++){
            itemBox[k].classList.remove("active");
            itemBox[k].classList.add("hide");

            if(itemBox[k].getAttribute("data-item") == dataFilter || dataFilter == "all"){
                itemBox[k].classList.remove('hide');
                itemBox[k].classList.add('active');
            }
        }
    })
}