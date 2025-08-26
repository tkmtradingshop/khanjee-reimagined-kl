import { Suspense, useState, useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Text, Float, Sparkles, Html } from "@react-three/drei";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Star, Flame, Users, Clock, MapPin, Award, Play } from "lucide-react";
import * as THREE from "three";

// Import hero images
import heroFishBiryani from "@/assets/hero-fish-biryani-royal.jpg";
import heroMixedBBQ from "@/assets/hero-mixed-bbq-sizzling.jpg";
import heroButterChicken from "@/assets/hero-butter-chicken-deluxe.jpg";
import muttonLahoriKarahi from "@/assets/dishes/mutton-lahori-karahi.jpg";
import chickenBiryani from "@/assets/dishes/chicken-biryani.jpg";
import muttonBiryani from "@/assets/dishes/mutton-biryani.jpg";
import chickenKarahi from "@/assets/dishes/chicken-karahi.jpg";
import chickenTikkaBBQ from "@/assets/dishes/chicken-tikka-bbq.jpg";

const dishesData = [
  {
    id: 1,
    name: "Royal Fish Biryani",
    image: heroFishBiryani,
    price: 25,
    rating: 4.9,
    spiceLevel: 2,
    flavors: { spicy: 60, creamy: 30, smoky: 40, tangy: 20 },
    description: "Premium fish tikka with golden saffron basmati rice",
    reviews: 847,
    prepTime: "25-30 min",
    isSpecial: true
  },
  {
    id: 2,
    name: "Sizzling BBQ Platter",
    image: heroMixedBBQ,
    price: 35,
    rating: 4.8,
    spiceLevel: 3,
    flavors: { spicy: 80, creamy: 10, smoky: 90, tangy: 15 },
    description: "Mixed grill with seekh kebabs, tikka & beef boti",
    reviews: 1203,
    prepTime: "20-25 min",
    isSpecial: true
  },
  {
    id: 3,
    name: "Butter Chicken Deluxe",
    image: heroButterChicken,
    price: 26,
    rating: 4.7,
    spiceLevel: 1,
    flavors: { spicy: 30, creamy: 95, smoky: 20, tangy: 40 },
    description: "Creamy tomato curry with tender chicken",
    reviews: 692,
    prepTime: "15-20 min",
    isSpecial: false
  },
  {
    id: 4,
    name: "Mutton Lahori Karahi",
    image: muttonLahoriKarahi,
    price: 45,
    rating: 4.9,
    spiceLevel: 3,
    flavors: { spicy: 85, creamy: 25, smoky: 70, tangy: 60 },
    description: "Traditional Lahori-style mutton in karahi",
    reviews: 534,
    prepTime: "30-35 min",
    isSpecial: true
  },
  {
    id: 5,
    name: "Chicken Biryani",
    image: chickenBiryani,
    price: 16,
    rating: 4.9,
    spiceLevel: 2,
    flavors: { spicy: 50, creamy: 20, smoky: 60, tangy: 30 },
    description: "Aromatic basmati rice with tender chicken",
    reviews: 1456,
    prepTime: "25-30 min",
    isSpecial: false
  },
  {
    id: 6,
    name: "Mutton Biryani",
    image: muttonBiryani,
    price: 18,
    rating: 4.8,
    spiceLevel: 2,
    flavors: { spicy: 55, creamy: 25, smoky: 65, tangy: 35 },
    description: "Premium basmati rice with succulent mutton",
    reviews: 893,
    prepTime: "30-35 min",
    isSpecial: false
  },
  {
    id: 7,
    name: "Chicken Karahi",
    image: chickenKarahi,
    price: 35,
    rating: 4.8,
    spiceLevel: 3,
    flavors: { spicy: 75, creamy: 30, smoky: 80, tangy: 70 },
    description: "Classic Pakistani chicken karahi with spices",
    reviews: 721,
    prepTime: "20-25 min",
    isSpecial: false
  },
  {
    id: 8,
    name: "Chicken Tikka BBQ",
    image: chickenTikkaBBQ,
    price: 12,
    rating: 4.7,
    spiceLevel: 2,
    flavors: { spicy: 65, creamy: 15, smoky: 95, tangy: 25 },
    description: "Marinated chicken grilled to perfection",
    reviews: 445,
    prepTime: "15-20 min",
    isSpecial: false
  }
];

