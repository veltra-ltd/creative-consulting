import Main from "@/components/screens/country/main";
import getLangData from "@/lib/translator/getLangData";
import { CCSLContent, CountryService } from "@/types/country";
import { SupportedLang } from "@/types/lang";

const CCSLResearchPage = async ({
  params,
}: {
  params: Promise<{ lang: SupportedLang; country: string }>;
}) => {
  const { lang, country } = await params;
  // Fetch data on the server
  const data: CCSLContent = await getLangData(lang, `screen/country/main`);
  const countryData: CountryService = await getLangData(
    lang,
    `screen/country/name/${country}`
  );

  return (
    <div className="bg-white">
      <Main data={data} countryData={countryData} />
    </div>
  );
};

export default CCSLResearchPage;
