import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientOrb } from "@/components/ui/GradientOrb";
import { Badge } from "@/components/ui/Badge";
import { 
  Leaf, 
  TrendingDown, 
  Zap, 
  Clock,
  TreePine,
  Car
} from "lucide-react";

const metrics = [
  {
    icon: TrendingDown,
    value: "40%",
    label: "Idle Time Reduction",
    description: "Less energy wasted on unused services",
    color: "primary",
  },
  {
    icon: Zap,
    value: "0.015",
    label: "kWh / User-Minute",
    description: "Industry-leading energy efficiency",
    color: "secondary",
  },
  {
    icon: Clock,
    value: "98.5%",
    label: "Stream Efficiency Ratio",
    description: "Payments active only during actual use",
    color: "accent",
  },
  {
    icon: Leaf,
    value: "2.4t",
    label: "CO₂e Saved Monthly",
    description: "Across all platform users",
    color: "primary",
  },
];

const equivalents = [
  { icon: TreePine, value: 120, label: "Trees planted equivalent" },
  { icon: Car, value: 8500, label: "Car km offset" },
];

export function SustainabilitySection() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-dark">
      <GradientOrb color="primary" size="xl" className="-bottom-40 -right-40 opacity-20" />
      <GradientOrb color="accent" size="md" className="top-20 left-10 opacity-15" />

      <div className="container px-6 relative z-10">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Badge variant="success" className="mb-4">
            <Leaf className="w-3.5 h-3.5" />
            Sustainability Impact
          </Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Every Session <span className="text-gradient-primary">Counts</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Track real environmental impact. Pay-per-use naturally reduces waste and 
            optimizes resource utilization across the entire network.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <GlassCard
              key={index}
              variant="glow"
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div
                className={`w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center ${
                  metric.color === "primary"
                    ? "bg-primary/20 text-primary"
                    : metric.color === "secondary"
                    ? "bg-secondary/20 text-secondary"
                    : "bg-accent/20 text-accent"
                }`}
              >
                <metric.icon className="w-7 h-7" />
              </div>
              <div className="text-4xl font-display font-bold text-gradient-primary mb-1">
                {metric.value}
              </div>
              <h4 className="font-semibold mb-1">{metric.label}</h4>
              <p className="text-sm text-muted-foreground">{metric.description}</p>
            </GlassCard>
          ))}
        </div>

        {/* Equivalents */}
        <motion.div
          className="glass rounded-3xl p-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-center text-xl font-display font-semibold mb-6">
            This Month's Impact Equivalent
          </h3>
          <div className="grid grid-cols-2 gap-8">
            {equivalents.map((eq, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-success/20 text-success mx-auto mb-3 flex items-center justify-center">
                  <eq.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl font-display font-bold text-success mb-1">
                  {eq.value.toLocaleString()}
                </div>
                <p className="text-sm text-muted-foreground">{eq.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
