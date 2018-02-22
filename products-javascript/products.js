let products = [{fabric:"Butterscotch Cake Half kg", price:"199", desc:"A birthday, or anniversary or any other occasion gets complete only when a cake is cut and served.", pic:"../images/Products/butterScotch.jpg", link:"checkout-1.html"},
    {fabric:"Black Forest Cake Half kg", price:"199", desc:"Ferns N Petals brings this delicious 500gm Black Forest Cake.", pic:"../images/Products/chocolateCake.jpg", link:"checkout-2.html"},
    {fabric:"Rich Fruit Cake Half kg", price:"199", desc:"Enjoy the blissful treat loaded with seasonal fruits, wispy cream and layers of moist cake with fruity toppings. ", pic:"../images/Products/gourMet.jpg", link:"checkout-3.html"},
    {fabric:"Tiramisu Cake Half kg", price:"199", desc:"Tiramisu is an Italian word which means 'cheer me up'. And that is exactly what this divine cake from Ferns N Petals will do for your loved ones.", pic:"../images/Products/maraGang.jpg", link:"checkout-4.html"},
    {fabric:"Special Butterscotch Cake Half kg", price:"199", desc:"A birthday, or anniversary or any other occasion gets complete only when a cake is cut and served.", pic:"../images/Products/almondButtercream.jpg", link:"checkout-5.html"},];

    let productRow = document.getElementById("productRow");
    let displayItems = function DisplayOfferItems(){
        for (let i = 0; i < products.length; i++){
            let col = document.createElement("DIV");
            let card = document.createElement("DIV");
            let panelBody = document.createElement("DIV");
            let img = document.createElement("IMG");
            let h4 = document.createElement("H4");
            let em = document.createElement("EM");
            let panelFooter = document.createElement("DIV");
            let p = document.createElement("P");
            let button = document.createElement("BUTTON");
            let buttontext = (document.createTextNode("Buy now"));
            let clear = document.createElement("DIV");
            let a = document.createElement("A");

            h4.appendChild(document.createTextNode(products[i].fabric));
            button.appendChild(buttontext);
            em.appendChild(document.createTextNode(products[i].desc));
            p.appendChild(document.createTextNode("$ " + products[i].price));

            a.appendChild(button);
            panelBody.appendChild(img);
            panelBody.appendChild(h4);
            panelBody.appendChild(em);
            panelFooter.appendChild(p);
            panelFooter.appendChild(a);
            panelFooter.appendChild(clear);
            card.appendChild(panelBody);
            card.appendChild(panelFooter);
            col.appendChild(card);
            productRow.appendChild(col);


            card.setAttribute("class", "productCard");
            panelBody.setAttribute("class", "panel-body");
            col.setAttribute("class", "col-sm-3");
            panelFooter.setAttribute("class", "panel-footer");
            button.setAttribute("class", "btn btn-danger");
            a.setAttribute("href", products[i].link);
            clear.setAttribute("class", "clearfix");
            img.src=products[i].pic;
            img.setAttribute("class", "img-responsive");
        }
};
window.addEventListener("load", displayItems);

