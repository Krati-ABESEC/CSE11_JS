// DOM manipulation in JS
const result= document.getElementById("para");
console.log(result);
result.innerHTML="<b> Hello World </b>";

result.title= "myname";

const result2= document.getElementsByClassName("myclass");
console.log(result2);// it returns the array

result2[0].innerHTML= "<b> Krati </b>";
result2[1].innerHTML= "<b> Agarwal </b>";
result2[2].innerHTML= "<b> 18 </b>";

const name= document.getElementsByTagName("P");
console.log(name);// it returns the nodelist

name[0].style.color= "red";// changing the style
name[1].innerHTML="<i> Hi There </i>";
name[2].innerHTML="hi";
name[2].style.backgroundColor= "yellow";

const test= document.querySelector("P")// it returns child of the specified class/id/ tag
console.log(test);

const test2= document.querySelectorAll("ul li");
for(x in test2){
    test2[x].style.backgroundColor= "purple";
    test2[x].style.margin="10px";
    test2[x].style.color="white";
}





