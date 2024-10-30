import { CartCounter } from "@/shopping-cart/components/CartCounter";


export const metadata = {
  title: "Counter Page",
  description: "Simple page to set a counter",
}


export default function CounterPage() {

  return (
    <div className="p-2 flex flex-col items-center justify-center w-full h-full">
      <span>Cart Porducts</span>
      <CartCounter/>
    </div>
  );
}
