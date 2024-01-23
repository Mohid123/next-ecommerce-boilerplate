import ProductCard from "@/app/ui/productCard";

export default function Page() {
    return(
        <>
            <p className="text-center">Best Selling Products:</p>
            <div className="flex justify-between">
                <ProductCard/>
            </div>
        </>
    )
}