import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlassButton } from "@/components/ui/GlassButton";
import { Badge } from "@/components/ui/Badge";
import { Heatmap } from "@/components/ui/Heatmap";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  DollarSign,
  Zap,
  Clock,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";

const dashboardStats = [
  {
    label: "Today's Revenue",
    value: "$1,247.50",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
  },
  {
    label: "Active Sessions",
    value: "47",
    change: "+8",
    trend: "up",
    icon: Users,
  },
  {
    label: "Avg Session Time",
    value: "34 min",
    change: "-2 min",
    trend: "down",
    icon: Clock,
  },
  {
    label: "Energy Saved",
    value: "12.4 kWh",
    change: "+18%",
    trend: "up",
    icon: Zap,
  },
];

const recentSessions = [
  { user: "u_0x9f...a2c", service: "Gym Hall A", duration: "45 min", amount: "$2.25", status: "completed" },
  { user: "u_0x3d...f8e", service: "EV Charger #3", duration: "28 min", amount: "$3.36", status: "active" },
  { user: "u_0x7b...1cd", service: "Gym Hall B", duration: "12 min", amount: "$0.60", status: "active" },
  { user: "u_0x2a...e5f", service: "Wi-Fi Zone", duration: "67 min", amount: "$1.34", status: "completed" },
];

export function MerchantDashboard() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container px-6">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Badge variant="secondary" className="mb-4">
            <BarChart3 className="w-3.5 h-3.5" />
            Merchant Portal
          </Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Powerful <span className="text-gradient-secondary">Analytics</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real-time occupancy heatmaps, demand prediction, and revenue tracking.
            Everything you need to optimize your shared services.
          </p>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          className="glass rounded-3xl p-6 md:p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-2xl font-display font-bold">FitZone Gym</h3>
              <p className="text-muted-foreground">Dashboard Overview</p>
            </div>
            <div className="flex gap-3">
              <GlassButton variant="ghost" size="sm">
                Last 7 Days
              </GlassButton>
              <GlassButton variant="primary" size="sm">
                <TrendingUp className="w-4 h-4" />
                Export Report
              </GlassButton>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {dashboardStats.map((stat, index) => (
              <GlassCard
                key={index}
                variant="solid"
                hover={false}
                className="p-4"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className={`flex items-center gap-1 text-sm ${
                    stat.trend === "up" ? "text-success" : "text-destructive"
                  }`}>
                    {stat.trend === "up" ? (
                      <ArrowUpRight className="w-4 h-4" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4" />
                    )}
                    {stat.change}
                  </div>
                </div>
                <div className="text-2xl font-display font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </GlassCard>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Heatmap */}
            <GlassCard variant="solid" hover={false} className="p-4">
              <h4 className="font-semibold mb-4">Live Occupancy Heatmap</h4>
              <Heatmap />
              <div className="flex items-center justify-between mt-4 text-sm">
                <span className="text-muted-foreground">Peak zone: Hall A Center</span>
                <Badge variant="primary">65% Capacity</Badge>
              </div>
            </GlassCard>

            {/* Recent Sessions */}
            <GlassCard variant="solid" hover={false} className="p-4">
              <h4 className="font-semibold mb-4">Recent Sessions</h4>
              <div className="space-y-3">
                {recentSessions.map((session, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg bg-muted/30"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-sm truncate">{session.user}</span>
                        {session.status === "active" && (
                          <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{session.service}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-primary">{session.amount}</div>
                      <div className="text-xs text-muted-foreground">{session.duration}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </div>

          {/* Demand Prediction */}
          <GlassCard variant="solid" hover={false} className="mt-6 p-4">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold">Predicted Demand (Next 24h)</h4>
              <Badge variant="outline">ML Powered</Badge>
            </div>
            <div className="h-32 flex items-end gap-1">
              {Array.from({ length: 24 }).map((_, index) => {
                const height = 20 + Math.sin(index / 3) * 40 + Math.random() * 30;
                const isPeak = height > 70;
                return (
                  <motion.div
                    key={index}
                    className={`flex-1 rounded-t ${isPeak ? "bg-secondary" : "bg-primary/60"}`}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.02, duration: 0.3 }}
                  />
                );
              })}
            </div>
            <div className="flex justify-between mt-2 text-xs text-muted-foreground">
              <span>12 AM</span>
              <span>6 AM</span>
              <span>12 PM</span>
              <span>6 PM</span>
              <span>12 AM</span>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
