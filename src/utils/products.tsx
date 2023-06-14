import React, { useEffect, useState } from 'react';

export interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

export async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await fetch(
      'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json'
    );
    const data = await response.json();
    return data.products as Product[];
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  if (!products || !products.length) {
    return null;
  }

  return (
    <div>
      <h1>Lista de Produtos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.productName}>
            <h2>{product.productName}</h2>
            <p>{product.descriptionShort}</p>
            <img src={product.photo} alt={product.productName} />
            <p>Preço: R$ {product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
