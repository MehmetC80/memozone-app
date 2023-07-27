import { Banner } from '@/components/banner';
import { Products } from '@/components/products';
import { ProductProps } from '@/type';

// SSR
async function getProducts() {
  const res = await fetch('https://fakestoreapiserver.reactbd.com/tech');

  // Recommendation: handle errors
  if (!res.ok) {
    throw new Error('Daten konnten nicht geladen werden!');
  }

  return res.json();
}

export default async function Home() {
  const data: ProductProps[] = await getProducts();
  return (
    <main>
      <div className='max-w-screen-2xl mx-auto'>
        <Banner />
        <div className='relative md:-mt-20 lgl:-mt-32 xl:-mt-60 z-20 mb-10 '>
          <Products products={data} />
        </div>
      </div>
    </main>
  );
}
