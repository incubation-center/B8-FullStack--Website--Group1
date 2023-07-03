import { useEffect } from "react";
import PromotionCard from "@/components/popular/PromotionCard";
import { useRouter } from "next/router";
import { TailSpin } from "react-loader-spinner";
import { useRecoilState } from "recoil";
import { promotionsAtom } from "@/state/recoilAtoms";
import CustomPagination from "@/components/pagination/CustomPagination";

const CategoryDetail = ({ data, error }) => {
  const router = useRouter();
  const { categoryId } = router.query;
  const [promotionsCategory, setPromotionsCategory] =
    useRecoilState(promotionsAtom);

  useEffect(() => {
    if (data) {
      setPromotionsCategory(data.data); // Update the state with data.data
    }
  }, [data]);

  console.log(data);

  // useEffect(() => {
  //   if (categoryId && !promotionsCategory) {
  //     // Redirect to 404 page when category is not found
  //     router.push("/404");
  //   }
  // }, [categoryId, promotionsCategory, router]);

  // if (!promotionsCategory) {
  //   // Render a loading spinner or message while redirecting to 404 page
  //   return (
  //     <div className="flex justify-center items-center p-48">
  //       <TailSpin color="#00BFFF" height={80} width={80} />
  //     </div>
  //   );
  // }

  return (
    <div className="py-24">
      <div className="flex justify-center">
        {/* Rest of the category detail page */}
        <div>
          <h1 className="my-8 text-2xl font-bold text-font_color">Food</h1>
          <div>
            <div className="grid grid-cols-4 max-[480px]:grid-cols-1 gap-8">
              {data.data.map((promotion, index) => (
                <PromotionCard promotion={promotion} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <CustomPagination resPerPage={24} promotionsCount={data.totalElements} />
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const urlApi = process.env.API_URL;
  const api_token = process.env.API_TOKEN;
  const { id, page, size } = context.query;

  try {
    const res = await fetch(
      `${urlApi}/promotion/get?category_id=${id}&page=${page || 0}&size=${
        size || 24
      }`,
      {
        headers: {
          "api-token": api_token,
        },
      }
    );

    const data = await res.json();
    console.log(data);

    if (data.status !== 200) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        error: true,
      },
    };
  }
};
export default CategoryDetail;
