let aya=document.getElementsByClassName("aya")
let plus_btn=document.getElementsByClassName("plus-btn")
let Quant=document.getElementsByClassName("Quant")
let minus_btn=document.getElementsByClassName("minus-btn")
let finalPrice=document.getElementById("finalPrice")
let price=document.getElementsByClassName("price")
let deletee=document.getElementsByClassName("delete")
let Item=document.getElementsByClassName("Item")
for(let index = 0 ; index < aya.length;index++){
    //heart button like
    aya[index].addEventListener("click" , function(){
        if(aya[index].style.color==="black"){
        aya[index].style.color="red"}

    
    else{
        aya[index].style.color="black"
    }
})

//plus button
plus_btn[index].addEventListener("click",function(){
    Quant[index].value=Number(Quant[index].value)+1
    finalPrice.value=Number(finalPrice.value)+Number(price[index].textContent)


})

//minus button
 minus_btn[index].addEventListener("click",function() {
    if(Quant[index].value>0){
    Quant[index].value=Number(Quant[index].value)-1}
    finalPrice.value=Number(finalPrice.value-Number(price[index].textContent))

    
 })
 //button delete
 deletee[index].addEventListener("click",function(){
  Item[index].style.display="none"
  finalPrice.value=Number(finalPrice.value)-Number(price[index].textContent)*Number(Quant[index].value)
 })

 







}



