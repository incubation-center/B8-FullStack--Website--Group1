import PopularPromotions from "@/components/popular/PopularPromotions";
import Navbar from "../components/navbar/Navbar";
import UnauthorizeComponent from "@/components/unauthorized/UnauthorizeComponent";
import PromotionForm from "../pages/formCreatePromotion";
export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between `}
    >
      <PromotionForm />
    </main>
  );
}
