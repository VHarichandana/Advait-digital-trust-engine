import FeatureCard from "./FeatureCard";
import aiAuthImage from "@/assets/ai-authentication.jpg";
import forensicImage from "@/assets/forensic-scorecard.jpg";
import polygraphImage from "@/assets/digital-polygraph.jpg";
import dualDeviceImage from "@/assets/dual-device-interview.jpg";
import roomGuardianImage from "@/assets/room-guardian.jpg";
import rppgImage from "@/assets/rppg-multimodal.jpg";
import crossModalImage from "@/assets/cross-modal-sync.jpg";
import privacyEdgeImage from "@/assets/privacy-edge.jpg";
import analystDashImage from "@/assets/analyst-dashboard.jpg";
import securityComplianceImage from "@/assets/security-compliance.jpg";
import { 
  Shield, 
  FileSearch, 
  Brain, 
  Smartphone, 
  Eye, 
  Activity, 
  Radio,
  Lock,
  BarChart3,
  Fingerprint
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: "AI Authentication",
      description: "Comprehensive biometric verification with advanced deepfake detection and liveness checks.",
      capabilities: [
        "Face Recognition with 99.8% accuracy",
        "Real-time Liveness Detection",
        "Deepfake Detection using XceptionNet & ViT",
        "Advanced Spoof Detection",
        "Lip-Sync Verification with Wav2Vec2",
        "rPPG Heartbeat Detection (UBFC/PURE models)"
      ],
      techStack: [
        "PyTorch", "XceptionNet", "ViT", "Mediapipe", "rPPG", 
        "Wav2Vec2", "Intel Anomalib", "VideoLiveness Toolkit", 
        "Autoencoder/GAN VAD", "WebRTC", "ONNX Runtime", "FastAPI", "TensorRT"
      ],
      gradient: "from-cyan-500/20 to-blue-500/20",
      image: aiAuthImage
    },
    {
      icon: FileSearch,
      title: "Forensic Scorecard",
      description: "Detailed integrity analysis with comprehensive evidence generation and threat scoring.",
      capabilities: [
        "Deepfake probability scoring (0-100%)",
        "Lip-sync mismatch detection",
        "rPPG signal consistency analysis",
        "Multiple-person probability detection",
        "Overall Integrity Score calculation",
        "Evidence clips generation with timestamps",
        "Temporal anomaly graphs and visualizations"
      ],
      techStack: [
        "FastAPI", "Node.js", "PostgreSQL", "MongoDB", 
        "S3", "Recharts", "FFmpeg", "PyOD"
      ],
      gradient: "from-blue-500/20 to-purple-500/20",
      image: forensicImage
    },
    {
      icon: Brain,
      title: "Digital Polygraph",
      description: "Behavioral analysis through micro-expression detection and cognitive load assessment.",
      capabilities: [
        "Micro-expression analysis (7 universal emotions)",
        "Gaze tracking and attention monitoring",
        "Cognitive load assessment",
        "Distraction detection and quantification",
        "Stress pattern recognition",
        "Behavioral anomaly flagging"
      ],
      techStack: [
        "Mediapipe FaceMesh", "OpenCV", "CNN-LSTM", 
        "Transformers", "librosa", "ONNX Runtime", "OpenFace"
      ],
      gradient: "from-purple-500/20 to-pink-500/20",
      image: polygraphImage
    },
    {
      icon: Smartphone,
      title: "Dual-Device Security",
      description: "Multi-stream verification using synchronized laptop and mobile device cameras.",
      capabilities: [
        "Laptop front camera for primary authentication",
        "Mobile device side-view monitoring",
        "Room environment scanning",
        "QR code device pairing with encryption",
        "Multi-stream synchronization (<50ms latency)",
        "Cross-device anomaly correlation"
      ],
      techStack: [
        "WebRTC", "Node.js signaling", "STUN/TURN", 
        "pybluez", "scapy scanner", "Socket.io"
      ],
      gradient: "from-pink-500/20 to-cyan-500/20",
      image: dualDeviceImage
    },
    {
      icon: Eye,
      title: "Room Guardian",
      description: "Environmental monitoring with multi-person detection and audio anomaly analysis.",
      capabilities: [
        "Multiple participant detection (YOLOv8/YOLO-NAS)",
        "Whisper and background conversation detection",
        "Coaching signal identification",
        "Movement anomaly tracking with Optical Flow",
        "Environmental tampering detection",
        "3D depth estimation with MiDaS"
      ],
      techStack: [
        "YOLOv8", "YOLO-NAS", "RAFT Optical Flow", 
        "ASVspoof models", "MiDaS", "DeepStream", 
        "Siamese networks", "SN-VGG + BiLSTM", "Ultrasonic detection"
      ],
      gradient: "from-cyan-500/20 to-green-500/20",
      image: roomGuardianImage
    },
    {
      icon: Activity,
      title: "rPPG + Multimodal Fusion",
      description: "Remote photoplethysmography for heartbeat detection and multimodal data fusion.",
      capabilities: [
        "Non-contact heartbeat detection from facial video",
        "Chrominance-based rPPG extraction",
        "POS (Plane-Orthogonal-to-Skin) method",
        "Audio-video-motion data fusion",
        "Physiological signal validation",
        "Real-time vitals monitoring"
      ],
      techStack: [
        "NumPy", "SciPy", "Transformer Fusion", 
        "Kalman filtering", "Signal processing"
      ],
      gradient: "from-green-500/20 to-blue-500/20",
      image: rppgImage
    },
    {
      icon: Radio,
      title: "Cross-Modal Synchrony",
      description: "Audio-visual alignment verification for detecting synthetic media manipulation.",
      capabilities: [
        "Lip movement to audio synchronization",
        "Head motion correlation with audio energy",
        "Temporal alignment verification",
        "Audio-visual mismatch scoring",
        "Frame-level sync analysis",
        "Multi-speaker tracking"
      ],
      techStack: [
        "LipNet", "Silero VAD", "Montreal Forced Aligner", 
        "AV-LipSync+", "Wav2Vec2"
      ],
      gradient: "from-blue-500/20 to-indigo-500/20",
      image: crossModalImage
    },
    {
      icon: Lock,
      title: "Privacy-First Edge Prechecks",
      description: "Local on-device processing for privacy-preserving preliminary authentication.",
      capabilities: [
        "Client-side liveness detection",
        "Face presence verification",
        "Basic spoof detection",
        "Device fingerprinting",
        "Local encryption of biometric data",
        "Zero-knowledge proof protocols"
      ],
      techStack: [
        "TensorFlow Lite", "ONNX Runtime Web", 
        "WebAssembly", "WebCrypto", "IndexedDB"
      ],
      gradient: "from-indigo-500/20 to-purple-500/20",
      image: privacyEdgeImage
    },
    {
      icon: BarChart3,
      title: "Recruiter/Analyst Dashboard",
      description: "Comprehensive analytics interface for forensic analysis and decision making.",
      capabilities: [
        "Real-time Integrity Score visualization",
        "Evidence clip timeline with annotations",
        "Multi-channel alert system",
        "Temporal trend analysis",
        "Comparative analytics across sessions",
        "Exportable forensic reports"
      ],
      techStack: [
        "React", "TypeScript", "TailwindCSS", 
        "shadcn/ui", "Recharts", "Node.js", "JWT"
      ],
      gradient: "from-purple-500/20 to-red-500/20",
      image: analystDashImage
    },
    {
      icon: Fingerprint,
      title: "Security & Compliance",
      description: "Enterprise-grade security with blockchain identity and regulatory compliance.",
      capabilities: [
        "GDPR compliance with explicit consent management",
        "On-device biometric processing",
        "Blockchain-based identity verification",
        "Fairness metrics and bias detection",
        "Neural watermarking for provenance",
        "Federated learning for privacy"
      ],
      techStack: [
        "Hyperledger", "AES-256", "RSA", "TLS 1.3", 
        "PySyft", "Opacus", "Differential Privacy"
      ],
      gradient: "from-red-500/20 to-cyan-500/20",
      image: securityComplianceImage
    }
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Core <span className="text-gradient">Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive AI-powered capabilities for complete video authentication and forensic intelligence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
