function adding(){
    let myValue=document.getElementById("inpbox").value;
    document.getElementById("inpbox").value = "";
    let liel=document.createElement("li");
    liel.appendChild(document.createTextNode(myValue));
    document.getElementById("list").appendChild(liel);
}