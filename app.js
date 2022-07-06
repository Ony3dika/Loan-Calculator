 let loan_amt=document.getElementById("loan-amt")

 let interest=document.getElementById("int")

 let years=document.getElementById("yeartp")

 let btn=document.querySelector(".calc")

 let mnt_pay=document.querySelector(".mp")

 let tot_pay=document.querySelector(".tp")

 let tot_int=document.querySelector(".ti")

 let display=document.querySelector(".viz")

 let load=document.querySelector(".loading")

 let red=document.querySelector("#try")

 let lad =document.querySelectorAll(".lad")

 red.style.display="none"

 display.style.display="none"

btn.addEventListener("click", math)

function math(e){

    //Loading Icon

    load.style.display="block"

    let spin=function(){
        load.style.display="none"
    }

    setTimeout(spin,2000);


    //Red Warning

    if(loan_amt.value < 1){

        let raid=function(){
            red.style.display="block"
        }
        setTimeout(raid,2200)

        let fade= function(){
            red.style.display="none";
        }
        setTimeout(fade,3800);
    }

    else{

        let si=((loan_amt.value*interest.value*years.value)/100)

        tot_pay.textContent= (Number(loan_amt.value) + Number(si))
    
        mnt_pay.textContent=((tot_pay.textContent/years.value)/12).toFixed(2)
        
        tot_int.textContent=si
    
        display.style.display="block"
    }

}



