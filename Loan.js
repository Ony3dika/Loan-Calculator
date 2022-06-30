 let loan_amt=document.getElementById("loan-amt")

 let interest=document.getElementById
 ("int")

 let years=document.getElementById("yeartp")

 let btn=document.querySelector(".calc")

 let mnt_pay=document.querySelector(".mp")

 let tot_pay=document.querySelector(".tp")

 let tot_int=document.querySelector(".ti")

 let display=document.querySelector(".viz")

 display.style.display="none"

btn.addEventListener("click", math)

function math(e){
    let si=((loan_amt.value*interest.value*years.value)/100)

    tot_pay.textContent= (Number(loan_amt.value) + Number(si))

    mnt_pay.textContent=((tot_pay.textContent/years.value)/12).toFixed(2)
    
    tot_int.textContent=si

    display.style.display="block"
}