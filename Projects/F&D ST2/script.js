

  
function resizeSh(){
    let inpt = document.getElementById("sz");
    let val = inpt.value;
    let shape = document.getElementById("shape");
    let grid = document.getElementById("grid");
    if(isNaN(parseInt(val)) || parseInt(val)<10000 || parseInt(val)>99999){
        alert("Enter a 5 digit number");
    }
    else{
        let side = 0;

        for(let i=0; i<val.length; ++i){
            side += parseInt(val[i]);
        }
        shape.style.borderRadius = (side/5)+"px";
        shape.style.width=side+"px";
        shape.style.height=side+"px";

        }
    }
