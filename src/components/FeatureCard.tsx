import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  capabilities: string[];
  techStack: string[];
  gradient?: string;
  image?: string;
}

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  capabilities, 
  techStack,
  gradient = "from-primary/20 to-secondary/20",
  image
}: FeatureCardProps) => {
  return (
    <Card className="group bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 hover-lift overflow-hidden">
      {/* Gradient Header */}
      <div className={`h-2 bg-gradient-to-r ${gradient}`} />
      
      {/* Image Section */}
      {image && (
        <div className="relative h-64 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
        </div>
      )}
      
      <div className="p-8 space-y-6">
        {/* Icon & Title */}
        <div className="flex items-start space-x-4">
          <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
            <Icon className="w-8 h-8 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-foreground mb-2">{title}</h3>
            <p className="text-muted-foreground leading-relaxed">{description}</p>
          </div>
        </div>

        {/* Capabilities List */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-primary uppercase tracking-wide">Capabilities</h4>
          <ul className="space-y-2">
            {capabilities.map((capability, index) => (
              <li key={index} className="flex items-start space-x-2 text-sm text-muted-foreground">
                <span className="text-primary mt-0.5">▸</span>
                <span>{capability}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Badges */}
        <div className="space-y-3 pt-4 border-t border-border/50">
          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="bg-muted/30 text-xs border-primary/20 hover:border-primary/40 transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default FeatureCard;
