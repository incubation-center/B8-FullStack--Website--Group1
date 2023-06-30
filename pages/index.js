import React from "react";
import { useEffect } from "react";
import PopularPromotions from "@/components/popular/PopularPromotions";
import Navbar from "../components/navbar/Navbar";
import UnauthorizeComponent from "@/components/unauthorized/UnauthorizeComponent";
import PromotionForm from "../pages/formCreatePromotion";
import Category from "../components/category-feature/Categories";
import HotPromotion from "../components/category-feature/Feature";
import Feature from "../components/category-feature/Feature";

export default function Home({ featureData, promotionsData, categoryData }) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between `}
    >
      <Feature featureData={featureData} />
      <Category categoryData={categoryData} />

      <PopularPromotions promotionsData={promotionsData} />
    </main>
  );
}
export const getServerSideProps = async ({ query }) => {
  const urlApi = process.env.API_URL;
  const api_token = process.env.API_TOKEN;
  const page = query.page || 0;
  const size = query.size || 24;
  const category_Id = "647975468e324646630dae67";

  try {
    const [featureRes, promotionsRes, categoryRes] = await Promise.all([
      fetch(
        `${urlApi}/promotion/get?category_Id=647975468e324646630dae69&size=24&page=1`,
        {
          headers: {
            "api-token": `${api_token}`,
          },
        }
      ),
      fetch(`${urlApi}/promotion/get?category_Id=&page=${page}&size=${size}`, {
        headers: {
          "api-token": `${api_token}`,
        },
      }),
      fetch(`${urlApi}/category`, {
        headers: {
          "api-token": `${api_token}`,
        },
      }),
    ]);

    console.log(featureRes.status);
    console.log(promotionsRes.status);
    console.log(categoryRes.status);

    const [featureData, promotionsData, categoryData] = await Promise.all([
      featureRes.json(),
      promotionsRes.json(),
      categoryRes.json(),
    ]);

    return {
      props: {
        featureData,
        promotionsData,
        categoryData,
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
