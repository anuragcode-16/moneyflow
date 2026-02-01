import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradientOrbProps {
  className?: string;
  color?: "primary" | "secondary" | "accent";
  size?: "sm" | "md" | "lg" | "xl";
  animate?: boolean;
}

export function GradientOrb({
  className,
  color = "primary",
  size = "md",
  animate = true,
}: GradientOrbProps) {
  const colorStyles = {
    primary: "from-primary/30 via-primary/10 to-transparent",
    secondary: "from-secondary/30 via-secondary/10 to-transparent",
    accent: "from-accent/30 via-accent/10 to-transparent",
  };

  const sizeStyles = {
    sm: "w-32 h-32",
    md: "w-64 h-64",
    lg: "w-96 h-96",
    xl: "w-[500px] h-[500px]",
  };

  return (
    <motion.div
      className={cn(
        "absolute rounded-full bg-gradient-radial blur-3xl pointer-events-none",
        colorStyles[color],
        sizeStyles[size],
        animate && "float",
        className
      )}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    />
  );
}
