"use client";

import { useEffect, useRef, useState } from "react";

const TOTAL_FRAMES = 80;

export default function HeroImageSequence() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [firstFrameLoaded, setFirstFrameLoaded] = useState(false);
  const [allLoaded, setAllLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const loadedImages: HTMLImageElement[] = new Array(TOTAL_FRAMES);
    let loadedCount = 0;

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.decoding = "async";
      const num = i.toString().padStart(3, "0");
      img.src = `/images/sequence/frame-${num}.jpg`;

      img.onload = () => {
        if (!isMounted) return;
        loadedImages[i] = img;
        loadedCount++;

        if (i === 0) {
          imagesRef.current = loadedImages;
          setFirstFrameLoaded(true);
        }

        if (loadedCount === TOTAL_FRAMES) {
          imagesRef.current = loadedImages;
          setAllLoaded(true);
        }
      };

      img.onerror = () => {
        if (!isMounted) return;
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) {
          imagesRef.current = loadedImages;
          setAllLoaded(true);
        }
      };
    }

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!firstFrameLoaded) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const firstImg = imagesRef.current[0];
    if (firstImg && firstImg.width > 0) {
      canvas.width = firstImg.width;
      canvas.height = firstImg.height;
    }

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    const drawFrame = (frameIndex: number) => {
      const img = imagesRef.current[frameIndex];
      if (!img || img.width === 0) return;

      // Recorta sutilmente 3.5% da borda inferior/direita para ocultar marca d'água do canto e manter nitidez máxima
      const cropW = img.width * 0.965;
      const cropH = img.height * 0.965;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        0,
        0,
        cropW,
        cropH,
        0,
        0,
        canvas.width,
        canvas.height
      );
    };

    // Desenha o primeiro frame imediatamente
    drawFrame(0);

    if (!allLoaded) return;

    let currentFrame = 0;
    let direction = 1; // Ping-pong loop suave (0 -> 79 -> 0) sem corte brusco
    let animationFrameId: number;
    let lastTime = performance.now();
    const fps = 24;
    const interval = 1000 / fps;

    const animate = (time: number) => {
      animationFrameId = requestAnimationFrame(animate);
      const deltaTime = time - lastTime;

      if (deltaTime >= interval) {
        drawFrame(currentFrame);

        currentFrame += direction;
        if (currentFrame >= TOTAL_FRAMES - 1) {
          currentFrame = TOTAL_FRAMES - 1;
          direction = -1;
        } else if (currentFrame <= 0) {
          currentFrame = 0;
          direction = 1;
        }

        lastTime = time - (deltaTime % interval);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [firstFrameLoaded, allLoaded]);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-black">
      {!firstFrameLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
          <div className="w-10 h-10 border-3 border-bite-cheddar border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <canvas
        ref={canvasRef}
        className={`w-full h-full object-cover object-[72%_center] lg:object-center contrast-[1.06] saturate-[1.08] transition-opacity duration-700 ${
          firstFrameLoaded ? "opacity-90 lg:opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
