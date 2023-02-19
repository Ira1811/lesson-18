


/* 

let productsCountEl = document.querySelector("#products-count");
let addToCartBtns = document.querySelectorAll(".btn-add-to-cart");

console.log(productsCountEl);
console.log(addToCartBtns);
 */


/* for (let i = 0; i < addToCartBtns.length; i++) {
    addToCartBtns[i].addEventListener("click" ,function (){
        console.log("clicked");
    })
 };
 */

/*  addToCartBtns.forEach((btn) => 
     btn.addEventListener("click", function () {
        let prevProductsCount = +productsCountEl.textContent;
        productsCountEl.textContent = prevProductsCount + 1;
    
     })
     );
 */

     const decrementBtns = document.querySelectorAll(".decrement-button")[0];
     const incrementBtns = document.querySelectorAll(".increment-button")[0];
     const productsInput = document.querySelectorAll(".product-quantity input")[0];

  

     function Counter(incrementBtn, decrementBtn, inputField) {
        this.domRefs = {
            incrementBtn,
            decrementBtn,
            inputField,
        };
        this.toggleButtonState = function () {
            let count = this.domRefs.inputField.value;
            this.domRefs.decrementBtn.disabled = count <= 1;
            this.domRefs.incrementBtn.disabled = count >= 10;
        };
        this.toggleButtonState();

        this.increment = function() {
            console.log(this);
            this.domRefs.inputField.value = +this.domRefs.inputField.value + 1;
        }

        this.decrement = function () {
            this.domRefs.inputField.value = +this.domRefs.inputField.value - 1;
        };

        this.domRefs.incrementBtn.addEventListener(
            "click", 
            this.increment.bind(this)
            );

        this.domRefs.decrementBtn.addEventListener(
            "click",
             this.decrement.bind(this)
             );
    }
    
    const counter1 = new Counter(incrementBtns, decrementBtns, productsInput);
    console.log(counter1);
     
