import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollEffects = () => {
  useEffect(() => {
    // Smooth scrub for all ScrollTrigger instances
    ScrollTrigger.defaults({
      toggleActions: 'play reverse play reverse',
    });

    // Parallax elements with data-parallax attribute
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    parallaxElements.forEach((el) => {
      const speed = parseFloat(el.getAttribute('data-parallax') || '0.5');
      gsap.to(el, {
        yPercent: speed * 100,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        },
      });
    });

    // Fade in/out elements with data-fade attribute
    const fadeElements = document.querySelectorAll('[data-fade]');
    fadeElements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            end: 'top 20%',
            scrub: 1,
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    });

    // Scale elements with data-scale attribute
    const scaleElements = document.querySelectorAll('[data-scale]');
    scaleElements.forEach((el) => {
      gsap.fromTo(
        el,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            end: 'top 40%',
            scrub: 1,
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    });

    // Rotate elements with data-rotate attribute
    const rotateElements = document.querySelectorAll('[data-rotate]');
    rotateElements.forEach((el) => {
      const rotation = parseFloat(el.getAttribute('data-rotate') || '360');
      gsap.to(el, {
        rotation: rotation,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 2,
        },
      });
    });

    // Horizontal scroll elements
    const hScrollElements = document.querySelectorAll('[data-h-scroll]');
    hScrollElements.forEach((el) => {
      const direction = el.getAttribute('data-h-scroll') === 'right' ? 1 : -1;
      gsap.to(el, {
        xPercent: direction * 30,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
};
