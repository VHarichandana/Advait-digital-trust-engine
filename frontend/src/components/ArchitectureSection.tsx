import { Card } from "@/components/ui/card";
import { Monitor, Server, Database, Activity } from "lucide-react";

const ArchitectureSection = () => {
  const layers = [
    {
      icon: Monitor,
      title: "Client Layer",
      color: "from-cyan-500 to-blue-500",
      components: [
        "React Frontend (TypeScript + TailwindCSS)",
        "WebRTC Video Capture & Streaming",
        "WASM ML Models (ONNX Runtime Web)",
        "AES-256 Encrypted Upload",
        "Local Edge Prechecks"
      ]
    },
    {
      icon: Server,
      title: "Server Layer",
      color: "from-blue-500 to-purple-500",
      components: [
        "FastAPI Inference Engine",
        "GPU-Accelerated TensorRT",
        "Node.js Real-time Dashboard",
        "WebSocket Signaling Server",
        "Load Balancer (Nginx)"
      ]
    },
    {
      icon: Database,
      title: "Database & Storage",
      color: "from-purple-500 to-pink-500",
      components: [
        "PostgreSQL (Structured Data)",
        "MongoDB (Unstructured Logs)",
        "S3 Encrypted Storage (Videos)",
        "Redis Cache Layer",
        "Elasticsearch (Analytics)"
      ]
    },
    {
      icon: Activity,
      title: "Monitoring & DevOps",
      color: "from-pink-500 to-cyan-500",
      components: [
        "Prometheus Metrics Collection",
        "Grafana Dashboards",
        "Sentry Error Tracking",
        "Docker + Kubernetes",
        "CI/CD Pipeline (GitHub Actions)"
      ]
    }
  ];

  return (
    <section id="architecture" className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              System <span className="text-gradient">Architecture</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Scalable, secure, and high-performance infrastructure designed for enterprise deployment
            </p>
          </div>

          {/* Architecture Diagram */}
          <div className="grid md:grid-cols-2 gap-8">
            {layers.map((layer, index) => (
              <Card 
                key={index}
                className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 hover-lift overflow-hidden"
              >
                {/* Gradient Top Border */}
                <div className={`h-1 bg-gradient-to-r ${layer.color}`} />
                
                <div className="p-8 space-y-6">
                  {/* Icon & Title */}
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 bg-gradient-to-r ${layer.color} rounded-xl`}>
                      <layer.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{layer.title}</h3>
                  </div>

                  {/* Components List */}
                  <ul className="space-y-3">
                    {layer.components.map((component, idx) => (
                      <li 
                        key={idx}
                        className="flex items-start space-x-3 text-muted-foreground"
                      >
                        <span className="text-primary mt-1">▸</span>
                        <span className="text-sm leading-relaxed">{component}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>

          {/* Data Flow Visualization */}
          <Card className="mt-12 bg-card/30 backdrop-blur-sm border-border p-8">
            <h3 className="text-2xl font-bold text-center mb-8">
              <span className="text-gradient">Data Flow Pipeline</span>
            </h3>
            
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
              {[
                { step: "1", label: "Capture", desc: "WebRTC Stream" },
                { step: "2", label: "Process", desc: "Edge ML + GPU" },
                { step: "3", label: "Analyze", desc: "Multi-Model Fusion" },
                { step: "4", label: "Store", desc: "Encrypted S3" },
                { step: "5", label: "Report", desc: "Dashboard UI" }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-2xl font-bold text-white mb-2">
                      {item.step}
                    </div>
                    <div className="text-sm font-semibold text-foreground">{item.label}</div>
                    <div className="text-xs text-muted-foreground">{item.desc}</div>
                  </div>
                  {index < 4 && (
                    <div className="hidden md:block text-primary text-2xl">→</div>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
