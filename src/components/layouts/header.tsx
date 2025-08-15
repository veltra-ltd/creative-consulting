"use client";

import { useState, useEffect, useRef, type FC } from "react";
import type { HeaderData } from "@/types/lang";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";
import {
  FaFacebook,
  FaGoogle,
  FaGlobe,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { MdMail, MdPhone } from "react-icons/md";
import gsap from "gsap";

import { List } from "../ui/list";
import { ListItem } from "../ui/list-item";
import { Flex } from "../ui/flex";
import { cn } from "@/lib/utils/cn";

const iconMap = {
  FaFacebook: <FaFacebook />,
  FaGoogle: <FaGoogle />,
  FaLinkedin: <FaLinkedin />,
  FaYoutube: <FaYoutube />,
  FaGlobe: <FaGlobe />,
  MdMail: <MdMail />,
  MdPhone: <MdPhone />,
};

const languages = [
  { code: "en", label: "🇬🇧 English" },
  { code: "bn", label: "🇧🇩 Bengali" },
  { code: "hi", label: "🇮🇳 Hindi" },
];

const Header: FC<{ data: HeaderData; className?: string }> = ({
  data,
  className = "",
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const dropdownRef = useRef<HTMLUListElement>(null);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);

  const [selectedLang, setSelectedLang] = useState(
    pathname.split("/")[1] || "en"
  );
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    const handleResize = () => setIsMobile(mq.matches);
    handleResize();
    mq.addEventListener("change", handleResize);
    return () => mq.removeEventListener("change", handleResize);
  }, []);

  // Scroll state
  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        !(e.target as HTMLElement).closest(".language-toggle")
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Dropdown animation
  useEffect(() => {
    if (!isMobile && isDropdownOpen && dropdownRef.current) {
      gsap.fromTo(
        dropdownRef.current,
        { opacity: 0, x: -10 },
        { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [isDropdownOpen, isMobile]);

  const changeLanguage = (lang: string) => {
    const segments = pathname.split("/").filter(Boolean);
    if (languages.some((l) => l.code === segments[0])) segments.shift();
    const newPath = `/${lang}/${segments.join("/")}`;
    router.push(newPath);
    setSelectedLang(lang);
    setIsDropdownOpen(false);
  };

  const openDropdown = () => {
    if (!isMobile) {
      if (dropdownTimeout.current) {
        clearTimeout(dropdownTimeout.current);
      }
      setIsDropdownOpen(true);
    }
  };

  const closeDropdown = () => {
    if (!isMobile) {
      dropdownTimeout.current = setTimeout(() => {
        setIsDropdownOpen(false);
      }, 150);
    }
  };

  const currentLanguageLabel =
    languages.find((l) => l.code === selectedLang)?.label ?? "🌐";

  return (
    <header
      className={cn(
        "top-0 w-full z-[9999999] transition-all duration-300",
        hasScrolled
          ? "shadow-lg bg-black/90 backdrop-blur-sm py-2"
          : "bg-black py-3",
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <Flex
          direction="col"
          className=" flex-row items-center sm:justify-between justify-center gap-4"
        >
          {/* Social Links */}
          <nav className="flex items-center space-x-4">
            {data.left.map((item, idx) => (
              <Link
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.title}
                className="text-white/80 hover:text-white transition-colors duration-200 text-lg"
              >
                {iconMap[item.icon as keyof typeof iconMap]}
              </Link>
            ))}
          </nav>

          {/* Contact + Language */}
          <Flex
            wrap="wrap"
            justify="center"
            align="center"
            gap="gap-x-6 gap-y-2"
          >
            {data.right.map((item, idx) => (
              <Link
                key={idx}
                href={item.link}
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                aria-label={item.title}
              >
                <span className="text-base sm:text-lg">
                  {iconMap[item.icon as keyof typeof iconMap]}
                </span>
                <span className="hidden sm:inline-block">{item.title}</span>
              </Link>
            ))}

            {/* Language Selector */}
            <div
              className="relative language-toggle cursor-pointer"
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
            >
              <button
                onClick={() => isMobile && setIsDropdownOpen((prev) => !prev)}
                className="flex items-center gap-1 text-white/80 hover:text-white transition duration-200 text-sm sm:text-base"
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
              >
                {currentLanguageLabel}
                <IoIosArrowDown
                  className={cn("transition-transform duration-200", {
                    "rotate-180": isDropdownOpen,
                  })}
                />
              </button>

              <List
                ref={dropdownRef}
                className={cn(
                  "absolute right-0 mt-2 w-40 bg-white rounded-md shadow-xl z-[9999]",
                  isDropdownOpen ? "block" : "hidden"
                )}
                role="menu"
              >
                {languages.map((lang) => (
                  <ListItem
                    key={lang.code}
                    className={cn(
                      "px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors duration-150",
                      selectedLang === lang.code && "bg-gray-50 font-medium"
                    )}
                    onClick={() => changeLanguage(lang.code)}
                    role="menuitem"
                  >
                    {lang.label}
                  </ListItem>
                ))}
              </List>
            </div>
          </Flex>
        </Flex>
      </div>
    </header>
  );
};

export default Header;
