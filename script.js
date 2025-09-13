// Product data
const products = [
    { name: "T-Shirt", category: "clothing" },
    { name: "Jeans", category: "clothing" },
    { name: "Headphones", category: "electronics" },
    { name: "Smartphone", category: "electronics" },
    { name: "Novel", category: "books" },
    { name: "Cookbook", category: "books" }
  ];
  
  // DOM elements
  const productList = document.getElementById("productList");
  const filter = document.getElementById("filter");
  
  // Function to display products
  function displayProducts(items) {
    productList.innerHTML = ""; // clear before rendering
    items.forEach(product => {
      const div = document.createElement("div");
      div.classList.add("product");
      div.textContent = product.name;
      productList.appendChild(div);
    });
  }
  
  // Initial load (show all)
  displayProducts(products);
  
  // Event listener for filter change
  filter.addEventListener("change", () => {
    const selected = filter.value;
    if (selected === "all") {
      displayProducts(products);
    } else {
      const filtered = products.filter(p => p.category === selected);
      displayProducts(filtered);
    }
  });
  