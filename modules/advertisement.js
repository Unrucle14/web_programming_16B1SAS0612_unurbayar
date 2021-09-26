export function adsRender(){
    let tier = new ads(1);
    document.querySelector('.container').insertAdjacentHTML('beforebegin', tier.Render());
};



export class ads{
    constructor(_tier1){
        this._tier1 = _tier1;
    }
    Render(){
        return `<h1>Зар сурталчилгаа</h1>
            <h2>Сурталчилгаа тавиулахын тулд</h2>
            <p >Та зар сурталчилгаа тавиулахын тулд 16B1SAS0612@stud.num.edu.mn хаяг луу зар сурталчилгааны poster зураг,зар сурталчилгааныхаа хугацаагаа илгээнэ үү. Бид тантай эргэн холбогдох болно. </p>
            <ul class="list">
                <li>
                    <span class="level">Tier 3</span>
                
                
                    <span class= "duration">15 хоног</span>
                
            
                    <span class= "price">$$$$</span>
                    
                </li>
                <li>
                    <span class="level">Tier 2</span>
                
                
                    <span class= "duration">7 хоног</span>
                
            
                    <span class= "price">$$$$</span>
                    
                </li>
                <li>
                    <span class="level">Tier 3</span>
                
                
                    <span class= "duration">1 сар</span>
                
            
                    <span class= "price">$$$$</span>
                    
                </li>
            </ul>`
    }
}