import React from "react";

interface LogoProps {
  className?: string;
  size?: "header" | "footer" | "md" | "lg" | "sm";
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  size = "header",
}) => {
  // Desktop header: ~125px to 145px width (prioritizing elegance, balance, and clean luxury agency stature)
  // Mobile header: ~105px to 125px width
  // Footer: slightly larger (~160px to 185px width)
  const isFooter = size === "footer" || size === "lg";

  const sizeClasses = isFooter
    ? "w-[155px] sm:w-[170px] md:w-[180px]"
    : "w-[115px] sm:w-[130px] md:w-[140px]";

  return (
    <img
      src="/images/logo1.png"
      alt="1UpSites"
      className={`h-auto object-contain select-none transition-opacity duration-200 group-hover:opacity-90 ${sizeClasses} ${className}`}
      loading="eager"
      decoding="async"
    />
  );
};
