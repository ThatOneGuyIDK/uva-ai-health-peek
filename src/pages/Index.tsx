import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Brain, Shield, Clock, CheckCircle2, Info } from "lucide-react";

const Index = () => {
  const visitDate = "March 15, 2025";
  const visitType = "Primary Care Consultation";

  const aiSystems = [
    {
      name: "Clinical Decision Support AI",
      purpose: "Diagnostic Assistance",
      description: "Analyzed your symptoms and medical history to help identify potential conditions and recommend appropriate tests.",
      confidence: 94,
      usedAt: "9:15 AM",
      icon: Brain,
    },
    {
      name: "Medical Imaging Analysis",
      purpose: "Radiology Support",
      description: "Assisted in analyzing your chest X-ray to detect abnormalities and ensure accurate interpretation.",
      confidence: 97,
      usedAt: "9:32 AM",
      icon: Brain,
    },
    {
      name: "Medication Interaction Checker",
      purpose: "Safety Verification",
      description: "Reviewed your current medications and new prescriptions to identify potential interactions or contraindications.",
      confidence: 99,
      usedAt: "9:45 AM",
      icon: Shield,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">AI Transparency Report</h1>
              <p className="text-muted-foreground mt-1">Your Visit: {visitDate}</p>
            </div>
            <Badge variant="outline" className="text-sm px-4 py-2">
              {visitType}
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Overview Card */}
        <Card className="mb-8 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="h-5 w-5 text-info" />
              About AI in Your Care
            </CardTitle>
            <CardDescription>
              At UVA Health, we use artificial intelligence to support—not replace—your healthcare team. AI helps your providers make more informed decisions, but all final decisions are made by licensed medical professionals.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-muted">
                <Brain className="h-8 w-8 text-primary" />
                <div>
                  <p className="font-semibold text-foreground">{aiSystems.length} AI Systems</p>
                  <p className="text-sm text-muted-foreground">Used during visit</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-muted">
                <CheckCircle2 className="h-8 w-8 text-success" />
                <div>
                  <p className="font-semibold text-foreground">100% Reviewed</p>
                  <p className="text-sm text-muted-foreground">By medical staff</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-muted">
                <Shield className="h-8 w-8 text-accent" />
                <div>
                  <p className="font-semibold text-foreground">HIPAA Compliant</p>
                  <p className="text-sm text-muted-foreground">Your data is secure</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Separator className="my-8" />

        {/* AI Systems Used */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">AI Systems Used in Your Visit</h2>
            <p className="text-muted-foreground">
              The following AI tools assisted your healthcare provider during your appointment.
            </p>
          </div>

          {aiSystems.map((system, index) => (
            <Card key={index} className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <system.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{system.name}</CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-1">
                        <Badge variant="secondary">{system.purpose}</Badge>
                        <span className="flex items-center gap-1 text-xs">
                          <Clock className="h-3 w-3" />
                          {system.usedAt}
                        </span>
                      </CardDescription>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-success">{system.confidence}%</div>
                    <div className="text-xs text-muted-foreground">Confidence</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">{system.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Separator className="my-8" />

        {/* Privacy and Security */}
        <Card className="bg-secondary/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-accent" />
              Your Privacy & Data Security
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-foreground mb-2">How We Protect Your Information</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <span>All AI analysis is performed within our secure, HIPAA-compliant systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <span>Your data is never shared with third parties or used to train commercial AI models</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <span>All AI recommendations are reviewed and validated by licensed healthcare professionals</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <span>You have the right to opt-out of AI-assisted care at any time</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-t">
              <p className="text-sm text-muted-foreground">
                Questions about AI in your care? Contact the UVA Health Patient Relations team at{" "}
                <span className="text-primary font-medium">(434) 924-8315</span> or speak with your provider.
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Index;
