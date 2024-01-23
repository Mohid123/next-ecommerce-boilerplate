import ProductCard from "./ui/productCard";

export default function Home() {
  return (
    <>
      <p className="text-center">Home Page Products:</p>
      <p className="text-xs text-center">Click on <strong>Best Seller</strong> from the menu to test routing</p>
      <div className="flex justify-between">
        <ProductCard/>
      </div>
    </>
  );
}
