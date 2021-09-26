import { medeeHevlex, newsList } from "/modules/newsList.js";
import { bidniiTuhaiHevlex, aboutUs } from "./modules/aboutus.js";
import { adsRender, ads } from "./modules/advertisement.js";
import { contactHevlex, contact } from "./modules/contact.js";
import { ajilHevlex, ajil } from "./modules/job.js";


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
        bidtuhaimed.forEach(element => {document.querySelector('.container').insertAdjacentHTML('beforebegin', element.Render())})
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
    .insertAdjacentHTML('beforebegin',element.Render())})}
    )

//job-iin URL

const url4 = "https://api.jsonbin.io/b/615043d74a82881d6c55a1d3"

ajilHevlex(url4, (jobs)=>

{
    
    jobs.forEach(element => {document.querySelector('.container')
.insertAdjacentHTML('beforebegin',element.Render())})}
)
