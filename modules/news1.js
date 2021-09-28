/*const medee1 = {
    "medee" : [
        {"garchig": "Wifi hack хийх",
        "bodytext1":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
         "terminal": "kali@kali:~$",
         "terminal2": "airmon-ng start wlan0",
         "bodytext2":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
         "subtitle": "Subtitle",
         "bodytext3":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          "conclusion": "Conclusion",
          "bodytext4":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    
        }
    ]
}*/

class more_news{
    constructor(_garchig, _bodytext1,_terminal1, _terminal2, _bodytext2, _subtitle, _bodytext3,_conclusion, _bodytext4 ){
        
            this._garchig =_garchig;
            this._bodytext1 =_bodytext1;
            this._terminal1 =_terminal1;
            this._terminal2 =_terminal2 ;
            this._bodytext2 =_bodytext2 ;
            this._subtitle =_subtitle; 
            this._bodytext3 = _bodytext3;
            this._conclusion = _conclusion; 
            this._bodytext4 = _bodytext4;
        
    }
    Render(){
        return `
        <section class="more-news">
        <h1 class="more_news_h1">
            ${this._garchig}
        </h1>
        <article>
            <img src="images/news1.svg" class="news1_img" alt="this news image">
            <p  class="main_p"> ${this._bodytext1} </p>
            <span class="code_in_shell"><span class="prompt_name">${this._terminal1}</span>${this._terminal2} </span>
            <p  class="main_p">${this._bodytext2}</p>
            <h2 class="more_news_h2">
            ${this._subtitle}
            </h2>
            <p class="main_p">${this._bodytext3}</p>
            <img src="news_img/shoo.png" class="news1_img" alt="this is rubick">
            <h2 class="more_news_h2">
                ${this._conclusion}
            </h2>
            <p  class="main_p">${this._bodytext4}</p>
        </article>
                  </section>
               `
    }
};


const medee1 = new more_news("Wifi hack хийх",
"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
"kali@kali:~$",
"airmon-ng start wlan0",
"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
"Subtitle",
"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
"Conclusion",
"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
)
console.log(medee1.Render())

function Rendering(){
   document.getElementById('main_news').innerHTML = medee1.Render(); 
} ;
Rendering();