/**
 * Inceptum World Engine - JavaScript Port
 * Original logic from WorldGeneratorEngine.cs
 */

export class NoiseEngine {
  private seed: number;

  constructor(seed: number) {
    this.seed = seed;
  }

  // StableHash implementation from C#
  private stableHash(x: number, y: number): number {
    let h = (this.seed ^ (x * 73856093) ^ (y * 19349663));
    return (Math.abs(h) % 1000000) / 1000000;
  }

  // Simplified Perlin-like noise (since we don't have Mathf.PerlinNoise natively)
  // We'll use a simple fractional Brownian motion (fBm) approach
  private noise(x: number, y: number): number {
    // Basic pseudo-random gradient noise
    const X = Math.floor(x) & 255;
    const Y = Math.floor(y) & 255;
    const xf = x - Math.floor(x);
    const yf = y - Math.floor(y);
    
    const u = this.fade(xf);
    const v = this.fade(yf);

    // Using the stable hash at grid points
    const n00 = this.stableHash(X, Y);
    const n01 = this.stableHash(X, Y + 1);
    const n10 = this.stableHash(X + 1, Y);
    const n11 = this.stableHash(X + 1, Y + 1);

    return this.lerp(v, this.lerp(u, n00, n10), this.lerp(u, n01, n11));
  }

  private fade(t: number): number {
    return t * t * t * (t * (t * 6 - 15) + 10);
  }

  private lerp(t: number, a: number, b: number): number {
    return a + t * (b - a);
  }

  public getUnifiedNoise(x: number, y: number): number {
    let total = 0;
    let frequency = 0.01;
    let amplitude = 1;
    let maxValue = 0;

    // 3 Octaves as seen in WorldGeneratorEngine.cs
    for (let i = 0; i < 3; i++) {
      total += this.noise(x * frequency, y * frequency) * amplitude;
      maxValue += amplitude;
      amplitude *= 0.5;
      frequency *= 2;
    }

    return total / maxValue;
  }

  public getBiome(value: number): { name: string, color: string } {
    if (value < 0.2) return { name: "Water", color: "#8FBED6" };
    if (value < 0.4) return { name: "Desert", color: "#E5C77A" };
    if (value < 0.62) return { name: "Forest", color: "#6C8037" };
    if (value < 0.82) return { name: "Plains", color: "#C96B2C" };
    return { name: "Snow", color: "#F5F5F5" };
  }
}
