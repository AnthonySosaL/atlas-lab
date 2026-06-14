"use client";

import * as React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import { useTheme } from "next-themes";

type Candle = { x: number; open: number; close: number; high: number; low: number; up: boolean };

function useCandles(): Candle[] {
  return React.useMemo(() => {
    const arr: Candle[] = [];
    let price = 0;
    let s = 1337; // semilla fija -> figura estable
    const rnd = () => {
      s = (s * 1103515245 + 12345) & 0x7fffffff;
      return s / 0x7fffffff;
    };
    const N = 18;
    for (let i = 0; i < N; i++) {
      const open = price;
      const close = open + (rnd() - 0.46) * 1.0;
      const high = Math.max(open, close) + rnd() * 0.35;
      const low = Math.min(open, close) - rnd() * 0.35;
      price = close;
      arr.push({ x: (i - (N - 1) / 2) * 0.62, open, close, high, low, up: close >= open });
    }
    return arr;
  }, []);
}

function Candles({ gain, loss }: { gain: string; loss: string }) {
  const candles = useCandles();
  return (
    <group>
      {candles.map((c, i) => {
        const color = c.up ? gain : loss;
        const bodyH = Math.max(Math.abs(c.close - c.open), 0.08);
        const bodyY = (c.open + c.close) / 2;
        const wickH = Math.max(c.high - c.low, 0.1);
        const wickY = (c.high + c.low) / 2;
        return (
          <group key={i}>
            {/* cuerpo */}
            <mesh position={[c.x, bodyY, 0]} castShadow>
              <boxGeometry args={[0.36, bodyH, 0.36]} />
              <meshStandardMaterial
                color={color}
                emissive={color}
                emissiveIntensity={0.25}
                metalness={0.3}
                roughness={0.35}
              />
            </mesh>
            {/* mecha */}
            <mesh position={[c.x, wickY, 0]}>
              <boxGeometry args={[0.06, wickH, 0.06]} />
              <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.2} />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}

export function Hero3D() {
  const { resolvedTheme } = useTheme();
  const dark = resolvedTheme !== "light";
  const gain = dark ? "#10b981" : "#059669";
  const loss = dark ? "#f4404e" : "#e11d2a";

  return (
    <Canvas
      camera={{ position: [0, 1.5, 9], fov: 42 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ touchAction: "none" }}
    >
      <ambientLight intensity={dark ? 0.6 : 0.9} />
      <directionalLight position={[5, 8, 5]} intensity={1.1} />
      <pointLight position={[-6, 2, 4]} intensity={0.5} color={loss} />
      <Float speed={1.5} rotationIntensity={0.15} floatIntensity={0.4}>
        <Candles gain={gain} loss={loss} />
      </Float>
      <OrbitControls
        makeDefault
        enablePan={false}
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.9}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={(2 * Math.PI) / 3}
      />
    </Canvas>
  );
}
