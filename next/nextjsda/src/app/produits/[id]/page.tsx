type Product = {
    id: number;
    name: string;
    price: number;
  };
  
  async function getProduct(id: string): Promise<Product> {
    const res = await fetch(`http://localhost:8082/api/v1/products/${id}`);
    return res.json();
  }
  
  export default async function ProductPage({ params }: { params: { id: string } }) {
    const product = await getProduct(params.id);
  
    return (
      <div>
        <h1>{product.name}</h1>
        <p>Prix: {product.price} F</p>
        <a href="/produits">← Retour à la liste</a>
      </div>
    );
  }
  