// const H = document.createElement("h2");

// const P = document.createElement("p");

// const B = document.createElement("button");

// H.classList.add("text-info");
// H.textContent = "Sub Heading";

// P.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic dolorum beatae unde cum reprehenderit cumque repudiandae porro autem magnam, expedita facere mollitia repellat delectus qui voluptatibus possimus tempore. Velit, provident?"


const ar=["sujal","rohit","raja","Abhishek","ram"];

const List = document.createElement("ol")

ar.forEach((item) => {
    const L = document.createElement("li");
    L.textContent =item;
    List.appendChild(L);
});

document.getElementById("mylist").appendChild(List);
