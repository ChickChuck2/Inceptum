import React, { useEffect, useRef, useState } from 'react';
import { NoiseEngine } from '../utils/NoiseEngine';
import { motion } from 'framer-motion';

const WorldPreviewer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [seed, setSeed] = useState(12345);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const engine = new NoiseEngine(seed);
    const width = canvas.width;
    const height = canvas.height;
    const imageData = ctx.createImageData(width, height);

    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        const noiseVal = engine.getUnifiedNoise(x * zoom, y * zoom);
        const biome = engine.getBiome(noiseVal);
        const color = hexToRgb(biome.color);
        
        const index = (x + y * width) * 4;
        imageData.data[index] = color.r;
        imageData.data[index + 1] = color.g;
        imageData.data[index + 2] = color.b;
        imageData.data[index + 3] = 255;
      }
    }

    ctx.putImageData(imageData, 0, 0);
  }, [seed, zoom]);

  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : { r: 0, g: 0, b: 0 };
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="world-previewer"
    >
      <div className="controls">
        <label>Seed: </label>
        <input 
          type="number" 
          value={seed} 
          onChange={(e) => setSeed(Number(e.target.value))} 
        />
        <label>Zoom: </label>
        <input 
          type="range" 
          min="0.1" 
          max="5" 
          step="0.1" 
          value={zoom} 
          onChange={(e) => setZoom(Number(e.target.value))} 
        />
      </div>
      <canvas ref={canvasRef} width={400} height={300} className="preview-canvas" />
    </motion.div>
  );
};

export default WorldPreviewer;
