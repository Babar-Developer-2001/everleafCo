// CARDS ANIMATION HERE
export const parentVariant = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  export const childVariants = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6, // takes 0.6 seconds
        ease: "easeOut", // starts fast, slows down at end
      },
    },
  };

  export const hoverEffects={
scale: 1.05, y: -5 
  }
  export const tapEffects={
    scale: 0.95
  }

  export const hoverImgEffects={
  boxShadow: `
    0 10px 25px rgba(34, 197, 94, 0.4),
    0 20px 50px rgba(132, 204, 22, 0.3),
    0 30px 70px rgba(16, 185, 129, 0.25),
    0 40px 90px rgba(250, 204, 21, 0.2)
  `,
  }


// PAGE TRANSITION ANIMATION HERE
  export const pageTransitionVariant = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -40 },
  };
  