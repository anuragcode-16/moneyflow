import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlassButton } from "@/components/ui/GlassButton";
import { GradientOrb } from "@/components/ui/GradientOrb";
import { Badge } from "@/components/ui/Badge";
import { 
  Zap, 
  MapPin, 
  Wallet, 
  BarChart3, 
  Shield, 
  Leaf,
  ArrowRight,
  Play
} from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Location Intelligence",
    description: "Auto-detect presence with Wi-Fi heatmaps, BLE beacons, and GPS geofencing",
    color: "primary" as const,
  },
  {
    icon: Zap,
    title: "Streaming Payments",
    description: "Pay per second/minute with single authorization. No per-transaction friction",
    color: "secondary" as const,
  },
  {
    icon: Wallet,
    title: "Zero Gas Fees",
    description: "Platform subsidizes transaction costs via paymaster & ad revenue",
    color: "accent" as const,
  },
  {
    icon: Leaf,
    title: "Sustainability Metrics",
    description: "Track CO₂e savings, idle time reduction, and energy efficiency per session",
    color: "primary" as const,
  },
  {
    icon: BarChart3,
    title: "Merchant Analytics",
    description: "Occupancy heatmaps, demand prediction, and revenue dashboards",
    color: "secondary" as const,
  },
  {
    icon: Shield,
    title: "Privacy-First",
    description: "Hashed device IDs, opt-in consent, GDPR compliant data handling",
    color: "accent" as const,
  },
];

const stats = [
  { value: "2s", label: "Session Start" },
  { value: "$0.001", label: "Min Payment" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "40%", label: "CO₂ Reduction" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background orbs */}
      <GradientOrb color="primary" size="xl" className="-top-40 -left-40 opacity-50" />
      <GradientOrb color="accent" size="lg" className="top-1/4 right-0 opacity-30" />
      <GradientOrb color="secondary" size="md" className="bottom-20 left-1/4 opacity-40" />

      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="primary" className="text-sm">
              <Leaf className="w-3.5 h-3.5" />
              Sustainable Pay-Per-Use Infrastructure
            </Badge>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            className="text-5xl md:text-7xl font-display font-bold leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-foreground">Pay Only For</span>
            <br />
            <span className="text-gradient-primary">What You Use</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Stream micro-payments per second to shared services. 
            Gyms, EV chargers, Wi-Fi, parking — all usage-aware with zero friction.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <GlassButton variant="primary" size="lg" glow>
              <Play className="w-5 h-5" />
              Start Using Now
            </GlassButton>
            <GlassButton variant="ghost" size="lg">
              For Merchants
              <ArrowRight className="w-5 h-5" />
            </GlassButton>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-gradient-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
    </section>
  );
}

export function FeaturesSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <GradientOrb color="primary" size="lg" className="top-0 right-0 opacity-20" />
      
      <div className="container px-6">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Badge variant="secondary" className="mb-4">
            <Zap className="w-3.5 h-3.5" />
            Platform Features
          </Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Everything You Need
          </h2>
          <p className="text-lg text-muted-foreground">
            A complete platform for usage-based access and payments across any shared service
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <GlassCard
              key={index}
              variant="default"
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  feature.color === "primary"
                    ? "bg-primary/20 text-primary"
                    : feature.color === "secondary"
                    ? "bg-secondary/20 text-secondary"
                    : "bg-accent/20 text-accent"
                }`}
              >
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
