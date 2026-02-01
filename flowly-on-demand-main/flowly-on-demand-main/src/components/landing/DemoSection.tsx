import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlassButton } from "@/components/ui/GlassButton";
import { StreamingPayment } from "@/components/ui/StreamingPayment";
import { GradientOrb } from "@/components/ui/GradientOrb";
import { Badge } from "@/components/ui/Badge";
import { 
  Play, 
  CheckCircle2, 
  Smartphone,
  Scan,
  Wallet,
  Receipt
} from "lucide-react";

const steps = [
  {
    icon: Smartphone,
    title: "Discover",
    description: "Find nearby pay-per-use services on the map",
  },
  {
    icon: Scan,
    title: "Enter",
    description: "Walk in or scan QR — detection is automatic",
  },
  {
    icon: Wallet,
    title: "Stream",
    description: "Payment streams per second. Single authorization.",
  },
  {
    icon: Receipt,
    title: "Exit",
    description: "Stop streaming, get instant receipt with CO₂ data",
  },
];

export function DemoSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-dark">
      <GradientOrb color="secondary" size="xl" className="-top-40 right-0 opacity-20" />
      <GradientOrb color="primary" size="md" className="bottom-20 left-10 opacity-15" />

      <div className="container px-6 relative z-10">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Badge variant="secondary" className="mb-4">
            <Play className="w-3.5 h-3.5" />
            Live Demo
          </Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Try <span className="text-gradient-secondary">Streaming</span> Payment
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience real-time micro-payments. Start a session and watch your 
            payment stream per second — just like it works in production.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Steps */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-display font-semibold mb-8">
              How It Works
            </h3>
            
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex gap-4 items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-secondary" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute top-14 left-1/2 -translate-x-1/2 w-px h-8 bg-border" />
                  )}
                </div>
                <div className="pt-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-muted-foreground">
                      0{index + 1}
                    </span>
                    <h4 className="font-semibold">{step.title}</h4>
                  </div>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}

            {/* Benefits */}
            <GlassCard variant="default" className="mt-8">
              <h4 className="font-semibold mb-4">Why Streaming Payments?</h4>
              <ul className="space-y-3">
                {[
                  "No per-transaction confirmations",
                  "Pay exactly for what you use",
                  "Gas fees subsidized by platform",
                  "Instant settlement on exit",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-success shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </motion.div>

          {/* Right: Interactive Demo */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <StreamingPayment
              serviceName="FitZone Gym"
              pricePerMinute={0.05}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
