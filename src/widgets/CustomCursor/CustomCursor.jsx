import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import './CustomCursor.scss';

export default function CustomCursor() {
  const location = useLocation();

  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const dotX = useRef(0);
  const dotY = useRef(0);
  const outlineX = useRef(0);
  const outlineY = useRef(0);

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const animate = () => {
      dotX.current += (mouseX.current - dotX.current) * 0.12;
      dotY.current += (mouseY.current - dotY.current) * 0.12;

      outlineX.current += (mouseX.current - outlineX.current) * 0.08;
      outlineY.current += (mouseY.current - outlineY.current) * 0.08;

      if (dotRef.current) {
        dotRef.current.style.left = `${dotX.current}px`;
        dotRef.current.style.top = `${dotY.current}px`;
      }

      if (outlineRef.current) {
        outlineRef.current.style.left = `${outlineX.current}px`;
        outlineRef.current.style.top = `${outlineY.current}px`;
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  useEffect(() => {
    const interactiveElements = document.querySelectorAll("a, button, .hover-target");
    interactiveElements.forEach(el => {
      el.addEventListener("mouseenter", () => setIsHovered(true));
      el.addEventListener("mouseleave", () => setIsHovered(false));
    });

    return () => {
      interactiveElements.forEach(el => {
        el.removeEventListener("mouseenter", () => setIsHovered(true));
        el.removeEventListener("mouseleave", () => setIsHovered(false));
      });
    };
  }, [location]);

  return (
    <>
      <div
        ref={dotRef}
        className={`cursor-dot ${isHovered ? "hovered" : ""}`}
        style={{ left: 0, top: 0 }}
      />
      <div
        ref={outlineRef}
        className={`cursor-outline ${isHovered ? "hovered" : ""}`}
        style={{ left: 0, top: 0 }}
      />
    </>
  );
}
