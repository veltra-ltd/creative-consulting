"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
// import { motion, useAnimation, useInView } from "framer-motion";
// import * as THREE from "three";
import { SupportedLang } from "@/types/lang";
// import CountryOverview from "@/components/screens/country/overview";
// import CountryServices from "@/components/screens/country/services";
// import CountryCapabilities from "@/components/screens/country/capabilities";
// import CountryCaseStudies from "@/components/screens/country/case-studies";
// import CountryContact from "@/components/screens/country/contact";
import { CountryPageData } from "@/types/country";
import CountryHero from "@/components/screens/country/hero";
import { getCountryData } from "@/lib/country-data";
import ThreeJsGlobe from "@/components/ui/three-js-globe";
import CountryServices from "@/components/screens/country/services";
import CountryCapabilities from "@/components/screens/country/capabilities";
import CountryCaseStudies from "@/components/screens/country/case-studies";
import CountryContact from "@/components/screens/country/contact";
import CountryOverview from "@/components/screens/country/overview";

const CountryPage = () => {
  const params = useParams();
  const country = params.country as string;
  const lang = params.lang as SupportedLang;
  const [countryData, setCountryData] = useState<CountryPageData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCountryData(country, lang);
        setCountryData(data);
      } catch (error) {
        console.error("Error fetching country data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [country, lang]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!countryData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Country Not Found
          </h1>
          <p className="text-gray-600">We don&apos;t have data for {country} yet.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <CountryHero data={countryData.hero} countryName={country} />

      <ThreeJsGlobe countryName={country} />

      <CountryOverview data={countryData.overview} countryName={country} />

      <CountryServices data={countryData.services} countryName={country} />

      <CountryCapabilities
        data={countryData.capabilities}
        countryName={country}
      />

      <CountryCaseStudies
        data={countryData.caseStudies}
        countryName={country}
      />

      <CountryContact data={countryData.contact} countryName={country} />
    </div>
  );
};

export default CountryPage;
