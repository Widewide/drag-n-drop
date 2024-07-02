let lists=document.querySelectorAll(".box");
let rightBox=document.querySelector(".right");
let leftBox=document.querySelector(".left");

for(lis of lists){
    lis.addEventListener("dragstart",function(e){
        let selected=e.target;
        console.log(e.target);
        rightBox.addEventListener("dragover",function(e){
            e.preventDefault();
        });

        rightBox.addEventListener("drop",function(e){
            rightBox.appendChild(selected);
            selected=null;
        })

        leftBox.addEventListener("dragover",function(e){
            e.preventDefault();
        });

        leftBox.addEventListener("drop",function(e){
            leftBox.appendChild(selected);
            selected=null;
        })
    });
}