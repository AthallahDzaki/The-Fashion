
// Item

// const itemName = ["Blue Dress Women", "Lether Gray Tuxedo", "Woman Full Sliv Dress", "Blue Dress For Woman", "Blue Casual Check Shirt", "White Black Line Dress", "Men Blue Jins Shirt"];
// const itemPrice = ["$45.00", "$55.00", "$59.40", "$71.29", "$45.00", "$25.00", "$50.00"]
// const itemRealPrice = ["$55.25", "$95.00", "$99.00", "$89.00", "$70.00", "$65.50", "$75.00"]
// const itemDiscount = ["35% Off", "40% Off", "30% Off", "45% Off", "60% Off", "25% Off", "20% Off"]

const item = {
    "ExclusiveProduct": [
        { // 0 | 1
            itemName: "Blue Dress Women",
            itemPrice: "$45.00",
            itemRealPrice: "$55.25",
            itemDiscount: "35% Off"
        }, { // 1 | 2
            itemName: "Lether Gray Tuxedo",
            itemPrice: "$55.00",
            itemRealPrice: "$95.00",
            itemDiscount: "40% Off"
        }, { // 2 | 3
            itemName: "Woman Full Sliv Dress",
            itemPrice: "$59.40",
            itemRealPrice: "$99.00",
            itemDiscount: "30% Off"
        }, { // 3 | 4
            itemName: "Light Blue Shirt",
            itemPrice: "$71.29",
            itemRealPrice: "$89.00",
            itemDiscount: "45% Off"
        }, { // 4 | 5
            itemName: "Blue Dress For Woman",
            itemPrice: "$45.00",
            itemRealPrice: "$70.00",
            itemDiscount: "40% Off"
        }
    ]
}

for(x in item) {
    for(let i = 0; i < item[x].length; i++){
        let itemName = item[x][i].itemName,
            itemPrice = item[x][i].itemPrice,
            itemRealPrice = item[x][i].itemRealPrice,
            itemDiscount = item[x][i].itemDiscount,
            itemIMG = item[x][i].itemImage
            itemRating = item[x][i].itemRating;
        
        let card = document.createElement("div");
        card.className = "col";
        card.innerHTML = `
        <div class="card h-100 shadow">
            <img id="Product" src="https://bestwebcreator.com/shopwise/demo/assets/images/product_img1.jpg"
                class="card-img-top Produk" alt="${itemName}" />
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">${itemName}</h5>
                <p>Price : <strong>${itemPrice}</strong> <a style="text-decoration: line-through;">${itemRealPrice}</a>
                    <a style="color:green">${itemDiscount}</a>
                </p>
                <a class="btn btn-info d-block mt-auto" onclick="Buy('${itemName}', '${itemPrice}', '${itemRealPrice}', '${itemDiscount}')">Buy</a>
            </div>
        </div>`
        document.getElementById(x).appendChild(card);
    }
}

function Buy(name, price, realprice, discount)
{
    window.open(`https://wa.me/send?phone=6281332504194?&text=Product Name:%20${name}%20Real Price:%20${price}%0AReal Price:%20${realprice}%0ADiscount:%20${discount}%0A%0AThanks%20BRO!`)
}