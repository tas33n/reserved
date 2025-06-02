import React, { useCallback } from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function App() {
  const handlePortfolioClick = () => {
    window.open("https://tas33n.is-a.dev", "_blank");
    setTimeout(() => {
      window.close();
    }, 500);
  };

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 p-4 overflow-hidden relative">
      {/* Particles background */}
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
              value: "#ffffff"
            },
            move: {
              direction: "bottom",
              enable: true,
              outModes: {
                default: "out"
              },
              random: false,
              speed: 3,
              straight: false
            },
            number: {
              density: {
                enable: true,
                area: 800
              },
              value: 80
            },
            opacity: {
              value: 0.5
            },
            shape: {
              type: "circle"
            },
            size: {
              value: { min: 1, max: 5 }
            }
          },
          detectRetina: true
        }}
        className="absolute inset-0 w-full h-full"
      />

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-blue-500/30 animate-gradient-x" />
      
      {/* Floating text with gradient */}
      <motion.div 
        className="text-center mb-16 z-10"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          duration: 1,
          ease: "easeOut"
        }}
      >
        <motion.h1 
          className="text-6xl md:text-8xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-300 to-pink-400 animate-gradient-x"
          animate={{ 
            y: [0, -15, 0],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 6,
            ease: "easeInOut"
          }}
        >
          Reserved
        </motion.h1>
      </motion.div>
      
      {/* Floating button with dripping effect */}
      <motion.div
        className="z-10 relative"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          delay: 0.5,
          duration: 1,
          ease: "easeOut"
        }}
      >
        <motion.div
          animate={{ 
            y: [0, 10, 0],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 4,
            ease: "easeInOut",
            repeatType: "reverse"
          }}
        >
          <Button 
            size="lg"
            color="primary" 
            className="font-medium px-8 py-6 text-lg relative overflow-visible bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 border-none shadow-xl"
            endContent={<Icon icon="lucide:external-link" width={24} />}
            onPress={handlePortfolioClick}
          >
            Visit My Portfolio
            
            {/* Dripping effect */}
            <motion.div 
              className="absolute -bottom-8 left-1/4 w-2 h-8 bg-blue-500 rounded-b-full origin-top"
              animate={{ 
                scaleY: [0, 1, 0],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 2,
                ease: "easeInOut",
                delay: 1,
                repeatDelay: 3
              }}
            />
            <motion.div 
              className="absolute -bottom-12 left-2/4 w-2 h-12 bg-purple-500 rounded-b-full origin-top"
              animate={{ 
                scaleY: [0, 1, 0],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 2.5,
                ease: "easeInOut",
                delay: 2,
                repeatDelay: 4
              }}
            />
            <motion.div 
              className="absolute -bottom-10 left-3/4 w-2 h-10 bg-pink-500 rounded-b-full origin-top"
              animate={{ 
                scaleY: [0, 1, 0],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 2.2,
                ease: "easeInOut",
                delay: 0.5,
                repeatDelay: 3.5
              }}
            />
          </Button>
        </motion.div>
      </motion.div>
      
      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/20 z-0"
          style={{
            width: Math.random() * 100 + 50,
            height: Math.random() * 100 + 50,
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 80 + 10}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            repeat: Infinity,
            duration: Math.random() * 10 + 10,
            ease: "easeInOut",
            repeatType: "reverse"
          }}
        />
      ))}
    </div>
  );
}