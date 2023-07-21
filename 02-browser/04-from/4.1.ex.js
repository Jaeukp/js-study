// function showSelectedProducts() {
//         var selectedProducts = [];
//         var checkboxes =
//           document.querySelectorAll(
//             'input[name="product"]:checked'
//           );
//         for (
//           var i = 0;
//           i < checkboxes.length;
//           i++
//         ) {
//           selectedProducts.push(
//             checkboxes[i].value
//           );
//         }
//         alert(
//           "You selected: " +
//             selectedProducts.join(", ")
//         );
//       }

// function showSelectedProducts() {
//   var selectedProducts = [];
//   var checkboxes = 
//   document.querySelectorAll(
//     ''
//   )
// }

// function showSelectedProducts() {
//   var selectedProducts = [];
//   var selectedPrices = [];
//   var checkboxes = document.querySelectorAll('input[name="product"]:checked');

//   for (var i = 0; i < checkboxes.length; i++) {
//     selectedProducts.push(checkboxes[i].value);
//     selectedPrices.push(parseFloat(checkboxes[i].getAttribute("data-price")));
//   }

//   alert("Selected products: " + selectedProducts.join(", "));
//   // Store the selected prices in a global variable
//   window.selectedPrices = selectedPrices;
// }

// function calculateTotal() {
//   // Check if prices are available
//   if (!window.selectedPrices || window.selectedPrices.length === 0) {
//     alert("Please select products first.");
//     return;
//   }

//   // Calculate the total price
//   var totalPrice = window.selectedPrices.reduce((acc, price) => acc + price, 0);
//   alert("Total price: 원" + totalPrice.toFixed(2));
// }

function calculateTotal() {
  var selectedPrices = [];
  var checkboxes = document.querySelectorAll('input[name="product"]:checked');

  for (var i = 0; i < checkboxes.length; i++) {
    selectedPrices.push(parseFloat(checkboxes[i].getAttribute("data-price")));
  }

  if (selectedPrices.length === 0) {
    alert("Please select products first.");
    return;
  }

  var totalPrice = selectedPrices.reduce((acc, price) => acc + price, 0);
  alert("Total price: " + totalPrice.toFixed(0) + "원");
}