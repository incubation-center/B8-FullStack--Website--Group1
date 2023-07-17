import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Members } from "./Members";

const AboutUs = () => {
  return (
    <div className="flex justify-center min-h-screen">
      <div className="my-28">
        <div className="flex flex-col">
          <div className="flex flex-col mt-8">
            <div className="container max-w-7xl px-4">
              <div className="flex flex-wrap justify-center text-center mb-24">
                <div className="w-full lg:w-6/12 px-4">
                  <h1 className="text-gray-900 text-4xl font-bold mb-8">
                    Meet the Team
                  </h1>

                  <p className="text-gray-700 text-lg font-normal	">
                    With over 100 years of combined experience, weve got a
                    well-seasoned team at the helm.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap">
                {Members.map((member) => (
                  <div
                    className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4"
                    key={member.id}
                  >
                    <div className="flex flex-col">
                      <Link href="#" className="mx-auto">
                        <Image
                          className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                          src={member.member_image}
                          width={300}
                          height={300}
                        />
                      </Link>

                      <div className="text-center mt-6">
                        <h1 className="text-font_color text-xl font-bold mb-1">
                          {member.member_name}
                        </h1>

                        <div className="text-gray-700 font-light mb-2">
                          {member.member_title}
                        </div>

                        <div className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300">
                          <a
                            href={member.member_github}
                            className="flex rounded-full hover:bg-indigo-50 h-10 w-10"
                          >
                            <Image
                              className="mx-auto"
                              src="/social_media_icon/github.svg"
                              alt="github"
                              width={28}
                              height={28}
                            />
                          </a>

                          <a
                            href={member.member_linkedin}
                            className="flex rounded-full hover:bg-indigo-50 h-10 w-10"
                          >
                            <Image
                              className="mx-auto"
                              src="/social_media_icon/linkedin.svg"
                              alt="linkedin"
                              width={24}
                              height={24}
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
