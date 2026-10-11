'use client';

import { useCallback } from 'react';
import type { Container, Engine } from 'tsparticles-engine';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const Particle = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (_container: Container | undefined) => {
    // Loaded callback
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-60 dark:opacity-100 transition-opacity">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        className="w-full h-full"
        options={{
          fullScreen: { enable: false },
          fpsLimit: 60,
          particles: {
            color: {
              value: ['#10b981', '#06b6d4', '#64748b'],
            },
            links: {
              color: '#94a3b8',
              distance: 140,
              enable: true,
              opacity: 0.25,
              width: 1,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: true,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 900,
              },
              value: 30,
            },
            opacity: {
              value: { min: 0.15, max: 0.4 },
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 1.5, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default Particle;