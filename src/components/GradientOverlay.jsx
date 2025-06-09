export const GradientOverlay = () => {
  return (
    <div className="fixed inset-0 z-[1] pointer-events-none">
      {/* Top gradient */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-blue-900/10 to-transparent"></div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-blue-900/10 to-transparent"></div>

      {/* Left spotlight */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl"></div>

      {/* Right spotlight */}
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl"></div>
    </div>
  );
};
