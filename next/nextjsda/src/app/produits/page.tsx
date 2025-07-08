export const revalidate = 60;

type Product = {
  id: number;
  name: string;
};

async function getProducts(): Promise<Product[]> {
  const res = await fetch("http://localhost:8082/api/v1/products");
  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div>
      <h1>Liste des Produits</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <a href={`/produits/${product.id}`}>{product.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
