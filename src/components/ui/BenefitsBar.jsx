import { useState, useEffect } from "react";
import {
  TruckIcon,
  LockClosedIcon,
  GiftIcon,
} from "@heroicons/react/24/outline";

const BenefitsBar = () => {
  const benefits = [
    {
      icon: TruckIcon,
      title: "Free Worldwide Shipping",
      subtitle: "On orders over $500",
    },
    {
      icon: LockClosedIcon,
      title: "Secure Payment",
      subtitle: "256-bit SSL encryption",
    },
    {
      icon: GiftIcon,
      title: "Luxury Packaging",
      subtitle: "Premium unboxing experience",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    let interval;
    if (isMobile) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % benefits.length);
      }, 3000);
    }

    return () => {
      window.removeEventListener("resize", checkMobile);
      clearInterval(interval);
    };
  }, [isMobile]);

  return (
    <div className="bg-gray-900 text-white py-1 md:py-4 sticky top-0 z-50 shadow-xl">
      <div className="container mx-auto px-4">
        {/* Desktop View */}
        <div className="hidden md:grid grid-cols-3 gap-4 text-center">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-3 py-2"
            >
              <benefit.icon className="w-8 h-8 text-rose-500" />
              <div>
                <p className="font-semibold">{benefit.title}</p>
                <p className="text-sm text-gray-400">{benefit.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="md:hidden">
          <div className="relative h-16 overflow-hidden">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`absolute inset-0 flex items-center gap-3 p-2 transition-all duration-500 ${
                  index === activeIndex
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-full"
                }`}
              >
                <benefit.icon className="w-8 h-8 text-rose-500 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">{benefit.title}</p>
                  <p className="text-xs text-gray-400">{benefit.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Dots Indicator */}
          {/* <div className="flex justify-center mt-2 space-x-2">
            {benefits.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === activeIndex ? "bg-rose-500" : "bg-gray-700"
                }`}
                aria-label={`Benefit ${index + 1}`}
              />
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BenefitsBar;
