import { Promotions } from "@/components/popular/Promotions";
import PromotionCard from "@/components/popular/PromotionCard"
import { useRouter } from "next/router";
import { Categories } from "./Categories";


const CategoryDetail = () => {
  const router = useRouter();
  const { categoryId } = router.query;

  // Find the category based on the categoryId
  const category = Categories.find((cat) => cat.id === Number(categoryId));

  if (!category) {
    // Handle case when category is not found
    return (
      <div className="flex justify-center p-24">
        <h1 className="my-20 text-2xl font-bold text-font_color">
          Category not found
        </h1>
      </div>
    );
  }

  // Get the promotions for the selected category
  const categoryPromotions = Promotions.filter(
    (promotion) => promotion.categoryId === category.id
  );

  return (
    <div className="flex justify-center py-24">
      {/* Rest of the category detail page */}

      <div>
        <h1 className="my-8 text-2xl font-bold text-font_color">{`${category.name}`}</h1>
        <div>
          <div className="grid grid-cols-4 max-[480px]:grid-cols-1 gap-8">
            {categoryPromotions.map((promotion, index) => {
              return <PromotionCard promotion={promotion} key={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetail;
