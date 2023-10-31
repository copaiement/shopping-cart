// Use Mock.shop API (shopify)
// https://mock.shop/products

export async function fetchItems(qty) {
  const request = await fetch(`https://mock.shop/api?query={products(first:%20${qty}){edges%20{node%20{id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}`)
  const response = await request.json();
  const edgesArr = response.data.products.edges;
  const prodArr = [];
  edgesArr.forEach((item) => prodArr.push(item.node));
  return prodArr;
}