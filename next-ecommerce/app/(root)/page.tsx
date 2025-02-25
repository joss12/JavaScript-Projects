/* eslint-disable @typescript-eslint/no-unused-vars */
import ProductList from "@/components/shared/product/product-list";
import sampleData from "@/db/sample-data";
import { getLatestProducts } from "@/lib/actions/product.actions";

const Homepage = async () => {
  const latestProducts = await getLatestProducts()
  return (
    <>
      <ProductList title='Newest Arrivals' data={sampleData.products} limit={4} />
    </>
  );
};

export default Homepage;
