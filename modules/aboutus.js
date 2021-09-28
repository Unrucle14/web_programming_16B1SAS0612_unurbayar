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
        <h1   class="align-center" style="font-family: var(--default-font);">Бидний тухай</h1>
        <h2  class="align-center" style="font-family: var(--default-font);">${this._garchig}</h2>
        <p   class="align-center margin-space-for-aboutus-p"  style="font-family: var(--default-font);">${this._bie}</p>
                 `
    }
}