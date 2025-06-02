import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useTexture, Sphere } from "@react-three/drei";
import { Spinner, Alert, Image, Button } from "@heroui/react";
import { Icon } from "@iconify/react";

// Material sphere component
const MaterialSphere = () => {
  // Use a try-catch block to handle texture loading errors
  try {
    const [
      baseColor,
      normalMap,
      roughnessMap,
      metalnessMap,
    ] = useTexture([
      '/textures/basecolor.jpg',
      '/textures/normal.jpg',
      '/textures/roughness.jpg',
      '/textures/metalness.jpg',
    ]);

    return (
      <Sphere args={[1, 64, 64]} position={[0, 0, 0]}>
        <meshStandardMaterial
          map={baseColor}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
          metalnessMap={metalnessMap}
          envMapIntensity={1}
        />
      </Sphere>
    );
  } catch (error) {
    // Fallback to a basic material if textures fail to load
    console.error("Error loading textures:", error);
    return (
      <Sphere args={[1, 64, 64]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#6366f1" roughness={0.5} metalness={0.5} />
      </Sphere>
    );
  }
};

// Fallback component for loading state
const MaterialSphereWithFallback = () => {
  return (
    <Suspense fallback={
      <div className="h-full w-full flex items-center justify-center bg-content2">
        <Spinner size="lg" color="primary" label="Loading 3D materials..." />
      </div>
    }>
      <MaterialSphere />
    </Suspense>
  );
};

// Static image fallback component
const StaticMaterialDisplay = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-content2">
      <div className="relative w-full h-full">
        <Image
          src="https://img.heroui.chat/ai?w=800&h=500&u=material-texture-3d"
          alt="3D Material Visualization"
          className="object-cover w-full h-full"
          removeWrapper
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 text-white p-6">
          <h3 className="text-xl font-medium mb-2">3D Material Preview</h3>
          <p className="text-center mb-4 max-w-md">
            Interactive 3D preview is not available on your device. This is a static representation of our material.
          </p>
          <Button 
            color="primary" 
            variant="solid"
            startContent={<Icon icon="lucide:download" />}
          >
            Download Material Specs
          </Button>
        </div>
      </div>
    </div>
  );
};

// Modified MaterialShowcase component that doesn't use WebGL
export const MaterialShowcase = () => {
  const [supportsWebGL, setSupportsWebGL] = useState(true);
  const [shouldUseWebGL, setShouldUseWebGL] = useState(false);
  
  useEffect(() => {
    // Check if WebGL is supported
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      
      // If WebGL is supported, we'll still default to the static version
      // but give users the option to enable 3D if they want
      setSupportsWebGL(!!gl);
      setShouldUseWebGL(false); // Default to static version
    } catch (e) {
      setSupportsWebGL(false);
      setShouldUseWebGL(false);
    }
  }, []);
  
  // Show the static version by default
  if (!shouldUseWebGL) {
    return (
      <div className="relative h-full">
        <StaticMaterialDisplay />
        {supportsWebGL && (
          <div className="absolute bottom-4 right-4">
            <Button 
              size="sm" 
              color="primary" 
              variant="flat" 
              onPress={() => setShouldUseWebGL(true)}
              startContent={<Icon icon="lucide:cube" />}
            >
              View in 3D
            </Button>
          </div>
        )}
      </div>
    );
  }
  
  // Only render the 3D version if explicitly enabled by the user
  return (
    <div className="relative h-full">
      <ErrorBoundary>
        <Canvas 
          camera={{ position: [0, 0, 3], fov: 50 }}
          dpr={[1, 2]}
          gl={{ 
            powerPreference: "default",
            antialias: true,
            failIfMajorPerformanceCaveat: false
          }}
        >
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          <MaterialSphereWithFallback />
          <Environment preset="city" />
          <OrbitControls 
            enablePan={false}
            enableZoom={true}
            minDistance={2}
            maxDistance={5}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Canvas>
      </ErrorBoundary>
      <div className="absolute bottom-4 right-4">
        <Button 
          size="sm" 
          color="default" 
          variant="flat" 
          onPress={() => setShouldUseWebGL(false)}
          startContent={<Icon icon="lucide:image" />}
        >
          View Static Image
        </Button>
      </div>
    </div>
  );
};

// Error boundary component for WebGL errors
const WebGLErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);
  
  useEffect(() => {
    // Check if WebGL is supported
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    
    if (!gl) {
      setHasError(true);
    }
  }, []);
  
  if (hasError) {
    return (
      <div className="h-full w-full flex flex-col items-center justify-center p-6 bg-content2">
        <Alert 
          title="WebGL Not Supported" 
          description="Your browser or device doesn't support WebGL, which is required to display 3D content. Please try a different browser or device."
          color="warning"
          className="max-w-md"
        />
      </div>
    );
  }
  
  return children;
};

// Simple error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("3D rendering error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="h-full w-full flex flex-col items-center justify-center p-6 bg-content2">
          <Alert 
            title="Rendering Error" 
            description="There was a problem rendering the 3D content. Please try refreshing the page."
            color="danger"
            className="max-w-md"
          />
        </div>
      );
    }

    return this.props.children;
  }
}