import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlassButton } from "@/components/ui/GlassButton";
import { Badge } from "@/components/ui/Badge";
import { Heatmap } from "@/components/ui/Heatmap";
import { 
  MapPin, 
  Wifi, 
  Zap, 
  Car, 
  Dumbbell, 
  Coffee,
  Navigation,
  Star
} from "lucide-react";

const services = [
  {
    id: 1,
    name: "FitZone Gym",
    type: "Gym",
    icon: Dumbbell,
    pricePerMin: 0.05,
    rating: 4.8,
    distance: "0.3 km",
    occupancy: 65,
    co2Rating: "A+",
  },
  {
    id: 2,
    name: "FastCharge Hub",
    type: "EV Charging",
    icon: Zap,
    pricePerMin: 0.12,
    rating: 4.9,
    distance: "0.5 km",
    occupancy: 40,
    co2Rating: "A",
  },
  {
    id: 3,
    name: "CityWiFi Hotspot",
    type: "Wi-Fi",
    icon: Wifi,
    pricePerMin: 0.02,
    rating: 4.5,
    distance: "0.1 km",
    occupancy: 80,
    co2Rating: "A+",
  },
  {
    id: 4,
    name: "ParkSmart Lot",
    type: "Parking",
    icon: Car,
    pricePerMin: 0.08,
    rating: 4.7,
    distance: "0.2 km",
    occupancy: 55,
    co2Rating: "B+",
  },
  {
    id: 5,
    name: "Café Connect",
    type: "Coworking",
    icon: Coffee,
    pricePerMin: 0.04,
    rating: 4.6,
    distance: "0.4 km",
    occupancy: 70,
    co2Rating: "A",
  },
];

export function DiscoverySection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Map Preview */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <Badge variant="primary" className="mb-4">
                <MapPin className="w-3.5 h-3.5" />
                Service Discovery
              </Badge>
              <h2 className="text-4xl font-display font-bold mb-4">
                Find Services <span className="text-gradient-primary">Nearby</span>
              </h2>
              <p className="text-muted-foreground">
                Discover pay-per-use services around you. See real-time occupancy heatmaps 
                and sustainability ratings before you visit.
              </p>
            </div>

            {/* Map placeholder with heatmap overlay */}
            <GlassCard variant="default" className="p-0 overflow-hidden">
              <div className="relative aspect-[4/3] bg-muted/30 rounded-xl overflow-hidden">
                {/* Simulated map grid */}
                <div className="absolute inset-0 grid-pattern opacity-30" />
                
                {/* Heatmap overlay */}
                <div className="absolute inset-4 opacity-80">
                  <Heatmap className="h-full" />
                </div>

                {/* Service pins */}
                {services.slice(0, 3).map((service, index) => (
                  <motion.div
                    key={service.id}
                    className="absolute"
                    style={{
                      top: `${20 + index * 25}%`,
                      left: `${30 + index * 15}%`,
                    }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <div className="relative group cursor-pointer">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-glow-primary">
                        <service.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rotate-45" />
                      
                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <GlassCard variant="glow" className="p-3 whitespace-nowrap text-sm">
                          <p className="font-semibold">{service.name}</p>
                          <p className="text-muted-foreground">${service.pricePerMin}/min</p>
                        </GlassCard>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* User location indicator */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="relative">
                    <div className="w-4 h-4 rounded-full bg-primary animate-pulse" />
                    <div className="absolute inset-0 w-4 h-4 rounded-full bg-primary/30 animate-ping" />
                    <div className="absolute -inset-6 rounded-full border-2 border-primary/30 animate-pulse" />
                  </div>
                </motion.div>

                {/* Navigation button */}
                <div className="absolute bottom-4 right-4">
                  <GlassButton variant="primary" size="sm">
                    <Navigation className="w-4 h-4" />
                    Navigate
                  </GlassButton>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Right: Service List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-display font-semibold">Nearby Services</h3>
              <Badge variant="outline">5 found</Badge>
            </div>

            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard
                  variant="default"
                  className="p-4 cursor-pointer hover:border-primary/50"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold truncate">{service.name}</h4>
                        <Badge variant="success" className="shrink-0 text-[10px] px-2">
                          {service.co2Rating}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span>{service.type}</span>
                        <span>•</span>
                        <span>{service.distance}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Star className="w-3 h-3 fill-secondary text-secondary" />
                          {service.rating}
                        </span>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <p className="font-display font-bold text-primary">
                        ${service.pricePerMin.toFixed(2)}
                      </p>
                      <p className="text-xs text-muted-foreground">per min</p>
                    </div>
                  </div>

                  {/* Occupancy bar */}
                  <div className="mt-3 pt-3 border-t border-border/50">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-muted-foreground">Current occupancy</span>
                      <span className="font-medium">{service.occupancy}%</span>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${
                          service.occupancy > 70 ? "bg-destructive" :
                          service.occupancy > 40 ? "bg-secondary" : "bg-success"
                        }`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${service.occupancy}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      />
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
