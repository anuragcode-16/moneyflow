import { motion } from "framer-motion";
import { GlassButton } from "@/components/ui/GlassButton";
import { GradientOrb } from "@/components/ui/GradientOrb";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <GradientOrb color="primary" size="xl" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30" />
      
      <div className="container px-6 relative z-10">
        <motion.div
          className="glass-glow rounded-3xl p-12 md:p-16 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <Badge variant="primary" className="mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Get Started Today
          </Badge>
          
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Ready to{" "}
            <span className="text-gradient-primary">Transform</span>
            <br />
            Your Services?
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Join the usage-aware revolution. Start streaming payments, 
            reduce waste, and unlock new revenue with pay-per-use infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <GlassButton variant="primary" size="lg" glow>
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </GlassButton>
            <GlassButton variant="ghost" size="lg">
              Schedule Demo
            </GlassButton>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            No credit card required • Setup in 5 minutes • Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}
