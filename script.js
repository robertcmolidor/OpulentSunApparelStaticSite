function calculatePrice() {
    // Get the input values
    const stitches = document.getElementById("stitches").value;
    const quantity = document.getElementById("quantity").value;
    const personalization = document.getElementById("personalization").value;
    const item = document.getElementById("item").value;
  
    // Calculate the embroidery price based on the number of stitches
    let embroideryPrice;
    if (stitches <= 10000) {
      embroideryPrice = 8.5;
    } else {
      embroideryPrice = 8.5 + ((stitches - 10000) / 1000) * 0.6;
    }
  
    // Calculate the quantity discount
    let discount;
    if (quantity >= 150) {
      discount = 0.8;
    } else if (quantity >= 75) {
      discount = 0.9;
    } else if (quantity >= 30) {
      discount = 0.95;
    } else if (quantity >= 15) {
      discount = 0.97;
    } else if (quantity >= 8) {
      discount = 0.98;
    } else {
      discount = 1;
    }
  
    // Calculate the additional charges
    let additionalCharges = 0;
    if (personalization === "one-line") {
      additionalCharges += 6;
    } else if (personalization === "two-lines") {
      additionalCharges += 7.5;
    }
  
    if (item === "towels" || item === "robes" || item === "sweaters" || item === "fleece") {
      additionalCharges += 0.35;
    } else if (item === "bags") {
      additionalCharges += 0.5;
    }
  
    if (item === "puff") {
      additionalCharges += 1.5;
    }
  
    // Calculate the total price
    const totalPrice = embroideryPrice * discount * quantity + additionalCharges;
  
    // Display the total price
    document.getElementById("total-price").innerHTML = "$" + totalPrice.toFixed(2);
  }
  