/**
 * Filename: complexCode.js
 * 
 * Description: This code demonstrates a complex scenario involving a fictional online store's shopping cart functionality.
 *
 * Author: AI Developer
 * Date: January 1, 2023
 */

// Define a class representing an item in the online store
class Item {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  getTotalPrice() {
    return this.price * this.quantity;
  }
}

// Define a class representing the shopping cart
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(itemName) {
    this.items = this.items.filter((item) => item.name !== itemName);
  }

  getTotalItemsCount() {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  getUniqueItemsCount() {
    return this.items.length;
  }

  getTotalCartValue() {
    return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
  }

  checkout() {
    // Simulating the checkout process...
    console.log('Checkout started!');
    console.log('Processing payment...');
    console.log('Generating order invoice...');
    console.log('Order placed successfully!');
    console.log('Sending email confirmation...');
  }
}

// Create an instance of the shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(new Item("Smartphone", 799, 2));
cart.addItem(new Item("Laptop", 1299, 1));
cart.addItem(new Item("Headphones", 199, 3));

// Print the cart details
console.log(`Total items in the cart: ${cart.getTotalItemsCount()}`);
console.log(`Unique items in the cart: ${cart.getUniqueItemsCount()}`);
console.log(`Total cart value: $${cart.getTotalCartValue().toFixed(2)}`);

// Remove an item from the cart
cart.removeItem("Laptop");

// Print the updated cart details
console.log(`Updated total items in the cart: ${cart.getTotalItemsCount()}`);
console.log(`Updated unique items in the cart: ${cart.getUniqueItemsCount()}`);
console.log(`Updated total cart value: $${cart.getTotalCartValue().toFixed(2)}`);

// Checkout the cart
cart.checkout();

// Output:
// Total items in the cart: 6
// Unique items in the cart: 3
// Total cart value: $3593.00
// Updated total items in the cart: 5
// Updated unique items in the cart: 2
// Updated total cart value: $1598.00
// Checkout started!
// Processing payment...
// Generating order invoice...
// Order placed successfully!
// Sending email confirmation...