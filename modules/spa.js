fetch("https://api.jsonbin.io/b/609fa15d1ad3151d4b304720").then(response =>
{
  if(!response.ok){
      throw ERROR("Error");
  }
  return response.json();
}).then(data =>{
    console.log(data.news.newsList[0].title)
    let html1 = `<a href="news1.html"  id="links_div"> ${data.news.newsList[0].title}</a>`
    document.querySelector("#app1").insertAdjacentHTML("afterbegin", html1);
  })

  fetch("https://api.jsonbin.io/b/609fa15d1ad3151d4b304720").then(response =>
  {
    if(!response.ok){
        throw ERROR("Error");
    }
    return response.json();
  }).then(data =>{
      console.log(data.news.newsList[0].title)
      let html1 = `<a href="news1.html"  id="links_div"> ${data.news.newsList[0].title}</a>`
      document.querySelector("#app1").insertAdjacentHTML("afterbegin", html1);
    })