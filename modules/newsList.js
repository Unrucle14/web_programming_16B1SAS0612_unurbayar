export function medeeHevlex(url, callMeBack){
    
    fetch(url).then(
                    response => {
                        if(!response){
                            throw Error(error);
                        }
                        else{
                            return response.json()
                        }
                    })
                      .then(data => {
                   
                   let medeenuud = [];
                   data.medee.forEach(
                       (arrayIndex) =>{
                        medeenuud.
                        push(new newsList(arrayIndex.garchig, arrayIndex.zurag, arrayIndex.tovch_oguulber))
                    });
                       callMeBack(medeenuud);
                   });    
    }


 export   class newsList{
        constructor(garchig, zurag, tovch_oguulber){
            this.garchig = garchig;
            this.zurag = zurag;
            this.tovch_oguulber = tovch_oguulber;
        };
        Render() {
            return `<article class="news-list">
                        <h2><a href="news1.html" style="color:black";  onMouseOver="this.style.color='#FF0000'"
                         onMouseOut="this.style.color='#000000'">${this.garchig}</a></h2>
                        <a href="news1.html"> <img src="${this.zurag}" style="height:250px" class="width-100"  alt="This image about news"></a>
                        
                       <p><a href="news1.html" style="color:black" onMouseOver="this.style.color='#FF0000'"
                         onMouseOut="this.style.color='#000000'">${this.tovch_oguulber}</a></p>
                    </article>`
                
        }
    }