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
                itemDescription : "Blue Dress Woman is a dress with an elegant and fashionable style for 2022. We provide the best quality made from cotton, wool and levis fabrics.",
                itemImage: {
                    light: "assets/img/dark/product_img1.jpg",
                    dark: "assets/img/light/product_img1.jpg"
                }
            }, { // 1 | 2
                itemName: "Woman Full Sliv Dress",
                itemPrice: "$59.40",
                itemRealPrice: "$99.00",
                itemDiscount: "30% Off",
                itemDescription: "Woman Full Sliv Dress is a dress with an fashionable style for 2022. We provide the best quality made from cotton, wool and levis fabrics.",
                itemImage: {
                    light: "assets/img/dark/product_img3.jpg",
                    dark: "assets/img/light/product_img3.jpg"
                }
            }, {
                itemName: "White Black Line Dress",
                itemPrice: "$45.00",
                itemRealPrice: "$75.00",
                itemDiscount: "40% Off",
                itemDescription : "White Black Line Dress is a dress with an elegant and fashionable style and stripes, suitable for the celebration of the new year 2022. We provide the best quality made from cotton, wool and levis fabrics.",
                itemImage: {
                    light: "assets/img/dark/product_img7.jpg",
                    dark: "assets/img/light/product_img7.jpg"
                }
            },  {
                itemName : "Girls T-Shirt",
                itemPrice : "$45.00",
                itemRealPrice : "",
                itemDiscount : "",
                itemDescription : "Girls T-Shirt is a T-Shirt with a model that is suitable for teenage girls. We provide the best quality made of cotton, wool and levis.",
                itemImage : {
                    light : "assets/img/dark/product_img9.jpg",
                    dark  : "assets/img/light/product_img9.jpg"
                }
            },  {
                itemName : "Black Dress",
                itemPrice: "$68.00",
                itemRealPrice: "",
                itemDiscount: "",
                itemDescription: "Black Dress is a Dress with elegant and classic models and motifs, suitable for career women. We provide the best quality made of cotton, wool and levis.",
                itemImage: {
                    light : "assets/img/dark/product_img11.jpg",
                    dark : "assets/img/light/product_img11.jpg"
                }
            },  {
                itemName : "Black T-Shirt",
                itemPrice: "$68.00",
                itemRealPrice: "",
                itemDiscount: "",
                itemDescription: "Black T-Shirt is a T-Shirt with classic models and motifs, perfect for traveling to the beach and morning walks. We provide the best quality made of cotton, wool and levis.",
                itemImage: {
                    light : "assets/img/dark/product_img12.jpg",
                    dark : "assets/img/light/product_img12.jpg"
                }
            },  {
                itemName : "Pink Dress",
                itemPrice: "$64.00",
                itemRealPrice : "",
                itemDiscount : "",
                itemDescription : "Pink Dress is a dress with an elegant and fashionable style for 2022. We provide the best quality made from cotton, wool and levis fabrics.",
                itemImage : {
                    light : "assets/img/dark/product_img13.jpg",
                    dark : "assets/img/light/product_img13.jpg"
                }
            },  {
                itemName : "White T-Shirt",
                itemPrice: "$64.00",
                itemRealPrice : "",
                itemDiscount : "",
                itemDescription : "White T-Shirt is a T-Shirt with a model that is suitable for teenage girls. We provide the best quality made of cotton, wool and levis.",
                itemImage : {
                    light : "assets/img/dark/product_img9.jpg",
                    dark : "assets/img/light/product_img9.jpg"
                }
            }
        ]
    },
    "ManProduct": {
        type: "default",
        data: [
            { // 1 | 2
                itemName: "Lether Gray Tuxedo",
                itemPrice: "$43.000,00",
                itemRealPrice: "$45.000,00",
                itemDiscount: "40% Off",
                itemDescription : "The Lether Gray Tuxedo is a suit by the Italian company, Brioni, which was launched during the 2008 economic crisis. Brioni itself has been producing high-quality suits since 1945. No doubt he dared to design this suit and valued it at $43 thousand or the equivalent of 600 million Rupiah.",
                itemImage: {
                    light: "assets/img/dark/product_img2.jpg",
                    dark: "assets/img/light/product_img2.jpg"
                }
            },  { // 5 | 6
                itemName: "Blue Casual Check Shirt",
                itemPrice: "$45.00",
                itemRealPrice: "$65.00",
                itemDiscount: "40% Off",
                itemDescription: "Made from pure cotton decorated in a contemporary take on a charming ombre check, this John Lewis & Partners shirt is an on-trend smart-casual option. It's cut to our redesigned regular fit, which offers flattering shaping through the waist yet is still generous enough in the back panel and box pleat to give you movement where you need it most.",
                itemImage: {
                    light: "assets/img/dark/product_img6.jpg",
                    dark: "assets/img/light/product_img6.jpg"
                }
            },  { // 7 | 8
                itemName: "Men Blue Jins Shirt",
                itemPrice: "$36.00",
                itemRealPrice: "$72.00",
                itemDiscount: "50% Off",
                itemDescription: "With sturdy construction a generous cut and soft garment washing our Value Denim Shirt won't stretch your budget. 6.5-ounce 100% cotton Double-needle stitching throughout Button-down collar Horn-tone buttons Patch pocket Button-through sleeve plackets Adjustable cuffs Tuck-in tail Due to special finishing process colors may vary.",
                itemImage: {
                    light: "assets/img/dark/product_img8.jpg",
                    dark: "assets/img/light/product_img8.jpg"
                }
            },  { // 7 | 8
                itemName: "Red & Black Check Shirt",
                itemPrice: "$55.00",
                itemRealPrice: "",
                itemDiscount: "",
                itemDescription: "Made from pure cotton decorated in a contemporary take on a charming ombre check, this John Lewis & Partners shirt is an on-trend smart-casual option. It's cut to our redesigned regular fit, which offers flattering shaping through the waist yet is still generous enough in the back panel and box pleat to give you movement where you need it most.",
                itemImage: {
                    light: "assets/img/dark/product_img10.jpg",
                    dark: "assets/img/light/product_img10.jpg"
                }
            }
        ]
    },
    "KidsProduct" : {
        type : "default",
        data : [
            {
                itemName: "Light Blue Shirt",
                itemPrice: "$71.29",
                itemRealPrice: "$89.00",
                itemDiscount: "45% Off",
                itemDescription: "He'll look and feel great when he's wearing this Blue Shirt from The Fashion. This blue button-down will instantly take any outfit up a notch — it'll look great paired with jeans for the school day, with khakis for a family dinner out or with a suit for a formal event.",
                itemImage: {
                    light: "assets/img/dark/product_img4.jpg",
                    dark: "assets/img/light/product_img4.jpg"
                }
            },  {
                itemName: "Blue Dress For Girls",
                itemPrice: "$45.00",
                itemRealPrice: "$70.00",
                itemDiscount: "40% Off",
                itemDescription: "He'll look and feel great when he's wearing this Blue Dress from The Fashion. This blue button-down will instantly take any outfit up a notch — it'll look great for the school day, with khakis for a family dinner out or with a suit for a formal event.",
                itemImage: {
                    light: "assets/img/dark/product_img5.jpg",
                    dark: "assets/img/light/product_img5.jpg"
                }
            },  {
                itemName: "Pink Dress For Baby Kids",
                itemPrice: "$55.00",
                itemRealPrice: "",
                itemDiscount: "",
                itemDescription: "He'll look and feel great when he's wearing this Pink Dress from The Fashion. This Pink Dress will instantly take any outfit up a notch — it'll look great for the school day, with khakis for a family dinner out or with a suit for a formal event.",
                itemImage : {
                    light : "assets/img/dark/product_img15.jpg",
                    dark : "assets/img/light/product_img15.jpg"
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
            <div class="card h-100 shadow discount" data-aos="zoom-in-up" data-aos-duration="1000">
                <img id="Product" class="img-product" lightImg="${itemIMGLight}" darkImg="${itemIMGDark}"
                    class="card-img-top Produk" alt="${itemName}" />
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${itemName}</h5>
                    <p>Price : <strong>${itemPrice}</strong> <a style="text-decoration: line-through;">${itemRealPrice}</a>
                        <a style="color:green">${itemDiscount}</a>
                    </p>
                    <button class="btn btn-info d-block mt-auto" onclick="Buy('${itemName}', '${itemPrice}', '${itemRealPrice}', '${itemDiscount}')">Buy</button>
                </div>
            </div>
        `

        const defaultCard = `
        <div class="card h-100 shadow ${itemDiscount !== "" ? "discount" : ""}" data-aos="zoom-in-up" data-aos-duration="3000">
            <img id="Product" class="img-product card-img-top" lightImg="${itemIMGLight}" darkImg="${itemIMGDark}"
                class="card-img-top Produk" alt="${itemName}" width="100%" height="100%" />
            <div class="card-body">
                <h5 class="card-title">${itemName}</h5>
                <p>Price : <strong>${itemPrice}</strong>
                    ${itemDiscount !== "" ? `<a style="text-decoration: line-through;">${itemRealPrice}</a>  <a style="color:green">${itemDiscount}</a>` : ''}
                </p>
                <p class="card-text">${itemDescription}</p>
            </div>
            <a class="btn btn-info d-block" onclick="Buy('${itemName}', '${itemPrice}', '${itemRealPrice}', '${itemDiscount}')">Buy</a>
        </div>
        `

        let card = document.createElement("div");
        card.className = "col";
        card.innerHTML = item[x].type == "default" ? defaultCard : discountCard
        document.getElementById(x).appendChild(card);
    }
}

function Buy(name, price, realprice, discount) {
    if(discount == "") discount = "No Discount";
    if(realprice == "") realprice = price;
    window.open(`https://wa.me/${phoneNumber}?&text=Product%20Name:%20${name}%20Price:%20${price}%0AReal Price:%20${realprice}%0ADiscount:%20${discount}%0A%0AThanks%20BRO!`);
}