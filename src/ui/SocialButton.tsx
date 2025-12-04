import { LucideIcon } from "lucide-react";

interface SocialButtonProps {
  href: string;
  icon: LucideIcon;
  label: string;
  colorClass: string;
  disabled?: boolean;
}

export default function SocialButton({
  href,
  icon: Icon,
  label,
  colorClass,
  disabled = false,
}: SocialButtonProps) {
  const Component = disabled ? "div" : "a";
  
  return (
    <Component
      {...(!disabled && {
        href,
        target: "_blank",
        rel: "noopener noreferrer",
      })}
      className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border transition-all duration-200 font-medium text-sm ${colorClass} ${
        disabled ? "" : "hover:scale-105"
      }`}
    >
      <Icon className="w-5 h-5" />
      <span>{label}</span>
    </Component>
  );
}