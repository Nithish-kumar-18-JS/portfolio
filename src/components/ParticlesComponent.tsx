'use client';
import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export const ParticlesComponent = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: {
        enable: true,
        zIndex: 0
      },
      detectRetina: true,
      background: {
        color: {
          value: "#000000"
        }
      },
      interactivity: {
        events: {
          onClick: { enable: true, mode: "repulse" },
          onHover: { enable: true, mode: "bubble" },
          resize: {
            enable: true
          }
        },
        modes: {
          bubble: {
            distance: 250,
            duration: 2,
            opacity: 0,
            size: 0
          },
          repulse: {
            distance: 400,
            duration: 0.4
          }
        }
      },
      particles: {
        number: {
          value: 160,
          density: {
            enable: true,
            width: 1920,
            height: 1080
          }
        },
        color: {
          value: "#ffffff"
        },
        shape: {
          type: "circle"
        },
        opacity: {
          value: {
            min: 0.1,
            max: 1
          },
          animation: {
            enable: true,
            speed: 1,
            sync: false
          }
        },
        size: {
          value: {
            min: 1,
            max: 3
          }
        },
        move: {
          enable: true,
          speed: {
            min: 0.1,
            max: 1
          },
          outModes: {
            default: "out"
          }
        }
      }
    }),
    []
  );

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
    />
  );
};
