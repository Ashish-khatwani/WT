
function check(event){
    event.preventDefault();
    
    let namebox =document.getElementById("fname")
    let usid =document.getElementById("fname").value
    if (usid == "")
    {
        document.getElementById("erid").innerText="please enter id"
        namebox.style.background='red'
    }
    let usdept = document.getElementById("lname").value
    if (usdept == "")
    {
        document.getElementById("erdept").innerText="please enter dept"
    }
}