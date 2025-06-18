fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then(data => displayProducts(data.products));

function displayProducts(products) {
  const container = document.getElementById('products');
  container.innerHTML = ''; 
  products.forEach(product => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <img src="${product.thumbnail}" alt="${product.title}">
      <h4>${product.title}</h4>
      <p>Price: $${product.price}</p>
      <p>Rating: ${product.rating}</p>
    `;
    container.appendChild(div);
  });
}

function searchProducts() {
  const query = document.getElementById('searchInput').value.trim();
  if (query === '') {
    alert("Search box is empty plz fill .");
    return;
  }
  fetch(`https://dummyjson.com/products/search?q=${query}`)
    .then(res => res.json())
    .then(data => displayProducts(data.products));
}