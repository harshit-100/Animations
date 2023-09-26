gsap.to(".imagecontainer", {
  ease: Expo.easeInOut,
  width: "100%",

  stagger: 2,
});

gsap.to(".text h1", {
  ease: Expo.easeInOut,
  width: "100%",
  top: 0,
  stagger: 2,
});

gsap.to(".text h1", {
  delay: 2,
  ease: Expo.easeInOut,
  width: "100%",
  top: "-100    ",
  stagger: 2,
});
