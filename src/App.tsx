import React, { useCallback, useState, useEffect } from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [randomMetrics, setRandomMetrics] = useState({
    cpu: Math.floor(Math.random() * 100),
    memory: Math.floor(Math.random() * 100),
    network: Math.floor(Math.random() * 100),
    security: Math.floor(Math.random() * 100),
  });
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    const metricsTimer = setInterval(() => {
      setRandomMetrics({
        cpu: Math.floor(Math.random() * 40) + 60, // 60-100
        memory: Math.floor(Math.random() * 30) + 40, // 40-70
        network: Math.floor(Math.random() * 60) + 20, // 20-80
        security: Math.floor(Math.random() * 20) + 80, // 80-100
      });
    }, 2000);
    
    return () => {
      clearInterval(timer);
      clearInterval(metricsTimer);
    };
  }, []);

  const handlePortfolioClick = () => {
    // Open new page
    window.open("https://yourorganization.com", "_blank");
    // Close current page after a short delay
    setTimeout(() => {
      window.close();
    }, 500);
  };

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  // Generate random binary strings
  const generateBinary = (length) => {
    return Array.from({ length }, () => Math.round(Math.random())).join('');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black p-4 overflow-hidden relative">
      {/* Matrix-like particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: {
            enable: false,
            zIndex: -1
          },
          fpsLimit: 60,
          particles: {
            color: {
              value: "#00ff00"
            },
            move: {
              direction: "bottom",
              enable: true,
              outModes: {
                default: "out"
              },
              random: false,
              speed: 2,
              straight: true
            },
            number: {
              density: {
                enable: true,
                area: 800
              },
              value: 100
            },
            opacity: {
              value: 0.7,
              random: true
            },
            shape: {
              type: "char",
              options: {
                char: {
                  value: ["0", "1"]
                }
              }
            },
            size: {
              value: { min: 8, max: 12 }
            }
          },
          detectRetina: true
        }}
        className="absolute inset-0 w-full h-full"
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* System metrics and info */}
      <div className="absolute top-4 left-4 text-green-500 font-mono text-xs z-10">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <Icon icon="lucide:cpu" className="text-green-400" />
            <div className="w-24 h-2 bg-green-900 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-green-500"
                initial={{ width: 0 }}
                animate={{ width: `${randomMetrics.cpu}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <span>{randomMetrics.cpu}%</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon icon="lucide:database" className="text-green-400" />
            <div className="w-24 h-2 bg-green-900 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-green-500"
                initial={{ width: 0 }}
                animate={{ width: `${randomMetrics.memory}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <span>{randomMetrics.memory}%</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon icon="lucide:activity" className="text-green-400" />
            <div className="w-24 h-2 bg-green-900 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-green-500"
                initial={{ width: 0 }}
                animate={{ width: `${randomMetrics.network}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <span>{randomMetrics.network}%</span>
          </div>
        </div>
      </div>
      
      {/* Time and security status */}
      <div className="absolute top-4 right-4 text-green-500 font-mono text-xs z-10">
        <div className="flex flex-col items-end gap-1">
          <div className="flex items-center gap-2">
            <span>{currentTime.toLocaleTimeString()}</span>
            <Icon icon="lucide:clock" className="text-green-400" />
          </div>
          <div className="flex items-center gap-2">
            <span>SECURITY: {randomMetrics.security}%</span>
            <Icon icon="lucide:shield" className={randomMetrics.security > 90 ? "text-green-400" : "text-yellow-400"} />
          </div>
          <div className="flex items-center gap-2">
            <span>STATUS: SECURED</span>
            <Icon icon="lucide:lock" className="text-green-400" />
          </div>
        </div>
      </div>
      
      {/* Binary code blocks */}
      <div className="absolute left-4 bottom-4 text-green-500/30 font-mono text-[8px] z-0 w-1/4 leading-tight">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i}>{generateBinary(40)}</div>
        ))}
      </div>
      
      <div className="absolute right-4 bottom-4 text-green-500/30 font-mono text-[8px] z-0 w-1/4 leading-tight text-right">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i}>{generateBinary(40)}</div>
        ))}
      </div>
      
      {/* Main content */}
      <div className="relative z-10 border border-green-500/50 bg-black/80 p-8 rounded-md w-full max-w-lg">
        <div className="absolute top-0 left-0 w-full h-8 border-b border-green-500/50 flex items-center px-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-green-500 font-mono text-xs">SYSTEM.ACCESS</span>
          </div>
          <div className="ml-auto text-green-500 font-mono text-xs">
            {currentTime.toLocaleDateString()}
          </div>
        </div>
        
        {/* Terminal-like header */}
        <div className="mt-6 mb-8">
          <div className="font-mono text-green-500 text-sm mb-2">
            &gt; ACCESS_VERIFICATION_COMPLETE
          </div>
          <div className="font-mono text-green-500 text-sm mb-2">
            &gt; DOMAIN_STATUS: <span className="text-green-300 font-bold">RESERVED</span>
          </div>
          <div className="font-mono text-green-500 text-sm">
            &gt; AWAITING_COMMAND...
          </div>
        </div>
        
        {/* Main title with glitch effect */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-2 text-green-500 font-mono glitch-text"
            animate={{ 
              x: [0, -2, 0, 2, 0],
              filter: ["blur(0px)", "blur(1px)", "blur(0px)"]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 5,
              repeatType: "loop",
              times: [0, 0.1, 0.2, 0.3, 1]
            }}
          >
            RESERVED
          </motion.h1>
          
          <motion.div 
            className="h-1 w-0 bg-green-500 mx-auto"
            animate={{ width: "100%" }}
            transition={{ duration: 2 }}
          />
        </motion.div>
        
        {/* Button with terminal style */}
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className="font-mono text-green-500 text-sm mb-2">
            &gt; EXECUTE: REDIRECT_TO_PORTFOLIO
          </div>
          
          <Button 
            size="lg"
            className="w-full font-mono text-lg bg-transparent border border-green-500 text-green-500 hover:bg-green-500/20"
            endContent={<Icon icon="lucide:terminal" width={20} />}
            onPress={handlePortfolioClick}
          >
            ACCESS PORTFOLIO
          </Button>
          
          <div className="mt-4 font-mono text-green-500/60 text-xs text-center">
            SECURITY PROTOCOL: CONNECTION ENCRYPTED
          </div>
        </motion.div>
      </div>
      
      {/* Scanning effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/10 to-transparent z-0"
        animate={{ 
          top: ["-100%", "100%"],
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 3,
          ease: "linear"
        }}
      />
    </div>
  );
}