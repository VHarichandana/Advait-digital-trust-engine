import { Button } from "@/components/ui/button";
import { Download, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15,
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background via-background/80 to-background" />
      
      {/* Animated Grid */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(189 95% 55% / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(189 95% 55% / 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 z-10 text-center">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" />
            <span className="text-sm text-muted-foreground">Advanced AI Forensic Intelligence</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="text-gradient">ADVAIT</span>
          </h1>
          
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground">
            AI Dashboard for Video Anomaly,
            <br />
            Impersonation & Tampered Media Detection
          </p>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Advanced multimodal AI engine for digital trust, authentication, and forensic intelligence.
            Powered by cutting-edge deep learning models and real-time anomaly detection.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground group hover-lift text-lg px-8 py-6"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Try Demo
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Technical Report
            </Button>
          </div>

          {/* Tech Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16">
            {[
              { value: "99.8%", label: "Detection Accuracy" },
              { value: "<100ms", label: "Real-time Processing" },
              { value: "10+", label: "AI Models" },
              { value: "24/7", label: "Monitoring" },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="space-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