// 3D Dish Component
function DishMesh({ dish, position, isActive, onClick }: any) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (meshRef.current) {
      // Floating animation
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.1;
      
      // Scale effect when active or hovered
      const targetScale = isActive ? 1.3 : hovered ? 1.1 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
      
      // Rotation when active
      if (isActive) {
        meshRef.current.rotation.y += 0.01;
      }
    }
  });

  const texture = useMemo(() => {
    const loader = new THREE.TextureLoader();
    return loader.load(dish.image);
  }, [dish.image]);

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh
        ref={meshRef}
        position={position}
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <cylinderGeometry args={[1, 1, 0.2, 32]} />
        <meshStandardMaterial 
          map={texture} 
          transparent 
          opacity={isActive ? 1 : 0.8}
        />
        
        {/* Sparkles effect when hovered or active */}
        {(hovered || isActive) && (
          <Sparkles
            count={20}
            scale={2}
            size={3}
            speed={0.4}
            color={dish.isSpecial ? "#D4AF37" : "#10B981"}
          />
        )}
      </mesh>
      
      {/* Price tag */}
      <Html position={[0, 1.5, 0]} center>
        <div className={`bg-emerald-deep/90 text-white px-3 py-1 rounded-full text-sm font-bold transition-all duration-300 ${
          isActive ? 'scale-125 bg-brass-gold text-emerald-deep' : ''
        }`}>
          RM {dish.price}
        </div>
      </Html>
    </Float>
  );
}

// 3D Scene Component
function FoodCarousel({ dishes, activeDish, onDishSelect }: any) {
  const { camera } = useThree();
  const radius = 4;
  
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#D4AF37" />
      
      {/* Background glow */}
      <mesh position={[0, 0, -5]}>
        <planeGeometry args={[20, 20]} />
        <meshBasicMaterial 
          transparent 
          opacity={0.1}
          color="#D4AF37"
        />
      </mesh>
      
      {/* Dish carousel */}
      {dishes.map((dish: any, index: number) => {
        const angle = (index / dishes.length) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        
        return (
          <DishMesh
            key={dish.id}
            dish={dish}
            position={[x, 0, z]}
            isActive={activeDish?.id === dish.id}
            onClick={() => onDishSelect(dish)}
          />
        );
      })}
      
      {/* Center logo/title */}
      <Text
        position={[0, 2, 0]}
        fontSize={0.8}
        color="#D4AF37"
        anchorX="center"
        anchorY="middle"
        font="/fonts/inter-bold.woff"
      >
        KHANJEE
      </Text>
      
      <Text
        position={[0, 1, 0]}
        fontSize={0.3}
        color="#10B981"
        anchorX="center"
        anchorY="middle"
      >
        Authentic Pakistani Cuisine
      </Text>
      
      {/* Controls */}
      <OrbitControls
        enablePan={false}
        enableZoom={true}
        minDistance={6}
        maxDistance={12}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 2}
        autoRotate={true}
        autoRotateSpeed={2}
      />
    </>
  );
}

