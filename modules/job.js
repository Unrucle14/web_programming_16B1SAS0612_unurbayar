export function ajilHevlex(url, callMeBack){
    fetch(url).then(response =>{ 
        if(!response){
        throw Error(error);
    }
    else{
        console.log(response);
        return response.json();
        
    }
}).then(data => {
    let jobs = [];
    data.works.forEach(element => { jobs.push(new ajil(element.name, element.requirement, element.age, element.education, element.salary))
     });
     callMeBack(jobs)
})
}




export class  ajil{
    constructor(_name, _requirement, _age, _education, _salary){
        this._name = _name;
        this._requirement = _requirement;
        this._age = _age;
        this._education = _education;
        this._salary = _salary;
    }
    Render(){
        return `
        <h1 class="align-center" style="font-family: var(--default-font);"> Ажлын байр</h1>
        <h1 class="align-center remove-dash" style="font-family: var(--default-font);">-------------------------------------------------------------</h1>
        <p  class="align-center" style="font-family: var(--default-font);">${this._name}</p>
        <p class="align-center" style="font-family: var(--default-font);">Тавигдах шаардлага: ${this._requirement}</p>
        <p  class="align-center" style="font-family: var(--default-font);">Нас: ${this._age}</p>
        <p  class="align-center" style="font-family: var(--default-font);">Боловсрол: ${this._education}</p>
        <p class="align-center" style="font-family: var(--default-font);">Цалин: ${this._salary}</p>
        `
    }
}