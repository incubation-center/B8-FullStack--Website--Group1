import Image from "next/image";
import Link from "next/link";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import { useEffect } from "react";
import { featureAtom } from "@/state/recoilAtoms";
import { convertTimestamp } from "@/utils/convertTimestamp";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Feature({ featureData, error }) {
  const router = useRouter();

  const [featurePromotions, setFeaturePromotions] = useRecoilState(featureAtom);
  const [scaleImage, setScaleImage] = useState(false);

  useEffect(() => {
    if (featureData) {
      setFeaturePromotions(featureData.data);
    }
  }, [featureData, setFeaturePromotions]);

  const handleScaleImage = () => {
    setScaleImage(!scaleImage);
  };

  return (
    <>
      {error ? (
        () => router.push("/500")
      ) : (
        <div className="mt-28 text-font_color">
          <h2 className="font-bold text-2xl px-2 py-4 pb-8 text-left">
            Hey, check out today{" "}
            <span className="underline underline-offset-8 decoration-softPurple decoration-8">
              hottest promotions
            </span>
          </h2>
          <div className="flex flex-row flex-wrap justify-center items-center">
            {featureData &&
              featureData.data
                .filter(
                  (promotion) =>
                    promotion.user_id === "6495040aff85892caba1d2fd"
                )
                .slice(0, 3)
                .map((promotion, index) => (
                  <PromotionItem key={index} promotion={promotion} />
                ))}
          </div>
        </div>
      )}
    </>
  );
}

function PromotionItem({ promotion }) {
  const [scaleImage, setScaleImage] = useState(false);

  const handleScaleImage = () => {
    setScaleImage(!scaleImage);
  };

  return (
    <div
      className="p-2"
      onMouseEnter={handleScaleImage}
      onMouseLeave={handleScaleImage}
    >
      <Link href={`/promotion/${promotion.id}`}>
        <div className="w-[360px] sm:w-[410px] h-[350px] md:w-[240px] lg:w-[410px]">
          <div className="relative w-full overflow-hidden bg-cover bg-no-repeat rounded-lg">
            <div className="w-full h-[232px] md:h-[180px] lg:h-[232px]">
              <Image
                src={promotion.feature_image_url}
                width={400}
                height={232}
                alt="image"
                className={`${
                  scaleImage ? "scale-105 duration-500" : "duration-500"
                } w-full h-full object-cover rounded-lg`}
              />
            </div>
          </div>
          {/* Rest of the code */}

          <div className="flex flex-col flex-wrap pt-3">
            <div className="flex flex-row">
              <Image
                src="/icon/time.svg"
                width={23}
                height={23}
                alt="timeIcon"
              />
              <p className="pl-2 text-base text-gray">
                {convertTimestamp(promotion.start_date)} -{" "}
                {convertTimestamp(promotion.end_date)}
              </p>
            </div>
            <div className="text-lg font-bold">{promotion.title}</div>
            <div className="text-base">{promotion.location}</div>
            <div className="flex flex-row pt-1 items-center">
              <div className="flex flex-row text-xl">
                <div className="line-through">${promotion.old_price}</div>
                <div className="font-bold px-1">
                  ${promotion.discount_price}
                </div>
              </div>
              <div className="pl-1">
                <div className="bg-lightBlue text-xs text-blue p-1 rounded font-bold">
                  {promotion.discount_percentage}% OFF
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
