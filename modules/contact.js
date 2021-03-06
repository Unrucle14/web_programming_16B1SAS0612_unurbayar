export function contactHevlex(url, callMeBack){
    fetch(url).then(response =>{ if(!response){
        throw Error(error);
    }
    else{
        return response.json();
    }
}).then(data => {
    let contactuud = [];
    data.contact.forEach(element => { contactuud.push(new contact(element.mobile_number, element.email_address, element.address))
     });
     callMeBack(contactuud)
})
}




export class  contact{
    constructor(_mobile_number, _email_address, _address){
        this._mobile_number = _mobile_number;
        this._email_address = _email_address;
        this._address = _address;
    }
    Render(){
        return `
                <h1 class="align-center" style="font-family: var(--default-font);">Холбогдох мэдээлэл</h1>
                <p class="align-center" style="font-family: var(--default-font);">Утасны дугаар:${this._mobile_number}</p>
                <p class="align-center" style="font-family: var(--default-font);">Email хаяг:${this._email_address}</p>
                <p class="align-center" style="font-family: var(--default-font);">Хаяг:${this._address}</p>`
    }
}