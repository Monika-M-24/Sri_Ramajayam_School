"use client";

export default function ParticlesBackground() {
  const dots = Array.from({ length: 75 });

  return (
    <div className="particles-bg">
      {dots.map((_, index) => (
        <span
          key={index}
          className={`dot ${index < 50 ? "pink" : "orange"}`}
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${8 + Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  );
}