import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import BaseLayout from "../../layout/Base/BaseLayout";
import { useTranslation } from "react-i18next";
const Home = () => {
  const [settings, setSettings] = useState<{ name: string; content: string }[]>([]);
  useEffect(() => {
    fetch("/api/settings/")
      .then((res) => res.json())
      .then((data) => setSettings(data));
  }, []);

  const { t } = useTranslation();
  return (
    <BaseLayout>
      {/* Hero image */}
      <section className="h-full bg-background-50 rounded-md p-4 flex md:flex-row gap-x-4 flex-col gap-y-8 w-full justify-center" data-aos="fade-up" data-aos-duration="200">
        <div className="flex flex-col gap-y-10 w-full">
          <span className="text-4xl font-semibold text-text-800 text-center">{t("👋Hi, my name is Habibi.")}</span>
          {settings?.filter((setting) => setting?.name == "introduction")[0]?.content ? (
            <p className={`font-medium text-justify text-lg`} data-aos="zoom-in" data-aos-duration="1000">
              {t(settings?.filter((setting) => setting?.name == "introduction")[0]?.content)}
            </p>
          ) : (
            <div className="flex flex-col gap-y-3">
              {[0, 1, 3].map((val) => (
                <div className="animate-pulse flex flex-row" key={val}>
                  <div className="bg-text-200 h-2 rounded-full w-2/5"></div>
                  <div className="w-full bg-text-200 h-2 rounded-full"></div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </BaseLayout>
  );
};

export default Home;
