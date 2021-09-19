function addComment(){
      // COMMENT NEMEX HESEG
    //nerend zoriulsan comment boxnii uusgex
    let commentbox1 = document.createElement("div");
    // name gedeg nertei id utga uusgej bn.
    commentbox1.setAttribute("id", "name2");
    let commentboxValue = document.createTextNode("Нэр");

    //commentbox1-d commentboxValue-iin utgiig ardaas ni nemekh
    commentbox1.appendChild(commentboxValue);

    // commentboxoo1 news.html huudasd bairluulax
    let positiondiv = document.getElementById("name1");
       positiondiv.appendChild(commentbox1);

    //huvisagch deer tulguurlan div item uusgex
    let createDiv1=document.createElement("div");
    //news1.html huudsaas commentor id-tai elementiig songood utgiig ni avax
    let comowner1 = document.getElementById("commentor").value;
    //
    let textnode1 = document.createTextNode(comowner1);
    // CreateDiv1 huvisagchid textnode1 huvisagchiin utgiig nemex
    createDiv1.appendChild(textnode1);
    //news1.html-d  name2 id-tai elementiig songoj utga nemex
    let positiondiv2 = document.getElementById("name2")
         positiondiv2.appendChild(createDiv1)  


         //COMMENT NEMEX HESEG


    //nerend zoriulsan comment boxnii uusgex
    let commentbox2 = document.createElement("div");
    // name gedeg nertei id utga uusgej bn.
    commentbox2.setAttribute("id", "opinion2");
    let commentboxValue2 = document.createTextNode("сэтгэгдэл");

    //commentbox2-d commentboxValue-iin utgiig ardaas ni nemekh
    commentbox2.appendChild(commentboxValue2);

    // commentboxoo2 news.html huudasd bairluulax
    let positiondiv3 = document.getElementById("opinion");
       positiondiv3.appendChild(commentbox2);

    //huvisagch deer tulguurlan div item uusgex
    let createDiv2=document.createElement("div");
    //news1.html huudsaas commentor id-tai elementiig songood utgiig ni avax
    let cbody = document.getElementById("cbody").value;
    //
    let textnode2 = document.createTextNode(cbody);
    // CreateDiv1 huvisagchid textnode1 huvisagchiin utgiig nemex
    createDiv2.appendChild(textnode2);
    //news1.html-d  name2 id-tai elementiig songoj utga nemex
    let positiondiv4 = document.getElementById("opinion2");
         positiondiv4.appendChild(createDiv2);     


     
} 
function cancelcomment(){

}