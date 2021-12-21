/*
Author       : Athallah Dzaki.
Template Name: The Fashion - eCommerce Bootstrap 5 HTML
Version      : 1.0
*/

// Item

// const itemName = ["Blue Dress Women", "Lether Gray Tuxedo", "Woman Full Sliv Dress", "Blue Dress For Woman", "Blue Casual Check Shirt", "White Black Line Dress", "Men Blue Jins Shirt"];
// const itemPrice = ["$45.00", "$55.00", "$59.40", "$71.29", "$45.00", "$25.00", "$50.00"]
// const itemRealPrice = ["$55.25", "$95.00", "$99.00", "$89.00", "$70.00", "$65.50", "$75.00"]
// const itemDiscount = ["35% Off", "40% Off", "30% Off", "45% Off", "60% Off", "25% Off", "20% Off"]

let phoneNumber = getCookie("phonenumber") || "6281332504194";

const item = {
    "ExclusiveProduct": {
        type: "discount",
        data: [
            { // 0 | 1
                itemName: "Blue Dress Women",
                itemPrice: "$45.00",
                itemRealPrice: "$55.25",
                itemDiscount: "35% Off",
                itemImage: {
                    light: "assets/img/dark/product_img1.jpg",
                    dark: "assets/img/light/product_img1.jpg"
                }
            }, { // 1 | 2
                itemName: "Lether Gray Tuxedo",
                itemPrice: "$55.00",
                itemRealPrice: "$95.00",
                itemDiscount: "40% Off",
                itemImage: {
                    light: "assets/img/dark/product_img2.jpg",
                    dark: "assets/img/light/product_img2.jpg"
                }
            }, { // 2 | 3
                itemName: "Woman Full Sliv Dress",
                itemPrice: "$59.40",
                itemRealPrice: "$99.00",
                itemDiscount: "30% Off",
                itemImage: {
                    light: "assets/img/dark/product_img3.jpg",
                    dark: "assets/img/light/product_img3.jpg"
                }
            }, { // 3 | 4
                itemName: "Light Blue Shirt",
                itemPrice: "$71.29",
                itemRealPrice: "$89.00",
                itemDiscount: "45% Off",
                itemImage: {
                    light: "assets/img/dark/product_img4.jpg",
                    dark: "assets/img/light/product_img4.jpg"
                }
            }, { // 4 | 5
                itemName: "Blue Dress For Woman",
                itemPrice: "$45.00",
                itemRealPrice: "$70.00",
                itemDiscount: "40% Off",
                itemImage: {
                    light: "assets/img/dark/product_img5.jpg",
                    dark: "assets/img/light/product_img5.jpg"
                }
            }, { // 5 | 6
                itemName: "Blue Casual Check Shirt",
                itemPrice: "$45.00",
                itemRealPrice: "$65.00",
                itemDiscount: "40% Off",
                itemImage: {
                    light: "assets/img/dark/product_img6.jpg",
                    dark: "assets/img/light/product_img6.jpg"
                }
            }, { // 6 | 7
                itemName: "White Black Line Dress",
                itemPrice: "$45.00",
                itemRealPrice: "$75.00",
                itemDiscount: "40% Off",
                itemImage: {
                    light: "assets/img/dark/product_img7.jpg",
                    dark: "assets/img/light/product_img7.jpg"
                }
            }, { // 7 | 8
                itemName: "Men Blue Jins Shirt",
                itemPrice: "$36.00",
                itemRealPrice: "$72.00",
                itemDiscount: "50% Off",
                itemImage: {
                    light: "assets/img/dark/product_img8.jpg",
                    dark: "assets/img/light/product_img8.jpg"
                }
            }
        ]
    },
    "WomenProduct": {
        type: "default",
        data: [
            { // 0 | 1
                itemName: "Blue Dress Women",
                itemPrice: "$45.00",
                itemRealPrice: "$55.25",
                itemDiscount: "35% Off",
                itemDescription : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, amet pariatur blanditiis quaerat reiciendis necessitatibus quidem eius eligendi, velit facere ratione veniam, quia saepe quo accusamus iste voluptatum tenetur obcaecati.",
                itemImage: {
                    light: "assets/img/dark/product_img1.jpg",
                    dark: "assets/img/light/product_img1.jpg"
                }
            }, { // 1 | 2
                itemName: "Woman Full Sliv Dress",
                itemPrice: "$59.40",
                itemRealPrice: "$99.00",
                itemDiscount: "30% Off",
                itemDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, amet pariatur blanditiis quaerat reiciendis necessitatibus quidem eius eligendi, velit facere ratione veniam, quia saepe quo accusamus iste voluptatum tenetur obcaecati.",
                itemImage: {
                    light: "assets/img/dark/product_img3.jpg",
                    dark: "assets/img/light/product_img3.jpg"
                }
            }
        ]
    }
}