// Main Interactive Hero Component
const Interactive3DHero = ({ onOrderNow }: { onOrderNow: () => void }) => {
  const [activeDish, setActiveDish] = useState(dishesData[0]);
  const [spicePreference, setSpicePreference] = useState([2]);
  const [showFlavors, setShowFlavors] = useState(false);

  const handleTasteTest = () => {
    setShowFlavors(true);
    setTimeout(() => setShowFlavors(false), 3000);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-emerald-deep/20 via-brass-gold/10 to-spice-red/20 overflow-hidden">
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brass-gold/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 -left-60 w-96 h-96 bg-emerald-light/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-spice-red/20 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 py-8 relative z-10">
        {/* Top stats bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brass-gold/20 to-emerald-light/20 backdrop-blur-md rounded-full px-4 py-2 text-brass-light text-sm font-medium border border-brass-gold/30 shadow-glow">
            <div className="w-2 h-2 bg-emerald-light rounded-full animate-pulse"></div>
            <Users size={14} />
            Live: 247 exploring menu
          </div>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-spice-red/20 to-brass-gold/20 backdrop-blur-md rounded-full px-4 py-2 text-brass-light text-sm font-medium border border-spice-red/30 shadow-glow">
            <Star size={14} />
            4.9★ Customer Favorite
          </div>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-deep/20 to-emerald-light/20 backdrop-blur-md rounded-full px-4 py-2 text-brass-light text-sm font-medium border border-emerald-light/30 shadow-glow">
            <Award size={14} />
            #1 Pakistani Restaurant KL
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 3D Carousel */}
          <div className="relative h-96 lg:h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-deep/10 to-brass-gold/10 rounded-3xl backdrop-blur-sm border border-brass-gold/20"></div>
            <Canvas camera={{ position: [0, 2, 8], fov: 45 }}>
              <Suspense fallback={null}>
                <FoodCarousel
                  dishes={dishesData}
                  activeDish={activeDish}
                  onDishSelect={setActiveDish}
                />
              </Suspense>
            </Canvas>
            
            {/* Interaction hints */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
              <p className="text-brass-gold text-sm animate-pulse">
                🖱️ Drag to explore • 🔍 Click dishes to discover
              </p>
            </div>
          </div>

          {/* Dish Details & Controls */}
          <div className="space-y-8">
            {/* Active dish info */}
            <div className="bg-card/90 backdrop-blur-sm rounded-3xl p-8 border border-border/50 shadow-elegant">
              <div className="flex items-center gap-3 mb-4">
                {activeDish.isSpecial && (
                  <div className="px-3 py-1 bg-gradient-to-r from-spice-red to-brass-gold text-white rounded-full text-xs font-bold">
                    ⭐ CHEF'S SPECIAL
                  </div>
                )}
                <div className="flex items-center gap-1 text-brass-gold">
                  <Star size={16} className="fill-current" />
                  <span className="font-bold">{activeDish.rating}</span>
                  <span className="text-sm text-muted-foreground">({activeDish.reviews})</span>
                </div>
              </div>
              
              <h1 className="text-4xl font-bold text-foreground mb-3 bg-gradient-to-r from-emerald-deep to-brass-gold bg-clip-text text-transparent">
                {activeDish.name}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                {activeDish.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2 text-emerald-light">
                  <Clock size={18} />
                  <span className="font-medium">{activeDish.prepTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {[1, 2, 3].map(i => (
                      <Flame
                        key={i}
                        size={16}
                        className={`${
                          i <= activeDish.spiceLevel ? 'text-spice-red fill-current' : 'text-muted'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">Spice Level</span>
                </div>
              </div>

              {/* Flavor Radar */}
              {showFlavors && (
                <div className="mb-6 p-4 bg-gradient-to-r from-brass-gold/10 to-emerald-light/10 rounded-xl border border-brass-gold/20 animate-fade-in">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span>🎯</span> Flavor Profile
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {Object.entries(activeDish.flavors).map(([flavor, intensity]: [string, any]) => (
                      <div key={flavor} className="flex items-center justify-between">
                        <span className="text-sm capitalize text-muted-foreground">{flavor}</span>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-2 h-2 rounded-full ${
                                i < Math.floor(intensity / 20) ? 'bg-brass-gold' : 'bg-muted'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Spice Preference Slider */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-foreground mb-3">
                  Your Spice Preference: {spicePreference[0] === 1 ? 'Mild' : spicePreference[0] === 2 ? 'Medium' : 'Hot'} 🌶️
                </label>
                <Slider
                  value={spicePreference}
                  onValueChange={setSpicePreference}
                  max={3}
                  min={1}
                  step={1}
                  className="w-full"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={onOrderNow}
                  className="bg-gradient-to-r from-brass-gold to-brass-light text-emerald-deep hover:from-brass-light hover:to-brass-gold font-bold px-8 py-4 text-lg group flex-1"
                >
                  <span>🛒 Order Now - RM {activeDish.price}</span>
                </Button>
                
                <Button
                  onClick={handleTasteTest}
                  variant="outline"
                  className="border-emerald-deep text-emerald-deep hover:bg-emerald-deep hover:text-white px-6 py-4 group"
                >
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Taste Test
                </Button>
              </div>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border/30">
                <div className="text-2xl font-bold text-brass-gold">15min</div>
                <div className="text-sm text-muted-foreground">Avg Delivery</div>
              </div>
              <div className="text-center p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border/30">
                <div className="text-2xl font-bold text-emerald-light">2.3k</div>
                <div className="text-sm text-muted-foreground">Orders Today</div>
              </div>
              <div className="text-center p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border/30">
                <div className="text-2xl font-bold text-spice-red">98%</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interactive3DHero;