tsParticles.load('tsparticles', {
  particles: {
    number: {
      value: 50,
    },
    color: {
      value: 'random',
      animation: {
        enable: true,
        speed: 50,
        sync: false,
      },
    },
    shape: {
      type: 'none',
    },
    size: {
      value: 5,
      random: true,
      animation: {
        enable: true,
        speed: 16,
        minimumValue: 0.1,
        sync: false,
      },
    },
    links: {
      enable: true,
      distance: 100,
      color: '#cf7fd1',
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
    },
  },
  interactivity: {
    detectsOn: 'canvas',
    events: {
      onHover: {
        enable: true,
        mode: 'repulse',
      },
      onClick: {
        enable: true,
        mode: 'bubble',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        links: {
          opacity: 0.2,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 0.2,
      },
      repulse: {
        distance: 200,
      },
      push: {
        quantity: 1,
      },
      remove: {
        quantity: 2,
      },
    },
  },
  detectRetina: true,
  responsive: [
    {
      maxWidth: 300,
      options: {
        particles: {
          number: {
            value: 50,
          },
          links: {
            enable: true,
            distance: 100,
            color: '#cf7fd1',
            opacity: 0.2,
            width: 1,
          },
        },
      },
    },
  ],
});
