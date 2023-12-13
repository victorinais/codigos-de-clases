var app = document.getElementById("app");

//container
var container = document.createElement("div");
container.classList.add("container");
container.style.background = "white";
container.style.padding = "0.1em";
container.style.width = "300px";
container.style.borderRadius = "10px";
app.appendChild(container);

//row
var row = document.createElement("div");
row.classList.add("row");
container.appendChild(row);

//col
var col = document.createElement("div");
col.classList.add("col");
col.style.padding = "0 0.8em"
row.appendChild(col);

//img
var img = document.createElement("img");
img.classList.add("img");
img.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTumr-ynIsoOEzb29PmGsYo5Dfem9Yio8dC8Q&usqp=CAU");
img.style.width = "100%";
img.style.borderRadius = "10px"
col.appendChild(img);

//h5
var h5 = document.createElement("h5");
h5.classList.add("h5");
h5.style.padding = "0.7em 0 0.2em 0.7em";
h5.innerText = "Card title";
col.appendChild(h5);

//p
var p = document.createElement("p");
p.classList.add("parrafo");
p.style.padding = "0em 0 0.2em 0.7em";
p.innerText = "Some quick example text to build on the card title and make up the bulk of the card's content.";
col.appendChild(p);

//a
var a = document.createElement("a");
a.classList.add("btn");
a.setAttribute("href","#");
a.style.background = "#0d6efd";
a.style.padding = "0.5em";
a.style.marginLeft = "0.7em";
a.style.marginBottom = "1em";
a.style.color = "white";
a.innerText = "Go somewhere";
col.appendChild(a);

