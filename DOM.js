console.dir(document);                          //shows all the functions in the document
console.log(document.domain);                   //shows the domain of the document
console.log(document.URL);                      //shows URL of the document
console.log(typeof document.URL);               //shows the datatype of URL
//if (document.domain== "127.0.0.1")
//window.location.href='https://www.google.com';
console.log(document.title);                    //shows title of the document
document.title="HELLO WORLD";                   //changes the title of document to this text only on the browser 
console.log(document.all);                      //all makes an array of the tags in the document
console.log(document.all[0]);                   //shows tag at 0th index
console.log(document.all[5]);                   //shows tag at 5th index
for(let i=0;i<document.all.length;i++)          //shows all the tag till the length of the index
console.log(document.all[i]);                   //display all the tags till i
console.log(document.links);                    //shows all the links in the document
document.links[0].href="https://www.facebook.com"; //page will be redirected to FB when we click on anchor tag

//DOCUMENT(Webpage) OBJECT(We make changes in the memmory) MODEL(Collection of certain methods are used)

//METHODS:-

console.log(document.getElementById("header-title"));
let headertitle = document.getElementById("header-title");
console.log(headertitle); 
//headertitle.textContent="hello";
//headertitle.innerHTML="HELLO";
headertitle.style.borderBottom= "solid 3px black";

console.log(document.getElementsByClassName("list-group-items"));
let listgroupitems = document.getElementsByClassName("list-group-items");
console.log(listgroupitems);
console.log(listgroupitems[0]);
//listgroupitems[0].textContent="Hello1";
listgroupitems[0].style.fontWeight="bold";
//listgroupitems[0].style.backgroundColor="yellow";
for(let i=0;i<listgroupitems.length;i++){
    if(i%2==0){
    listgroupitems[i].style.backgroundColor="green";
    listgroupitems[i].style.color="white";
    }else{
        listgroupitems[i].style.backgroundColor="black";
        listgroupitems[i].style.color="white";
    }
}

console.log(document.getElementsByTagName("li"));
let li=document.getElementsByTagName("li");
console.log(li);
//li[1].textContent="HELLO 1";
for(let i=0;i<li.length;i++){
    if(i%2==0){
    li[i].style.backgroundColor="green";
    li[i].style.color="white";
    }else{
        li[i].style.backgroundColor="black";
        li[i].style.color="white";
    }
}

let header= document.querySelector("#main-header");
console.log(header);
header.style.borderBottom="solid 4px red";
//let title=document.querySelector(".title");
//console.log(title);
//title.textContent="bye";
let input= document.querySelector("input[type='submit']");
console.log(input);
//input.value="save";

let title=document.querySelectorAll(".title");
console.log(title);
//title[0].innerText="hello";
//title[1].innerText="bye";

let btn=document.getElementById("btn");
//console.log(btn);
btn.addEventListener("click", function(event){
   event.preventDefault();
   // console.log("hello",event);
    let colors=Math.floor(Math.random()*255);
    document.body.style.backgroundColor=`rgb(155,102,${colors})`;
});

//document.body.addEventListener("mousemove",function (e){
    //console.log("hi");
  //document.body.style.backgroundColor=`rgb(0,${e.clientX},${e.clientY})`;
//});