import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";
import { GlassButton } from "./GlassButton";
import { Badge } from "./Badge";
import { Play, Square, Zap, Leaf, Clock } from "lucide-react";

interface StreamingPaymentProps {
  serviceName?: string;
  pricePerMinute?: number;
  onStart?: () => void;
  onStop?: () => void;
}

export function StreamingPayment({
  serviceName = "Gym Access",
  pricePerMinute = 0.05,
  onStart,
  onStop,
}: StreamingPaymentProps) {
  const [isActive, setIsActive] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [totalPaid, setTotalPaid] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((s) => s + 1);
        setTotalPaid((t) => t + pricePerMinute / 60);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, pricePerMinute]);

  const handleStart = () => {
    setIsActive(true);
    setSeconds(0);
    setTotalPaid(0);
    onStart?.();
  };

  const handleStop = () => {
    setIsActive(false);
    onStop?.();
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins.toString().padStart(2, "0")}:${remainingSecs.toString().padStart(2, "0")}`;
  };

  const energyUsed = (seconds / 60) * 0.015; // kWh estimate
  const co2Saved = energyUsed * 0.4; // kg CO2e saved vs baseline

  return (
    <GlassCard variant={isActive ? "glow" : "default"} className="w-full max-w-md">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-display text-xl font-semibold">{serviceName}</h3>
            <p className="text-sm text-muted-foreground">
              ${pricePerMinute.toFixed(2)}/min
            </p>
          </div>
          <Badge variant={isActive ? "success" : "outline"}>
            {isActive ? (
              <>
                <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                Streaming
              </>
            ) : (
              "Ready"
            )}
          </Badge>
        </div>

        {/* Timer & Payment Display */}
        <div className="text-center py-8">
          <motion.div
            className="text-6xl font-display font-bold text-gradient-primary mb-2"
            key={seconds}
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.1 }}
          >
            {formatTime(seconds)}
          </motion.div>
          <motion.div
            className="text-3xl font-mono text-secondary"
            animate={isActive ? { opacity: [1, 0.7, 1] } : {}}
            transition={{ duration: 1, repeat: Infinity }}
          >
            ${totalPaid.toFixed(4)}
          </motion.div>
          <p className="text-sm text-muted-foreground mt-2">
            {isActive ? "Payment streaming..." : "Start to begin streaming payment"}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-primary mb-1">
              <Clock className="w-4 h-4" />
            </div>
            <p className="text-xs text-muted-foreground">Duration</p>
            <p className="font-mono text-sm">{formatTime(seconds)}</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-secondary mb-1">
              <Zap className="w-4 h-4" />
            </div>
            <p className="text-xs text-muted-foreground">Energy</p>
            <p className="font-mono text-sm">{energyUsed.toFixed(3)} kWh</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-success mb-1">
              <Leaf className="w-4 h-4" />
            </div>
            <p className="text-xs text-muted-foreground">CO₂ Saved</p>
            <p className="font-mono text-sm">{co2Saved.toFixed(3)} kg</p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex gap-3">
          {!isActive ? (
            <GlassButton
              variant="primary"
              size="lg"
              className="flex-1"
              onClick={handleStart}
              glow
            >
              <Play className="w-5 h-5" />
              Start Session
            </GlassButton>
          ) : (
            <GlassButton
              variant="secondary"
              size="lg"
              className="flex-1"
              onClick={handleStop}
            >
              <Square className="w-5 h-5" />
              Stop & Pay
            </GlassButton>
          )}
        </div>
      </div>
    </GlassCard>
  );
}