for (x in item) {
    const data = item[x].data
    for (let i = 0; i < data.length; i++) {
        let itemName = data[i].itemName,
            itemPrice = data[i].itemPrice,
            itemRealPrice = data[i].itemRealPrice,
            itemDiscount = data[i].itemDiscount,
            itemIMGLight = data[i].itemImage.light,
            itemIMGDark = data[i].itemImage.dark,
            itemDescription = data[i].itemDescription !== undefined ? data[i].itemDescription : "";

        const discountCard = `
        <div class="col">
            <div class="card h-100 shadow discount">
                <img id="Product" class="img-product" lightImg="${itemIMGLight}" darkImg="${itemIMGDark}"
                    class="card-img-top Produk" alt="${itemName}" />
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${itemName}</h5>
                    <p>Price : <strong>${itemPrice}</strong> <a style="text-decoration: line-through;">${itemRealPrice}</a>
                        <a style="color:green">${itemDiscount}</a>
                    </p>
                    <button class="btn btn-info d-block mt-auto" onclick="Buy('${itemName}', '${itemPrice}', '${itemRealPrice}', '${itemDiscount}')">Buy</button>
                    <br />
                    <a type="button" class="btn btn-info d-block mt-auto" data-toggle="tooltip" data-placement="bottom" title="Coming Soon">
                        Info
                    </a>
                </div>
            </div>
        </div>
        `

        const defaultCard = `
        <div class="col">
            <div class="card h-100 shadow">
                <img id="Product" class="img-product" lightImg="${itemIMGLight}" darkImg="${itemIMGDark}"
                    class="card-img-top Produk" alt="${itemName}" />
                <div class="card-body">
                    <h5 class="card-title">${itemName}</h5>
                    <p>Price : <strong>${itemPrice}</strong>
                        ${itemDiscount !== "" ? `<a style="text-decoration: line-through;">${itemRealPrice}</a>  <a style="color:green">${itemDiscount}</a>` : ''}
                    </p>
                    <br />
                    <p class="card-text">${itemDescription}.</p>
                    <a class="btn btn-info d-block mt-auto" onclick="Buy('${itemName}', '${itemPrice}', '${itemRealPrice}', '${itemDiscount}')">Buy</a>
                    <br />
                    <a type="button" class="btn btn-info d-block mt-auto" data-toggle="tooltip" data-placement="bottom" title="Coming Soon">
                        Info
                    </a>
                </div>
            </div>
        </div>
        `

        let card = document.createElement("div");
        card.className = "col";
        card.innerHTML = item[x].type == "default" ? defaultCard : discountCard
        document.getElementById(x).appendChild(card);
    }
}

function Buy(name, price, realprice, discount) {
    window.open(`https://wa.me/${phoneNumber}?&text=Product%20Name:%20${name}%20Real Price:%20${price}%0AReal Price:%20${realprice}%0ADiscount:%20${discount}%0A%0AThanks%20BRO!`);
}