import BottomHeader from "@/components/header/BottomHeader";
import Banner from "@/components/pages/home/Banner";
import Product from "@/components/products/Product";

export default function Home() {
  return (
    <main>
      <BottomHeader />
      <Banner />
      <Product/>
    </main>
  );
}
