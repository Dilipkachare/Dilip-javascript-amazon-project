// const products = [{
//   image: "images/products/athletic-cotton-socks-6-pairs.jpg",
//   name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
//   rating: {
//     star: 4.5,
//     count: 87
//   },
//   price: 999
// }, {
//   image: "images/products/intermediate-composite-basketball.jpg",
//   name: "Intermediate Size Basketball",
//   rating: {
//     star: 4,
//     count: 127
//   },
//   price: 1900
// }, {
//   image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
//   name: "Adults Plain Cotton T-Shirt - 2 Pack",
//   rating: {
//     star: 4.5,
//     count: 56
//   },
//   price: 799
// },
// {
//   image: "https://www.ushafans.com/sites/default/files/MicrosoftTeams-image%20%288%29.png",
//   name: "Orient Electric Apex-FX 1200mm Ceiling Fan for Home",
//   rating: {
//     star: 4.5,
//     count: 200
//   },
//   price: 1399
// }, {
//   image: "https://m.media-amazon.com/images/I/6149-ZNfTKL._SY675_.jpg",
//   name: "Nike Women Running Shoes",
//   rating: {
//     star: 4,
//     count: 458
//   },
//   price: 3999
// }, {
//   image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQih3xFt2Bx9MrhEDAYr1qmBi4ey2NRkX_NIZuB4meNN3q2wkTIxEtiCxodMkjdCFsbPwEpFAPe82q3M19SeH5yMH_jYvVTzXenvWBrxHw",
//   name: "Reasal Backpack School Travel Tuition College Multiple Use For 30 L Backpack",
//   rating: {
//     star: 4.5,
//     count: 150
//   },
//   price: 999
// }]
import {cart , AddToCart} from '../data/cart.js';
import{products} from '../data/products1.js';
let productsHTML = ``;
products.forEach((product) => {
  productsHTML = productsHTML + `
    <div class="product-container">
        <div class="product-image-container">
          <img class="product-image" src="${product.image}">
        </div>

        <div class="product-name limit-text-to-2-lines">
          ${product.name}
        </div>

        <div class="product-rating-container">
          <img class="product-rating-stars" src="images/ratings/rating-${product.rating.star * 10}.png">
          <div class="product-rating-count link-primary">
            ${product.rating.count}
          </div>
        </div>

        <div class="product-price">
          ₹${(product.price).toFixed(2)}
        </div>

        <div class="product-quantity-container">
          <select>
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>

        <div class="product-spacer"></div>

        <div class="added-to-cart">
          <img src="images/icons/checkmark.png">
          Added
        </div>

        <button class="add-to-cart-button button-primary js-add-to-button-cart" data-product-id="${product.id}">
          Add to Cart
        </button>
      </div>
    `;
  // console.log(productsHTML);
});

function UpdateCartQuantity(){
let cartQuntity=0;
      cart.forEach((item)=>{
          cartQuntity += item.quantity;
      });
      document.querySelector(`.Adding-cart-quntity`).
      innerHTML=cartQuntity;
      // console.log(cartQuntity);
      // console.log(cart);
}
document.querySelector(`.js-product-grid`).innerHTML = productsHTML;

document.querySelectorAll(`.js-add-to-button-cart`)
  .forEach((button) => {
    button.addEventListener(`click`, () => {
      const productId = button.dataset.productId;
      // console.log(productId);
      // productName;
      AddToCart(productId);
      UpdateCartQuantity();
      
    });
  });
