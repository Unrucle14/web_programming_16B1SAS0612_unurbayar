export function bidniiTuhaiHevlex(url, callMeBack){
    fetch(url).then(response => {
                                 if(!response){
                                 throw Error(error);
                                } 
                                 else{
                                     return response.json();
                                 } 
                                
    }).then(data=>{
        let bidtuhaimed = [];
        console.log(data);
        data.bidniituhai.forEach(element => {
            bidtuhaimed.push(new aboutUs (element.garchig, element.bie))
        });
        callMeBack(bidtuhaimed);
         }
    )


}


export class aboutUs{
    constructor(_garchig, _bie){
    this._garchig = _garchig;
    this._bie = _bie;
    }
    Render(){
        return `
        <h2>${this._garchig}</h2>
        <p>${this._bie}</p>
                 `
    }
}