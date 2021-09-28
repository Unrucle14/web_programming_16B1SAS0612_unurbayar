//routing sponsor section
export class MyApp {

    
    constructor(appID) {
        this.appContainerID = appID || "sponsorid";
        this.appData = new Map();
        this.appData.set("/", new Map());
    }

    AddRoute(parentRoute, routeName, data) {
        this.appData.get(parentRoute).set(routeName, data);
    }

   OnRoute(route) {
        console.log(`route = ${route}`)
        document.getElementById(this.appContainerID).innerHTML = this.appData.get("/").get(route)?.Render() || this.NotFound();
    }

    NotFound() {
        return html`<section><div>Not found :( 404</div></section>`
    };

}


export class Support {
    constructor(objData) {
        this.data = objData;
    }

    Render() {
        
        return `<main class="main-for-sponsor">
        <h1 class="h1-for-sponsor">${this.data.title}</h1>
        <h2 class="gold h2-for-sponsor">Алтан түнш Donald Trumph</h2>
        <img class="picture-4-sponsor" src="sponsor_logo/Donald-Trump-Head.svg" width="300vw"; heigth="300vw";>
        <h3 class="h3-for-sponsor">Хамтарч ажилсан түүх</h3>
        <p class="p-for-sponsor">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non curabitur gravida arcu ac tortor dignissim convallis aenean. Magna ac placerat vestibulum lectus mauris. Turpis egestas sed tempus urna. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Adipiscing at in tellus integer feugiat scelerisque varius. Fames ac turpis egestas sed tempus urna et pharetra pharetra. Egestas tellus rutrum tellus pellentesque eu. Lectus urna duis convallis convallis tellus id interdum velit laoreet. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. Auctor urna nunc id cursus metus aliquam eleifend. Blandit volutpat maecenas volutpat blandit aliquam etiam. Vitae tempus quam pellentesque nec nam aliquam.

            Auctor eu augue ut lectus arcu bibendum at varius vel. Donec massa sapien faucibus et molestie ac feugiat sed lectus. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Scelerisque in dictum non consectetur a erat nam. In ante metus dictum at tempor commodo ullamcorper a. Malesuada fames ac turpis egestas maecenas pharetra. Eget mi proin sed libero. Eu augue ut lectus arcu bibendum at varius vel. Ac tincidunt vitae semper quis lectus nulla. Pellentesque elit ullamcorper dignissim cras. Ornare massa eget egestas purus viverra accumsan in nisl. Egestas erat imperdiet sed euismod nisi porta. Consequat ac felis donec et odio pellentesque. Elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Morbi tincidunt ornare massa eget egestas purus viverra accumsan. Posuere lorem ipsum dolor sit amet consectetur adipiscing. Luctus venenatis lectus magna fringilla urna. Diam in arcu cursus euismod quis viverra nibh. Scelerisque eu ultrices vitae auctor eu augue. Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque.
            
            Amet porttitor eget dolor morbi non arcu. Dolor sed viverra ipsum nunc aliquet. Habitasse platea dictumst vestibulum rhoncus est. Ac orci phasellus egestas tellus rutrum tellus. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Nunc faucibus a pellentesque sit amet porttitor eget. Morbi blandit cursus risus at. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Sed tempus urna et pharetra pharetra massa massa ultricies mi. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Sagittis orci a scelerisque purus. Enim nec dui nunc mattis enim ut tellus elementum. Sed ullamcorper morbi tincidunt ornare massa eget. Morbi tincidunt augue interdum velit. Fermentum et sollicitudin ac orci. Lobortis elementum nibh tellus molestie nunc non. Donec enim diam vulputate ut pharetra. Aliquet porttitor lacus luctus accumsan tortor posuere. Arcu felis bibendum ut tristique et egestas quis ipsum.
            
            Sed turpis tincidunt id aliquet risus feugiat in ante metus. Est ullamcorper eget nulla facilisi etiam dignissim diam quis. Diam sit amet nisl suscipit. Eleifend donec pretium vulputate sapien nec sagittis. Id porta nibh venenatis cras sed. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur. Mi quis hendrerit dolor magna eget. Urna nunc id cursus metus aliquam. Aenean sed adipiscing diam donec adipiscing. Quam pellentesque nec nam aliquam. Purus ut faucibus pulvinar elementum integer. Laoreet suspendisse interdum consectetur libero. Sit amet nulla facilisi morbi tempus. In egestas erat imperdiet sed euismod nisi porta lorem. Tincidunt arcu non sodales neque sodales ut. Diam vel quam elementum pulvinar etiam non quam lacus. Neque viverra justo nec ultrices dui. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec. Fermentum posuere urna nec tincidunt praesent.
            <h3 class="h3-for-sponsor">Одоогийн дэмжлэг</h3>
            <p class="p-for-sponsor">Est velit egestas dui id. Ultrices in iaculis nunc sed augue. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar. Et netus et malesuada fames ac turpis egestas maecenas pharetra. Feugiat in ante metus dictum at tempor commodo. Vitae semper quis lectus nulla at volutpat diam ut venenatis. Ultrices sagittis orci a scelerisque purus semper eget. Varius vel pharetra vel turpis nunc eget lorem dolor sed. Enim praesent elementum facilisis leo vel fringilla. Gravida quis blandit turpis cursus in hac habitasse platea. Porttitor eget dolor morbi non arcu risus quis. Orci nulla pellentesque dignissim enim. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Justo eget magna fermentum iaculis eu non diam phasellus vestibulum.
            
            Dictumst quisque sagittis purus sit amet volutpat. Nibh tellus molestie nunc non. Commodo ullamcorper a lacus vestibulum sed. Habitant morbi tristique senectus et netus et malesuada. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque. Viverra vitae congue eu consequat. Lorem ipsum dolor sit amet consectetur. Dolor sit amet consectetur adipiscing elit. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Elementum facilisis leo vel fringilla est.
            
            Tempus urna et pharetra pharetra massa. Dolor morbi non arcu risus quis varius. Id diam maecenas ultricies mi eget mauris pharetra et ultrices. Sit amet purus gravida quis blandit turpis cursus. Ullamcorper sit amet risus nullam eget felis eget nunc lobortis. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Cursus vitae congue mauris rhoncus aenean vel. Nisl nisi scelerisque eu ultrices vitae auctor eu augue. Non nisi est sit amet facilisis magna etiam tempor orci. Auctor augue mauris augue neque gravida in fermentum et. Adipiscing vitae proin sagittis nisl. Sed viverra tellus in hac habitasse platea dictumst. Elementum nibh tellus molestie nunc non blandit. Donec adipiscing tristique risus nec feugiat. At quis risus sed vulputate. Iaculis at erat pellentesque adipiscing commodo.
            
            Lectus arcu bibendum at varius vel. Amet consectetur adipiscing el
            it ut aliquam purus sit. Libero enim sed faucibus turpis in eu mi bibendum. Quam quisque id diam vel quam elementum. Ornare quam viverra orci sagittis eu volutpat odio facilisis. Massa tincidunt nunc pulvinar sapien et ligula. Varius duis at consectetur lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Sed augue lacus viverra vitae congue. Vitae proin sagittis nisl rhoncus. Rhoncus urna neque viverra justo. Neque sodales ut etiam sit amet nisl purus in. In dictum non consectetur a erat nam.</p>


        <h2 class="silver  h2-for-sponsor">Мөнгөн түнш Ethereum classic койн</h2>
        <img class="picture-4-sponsor" src="sponsor_logo/ethereum-classic-logo.svg" width="300vw"; heigth="300vw";>
        <h3 class="h3-for-sponsor">Хамтарч ажилсан түүх</h3>
        <p class="p-for-sponsor">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non curabitur gravida arcu ac tortor dignissim convallis aenean. Magna ac placerat vestibulum lectus mauris. Turpis egestas sed tempus urna. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Adipiscing at in tellus integer feugiat scelerisque varius. Fames ac turpis egestas sed tempus urna et pharetra pharetra. Egestas tellus rutrum tellus pellentesque eu. Lectus urna duis convallis convallis tellus id interdum velit laoreet. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. Auctor urna nunc id cursus metus aliquam eleifend. Blandit volutpat maecenas volutpat blandit aliquam etiam. Vitae tempus quam pellentesque nec nam aliquam.

            Auctor eu augue ut lectus arcu bibendum at varius vel. Donec massa sapien faucibus et molestie ac feugiat sed lectus. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Scelerisque in dictum non consectetur a erat nam. In ante metus dictum at tempor commodo ullamcorper a. Malesuada fames ac turpis egestas maecenas pharetra. Eget mi proin sed libero. Eu augue ut lectus arcu bibendum at varius vel. Ac tincidunt vitae semper quis lectus nulla. Pellentesque elit ullamcorper dignissim cras. Ornare massa eget egestas purus viverra accumsan in nisl. Egestas erat imperdiet sed euismod nisi porta. Consequat ac felis donec et odio pellentesque. Elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Morbi tincidunt ornare massa eget egestas purus viverra accumsan. Posuere lorem ipsum dolor sit amet consectetur adipiscing. Luctus venenatis lectus magna fringilla urna. Diam in arcu cursus euismod quis viverra nibh. Scelerisque eu ultrices vitae auctor eu augue. Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque.
            
            Amet porttitor eget dolor morbi non arcu. Dolor sed viverra ipsum nunc aliquet. Habitasse platea dictumst vestibulum rhoncus est. Ac orci phasellus egestas tellus rutrum tellus. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Nunc faucibus a pellentesque sit amet porttitor eget. Morbi blandit cursus risus at. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Sed tempus urna et pharetra pharetra massa massa ultricies mi. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Sagittis orci a scelerisque purus. Enim nec dui nunc mattis enim ut tellus elementum. Sed ullamcorper morbi tincidunt ornare massa eget. Morbi tincidunt augue interdum velit. Fermentum et sollicitudin ac orci. Lobortis elementum nibh tellus molestie nunc non. Donec enim diam vulputate ut pharetra. Aliquet porttitor lacus luctus accumsan tortor posuere. Arcu felis bibendum ut tristique et egestas quis ipsum.
            
            Sed turpis tincidunt id aliquet risus feugiat in ante metus. Est ullamcorper eget nulla facilisi etiam dignissim diam quis. Diam sit amet nisl suscipit. Eleifend donec pretium vulputate sapien nec sagittis. Id porta nibh venenatis cras sed. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur. Mi quis hendrerit dolor magna eget. Urna nunc id cursus metus aliquam. Aenean sed adipiscing diam donec adipiscing. Quam pellentesque nec nam aliquam. Purus ut faucibus pulvinar elementum integer. Laoreet suspendisse interdum consectetur libero. Sit amet nulla facilisi morbi tempus. In egestas erat imperdiet sed euismod nisi porta lorem. Tincidunt arcu non sodales neque sodales ut. Diam vel quam elementum pulvinar etiam non quam lacus. Neque viverra justo nec ultrices dui. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec. Fermentum posuere urna nec tincidunt praesent.
            <h3 class="h3-for-sponsor">Одоогийн дэмжлэг</h3>
            <p class="p-for-sponsor">Est velit egestas dui id. Ultrices in iaculis nunc sed augue. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar. Et netus et malesuada fames ac turpis egestas maecenas pharetra. Feugiat in ante metus dictum at tempor commodo. Vitae semper quis lectus nulla at volutpat diam ut venenatis. Ultrices sagittis orci a scelerisque purus semper eget. Varius vel pharetra vel turpis nunc eget lorem dolor sed. Enim praesent elementum facilisis leo vel fringilla. Gravida quis blandit turpis cursus in hac habitasse platea. Porttitor eget dolor morbi non arcu risus quis. Orci nulla pellentesque dignissim enim. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Justo eget magna fermentum iaculis eu non diam phasellus vestibulum.
            
            Dictumst quisque sagittis purus sit amet volutpat. Nibh tellus molestie nunc non. Commodo ullamcorper a lacus vestibulum sed. Habitant morbi tristique senectus et netus et malesuada. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque. Viverra vitae congue eu consequat. Lorem ipsum dolor sit amet consectetur. Dolor sit amet consectetur adipiscing elit. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Elementum facilisis leo vel fringilla est.
            
            Tempus urna et pharetra pharetra massa. Dolor morbi non arcu risus quis varius. Id diam maecenas ultricies mi eget mauris pharetra et ultrices. Sit amet purus gravida quis blandit turpis cursus. Ullamcorper sit amet risus nullam eget felis eget nunc lobortis. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Cursus vitae congue mauris rhoncus aenean vel. Nisl nisi scelerisque eu ultrices vitae auctor eu augue. Non nisi est sit amet facilisis magna etiam tempor orci. Auctor augue mauris augue neque gravida in fermentum et. Adipiscing vitae proin sagittis nisl. Sed viverra tellus in hac habitasse platea dictumst. Elementum nibh tellus molestie nunc non blandit. Donec adipiscing tristique risus nec feugiat. At quis risus sed vulputate. Iaculis at erat pellentesque adipiscing commodo.
            
            Lectus arcu bibendum at varius vel. Amet consectetur adipiscing elit ut aliquam purus sit. Libero enim sed faucibus turpis in eu mi bibendum. Quam quisque id diam vel quam elementum. Ornare quam viverra orci sagittis eu volutpat odio facilisis. Massa tincidunt nunc pulvinar sapien et ligula. Varius duis at consectetur lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Sed augue lacus viverra vitae congue. Vitae proin sagittis nisl rhoncus. Rhoncus urna neque viverra justo. Neque sodales ut etiam sit amet nisl purus in. In dictum non consectetur a erat nam.</p>
        
               
                
        
   </main>`

    }
}

const  sponsor = new Support({title:"Ивээн тэтгэгчид"})
const myApp = new MyApp("sponsorid");

myApp.AddRoute("/", "/sponsor", sponsor);

[...document.getElementsByClassName("sponsor")].forEach(element => {
    
    element.addEventListener("click", e => {
        e.preventDefault();
        history.pushState(null, "", e.target.href);
        //myApp.OnRoute(e.target.href);
    }
    )
});

window.addEventListener("popstate", e => {
    console.log("navigation occured");
    myApp.OnRoute(document.location.pathname);
});

history.pushState = function()
{
    History.prototype.pushState.apply(history, arguments);
    myApp.OnRoute(document.location.pathname);
}