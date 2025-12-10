import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Mail, Building, User, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    useCase: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demo Request Submitted",
      description: "Our team will contact you within 24 hours.",
    });
    setFormData({ name: "", organization: "", email: "", useCase: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Request a <span className="text-gradient">Demo</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience ADVAIT's capabilities firsthand. Fill out the form below and our team will reach out to schedule a personalized demonstration.
            </p>
          </div>

          {/* Contact Card */}
          <Card className="bg-card/50 backdrop-blur-sm border-border p-8 md:p-12 hover-lift">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center space-x-2 text-foreground">
                  <User className="w-4 h-4 text-primary" />
                  <span>Full Name *</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="bg-muted/30 border-border focus:border-primary"
                />
              </div>

              {/* Organization Field */}
              <div className="space-y-2">
                <Label htmlFor="organization" className="flex items-center space-x-2 text-foreground">
                  <Building className="w-4 h-4 text-primary" />
                  <span>Organization *</span>
                </Label>
                <Input
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="Your Company Name"
                  required
                  className="bg-muted/30 border-border focus:border-primary"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center space-x-2 text-foreground">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>Email Address *</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  required
                  className="bg-muted/30 border-border focus:border-primary"
                />
              </div>

              {/* Use Case Field */}
              <div className="space-y-2">
                <Label htmlFor="useCase" className="flex items-center space-x-2 text-foreground">
                  <MessageSquare className="w-4 h-4 text-primary" />
                  <span>Use Case / Requirements *</span>
                </Label>
                <Textarea
                  id="useCase"
                  name="useCase"
                  value={formData.useCase}
                  onChange={handleChange}
                  placeholder="Tell us about your specific needs and how ADVAIT can help your organization..."
                  required
                  rows={5}
                  className="bg-muted/30 border-border focus:border-primary resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button 
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6"
              >
                Submit Demo Request
              </Button>

              {/* Privacy Note */}
              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to our Privacy Policy. 
                We'll only use your information to contact you about ADVAIT services.
              </p>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { label: "Response Time", value: "< 24 hours" },
              { label: "Support", value: "24/7 Available" },
              { label: "Demo Duration", value: "30-45 minutes" }
            ].map((item, index) => (
              <Card 
                key={index}
                className="bg-card/30 backdrop-blur-sm border-border p-6 text-center"
              >
                <div className="text-2xl font-bold text-gradient mb-1">{item.value}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
