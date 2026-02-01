import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HeatmapProps {
  data?: number[][];
  className?: string;
}

// Generate sample heatmap data
const generateSampleData = (): number[][] => {
  const rows = 8;
  const cols = 12;
  const data: number[][] = [];
  
  for (let i = 0; i < rows; i++) {
    const row: number[] = [];
    for (let j = 0; j < cols; j++) {
      // Create hotspots
      const centerX = cols / 2;
      const centerY = rows / 2;
      const distance = Math.sqrt(Math.pow(j - centerX, 2) + Math.pow(i - centerY, 2));
      const intensity = Math.max(0, 1 - distance / 5) + Math.random() * 0.3;
      row.push(Math.min(1, intensity));
    }
    data.push(row);
  }
  return data;
};

const getHeatColor = (intensity: number): string => {
  if (intensity > 0.8) return "bg-destructive/80";
  if (intensity > 0.6) return "bg-secondary/80";
  if (intensity > 0.4) return "bg-secondary/60";
  if (intensity > 0.2) return "bg-success/40";
  return "bg-primary/20";
};

export function Heatmap({ data, className }: HeatmapProps) {
  const heatmapData = data || generateSampleData();

  return (
    <div className={cn("glass rounded-xl p-4", className)}>
      <div className="flex flex-col gap-1">
        {heatmapData.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-1">
            {row.map((intensity, colIndex) => (
              <motion.div
                key={`${rowIndex}-${colIndex}`}
                className={cn(
                  "heatmap-cell rounded-sm aspect-square flex-1 min-w-[20px]",
                  getHeatColor(intensity)
                )}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: (rowIndex * heatmapData[0].length + colIndex) * 0.01,
                  duration: 0.3,
                }}
                whileHover={{ scale: 1.2, zIndex: 10 }}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between mt-4 text-xs text-muted-foreground">
        <span>Low activity</span>
        <div className="flex gap-1">
          <div className="w-4 h-4 rounded-sm bg-primary/20" />
          <div className="w-4 h-4 rounded-sm bg-success/40" />
          <div className="w-4 h-4 rounded-sm bg-secondary/60" />
          <div className="w-4 h-4 rounded-sm bg-secondary/80" />
          <div className="w-4 h-4 rounded-sm bg-destructive/80" />
        </div>
        <span>High activity</span>
      </div>
    </div>
  );
}
