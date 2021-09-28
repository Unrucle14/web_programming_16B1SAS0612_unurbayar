 // `use strict` ni javascript codiig strict mode luu shiljiil 
//zarlaagui huvisagch ashiglaxaas uridchilan sergiilne ee.
//`use strict`
import { medeeHevlex, newsList } from "/modules/newsList.js";
import { bidniiTuhaiHevlex, aboutUs } from "./modules/aboutus.js";
import { adsRender, ads } from "./modules/advertisement.js";
import { contactHevlex, contact } from "./modules/contact.js";
import { ajilHevlex, ajil } from "./modules/job.js";
import { MyApp,Support } from "./modules/sponsor.js";





//newsList-iin URL
const url1 = "https://api.jsonbin.io/b/614ffc8aaa02be1d444ec793/latest";
medeeHevlex(url1, 
    (medeenuud)=>{
        medeenuud.forEach(element => {
          document.querySelector('.container').insertAdjacentHTML('beforeend',element.Render());
        });
    }
)

//aboutus-iin URL

const url2 = "https://api.jsonbin.io/b/615028549548541c29b89111/latest"

    bidniiTuhaiHevlex(url2, 
    (bidtuhaimed)=>{
        bidtuhaimed.forEach(element => {document.querySelector('.container').insertAdjacentHTML('afterend', element.Render())})
    }
    )

//ads--n shuud render hiix


adsRender();


//contact-iin URL

const url3 = "https://api.jsonbin.io/b/615036b79548541c29b89845/latest"

contactHevlex(url3, 
    (contactuud) =>
    {
        
        contactuud.forEach(element => {document.querySelector('.container')
    .insertAdjacentHTML('afterend',element.Render())})}
    )

//job-iin URL

const url4 = "https://api.jsonbin.io/b/615043d74a82881d6c55a1d3"

ajilHevlex(url4, (jobs)=>

{
    
    jobs.forEach(element => {document.querySelector('.container')
.insertAdjacentHTML('afterend',element.Render())})}
)


// 3 second tutamd check4connection-g ajilluulj offline esvel online baigaag shalgana.
setInterval(check4connection, 3000) 
// offline or online
function check4connection(){
if(navigator.onLine){
   let online = document.getElementById("internetcheck");
   online.classList.remove("offline-for-connection")
}
else{
     let offline = document.getElementById("internetcheck");
     offline.classList.add("offline-for-connection")
}
}