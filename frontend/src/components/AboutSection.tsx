import { Shield, Brain, Eye, Lock, CheckCircle, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const AboutSection = () => {
  const capabilities = [
    { icon: Eye, text: "Video anomaly detection" },
    { icon: Shield, text: "Impersonation prevention" },
    { icon: Brain, text: "Deepfake & spoof detection" },
    { icon: Lock, text: "Forensic intelligence" },
    { icon: CheckCircle, text: "Multimodal authentication" },
    { icon: Zap, text: "Digital trust & compliance" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              About <span className="text-gradient">ADVAIT</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              An end-to-end AI-powered platform designed to establish digital trust through
              advanced video authentication and forensic analysis
            </p>
          </div>

          {/* Main Card */}
          <Card className="bg-card/50 backdrop-blur-sm border-border p-8 md:p-12 hover-lift">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left: Description */}
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
                  Next-Generation Video Security
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  ADVAIT combines cutting-edge computer vision, deep learning, and multimodal AI 
                  to provide comprehensive protection against video manipulation, impersonation 
                  attacks, and fraudulent media.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our platform leverages state-of-the-art neural networks including XceptionNet, 
                  Vision Transformers, and custom-trained models to deliver real-time threat 
                  detection with industry-leading accuracy.
                </p>
              </div>

              {/* Right: Capabilities Grid */}
              <div className="grid grid-cols-2 gap-4">
                {capabilities.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-4 bg-muted/30 rounded-lg border border-border/50 hover:border-primary/50 transition-colors"
                  >
                    <item.icon className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground font-medium leading-tight">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-border/50">
              {[
                { label: "Enterprise Clients", value: "500+" },
                { label: "Videos Analyzed", value: "10M+" },
                { label: "Threats Detected", value: "250K+" },
                { label: "Uptime", value: "99.99%" },
              ].map((stat, index) => (
                <div key={index} className="text-center space-y-2">
                  <div className="text-2xl md:text-3xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
