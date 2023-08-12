function adding(){
    let myValue=document.getElementById("inpbox").value;
    document.getElementById("inpbox").value = "";
    let liel=document.createElement("li");
    liel.className="liel";
    let editor=document.createElement("button");
    let delbtn =document.createElement("button");
    let edit=document.createTextNode("Edit");
    let del=document.createTextNode("Delete");
    delbtn.className="delbtn";
    editor.className="createbtn";
    editor.appendChild(edit);
    delbtn.appendChild(del);
    liel.appendChild(document.createTextNode(myValue));
    liel.appendChild(editor);
    liel.appendChild(delbtn);
    document.getElementById("list").appendChild(liel);
}
 function edit(){

 }