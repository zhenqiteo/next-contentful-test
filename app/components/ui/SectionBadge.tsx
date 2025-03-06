interface SectionBadgeProps {
    text: string;
    className?: string;
  }
  
  const SectionBadge = ({ text, className = "" }: SectionBadgeProps) => {
    return (
      <span className={`text-[var(--color-SIB-black)] text-base font-poppins flex items-center font-medium gap-2 ${className}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
        >
          <circle cx="4" cy="4" r="4" fill="#0057E3" />
        </svg>
        {text}
      </span>
    );
  };
  
  export default SectionBadge;