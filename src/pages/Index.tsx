import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Brain, Shield, Users, FileText, ChevronDown, CheckCircle2, Lock, Eye, HeartPulse, Heart } from "lucide-react";
import { useState } from "react";
const Index = () => {
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const faqs = [{
    id: "replace",
    question: "Does AI replace my doctor?",
    answer: "No. AI tools like RAMP and DAX Copilot help your clinicians work more efficiently and accurately. Your doctor always reviews AI recommendations and makes the final decisions about your care. AI supports human expertise—it doesn't replace it."
  }, {
    id: "opt-out",
    question: "Can I opt out of AI-based tools?",
    answer: "Yes. For tools like DAX Copilot (AI note-taking), your provider will only use it if you're comfortable with it, and you can ask them to stop at any time. While some AI tools like RAMP are integrated into standard monitoring workflows to ensure patient safety, we respect your preferences and will discuss any concerns with you."
  }, {
    id: "privacy",
    question: "How is my privacy protected with DAX Copilot?",
    answer: "DAX Copilot recordings are hosted on Microsoft Azure cloud, which is HITRUST certified for healthcare security. Recordings are stored securely for one year and then automatically deleted. UVA Health follows strict HIPAA regulations and your data is never shared with third parties without your explicit consent."
  }, {
    id: "know",
    question: "What is RAMP and how does it work?",
    answer: "RAMP (Real-Time Analytics Monitoring Platform) is UVA Health's custom-developed AI system that continuously analyzes patient data from EHRs and bedside monitors. It uses machine learning to detect early signs of clinical deterioration and alerts care teams in real-time, allowing for faster intervention and improved patient outcomes."
  }, {
    id: "accuracy",
    question: "How accurate is the AI?",
    answer: "Our AI tools undergo rigorous testing and validation. RAMP was developed in-house by UVA Health's data science team with close collaboration from clinicians to ensure transparency, explainability, and accuracy. All AI systems are continuously monitored and all outputs are reviewed by licensed medical professionals."
  }];
  return <div className="min-h-screen bg-background font-sans">
      {/* Header */}
      <header className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl">
            <div className="flex items-start justify-between mb-2">
              <h1 className="text-4xl font-bold">UVA Health AI Technologies: RAMP, IMPACT Pro & DAX Copilot</h1>
              <Button asChild className="bg-accent hover:bg-accent/90 text-white font-semibold px-6 shadow-lg">
                <a href="https://mychart.uvahealth.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <div className="bg-white/20 p-1.5 rounded">
                    <Heart className="h-4 w-4 fill-white" />
                  </div>
                  MyChart
                </a>
              </Button>
            </div>
            <p className="text-lg opacity-90">Understanding how our AI systems support your care at UVA Health</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Intro Section */}
        <section className="mb-12">
          <Card className="border-l-4 border-l-accent">
            <CardContent className="pt-6">
              <p className="text-lg leading-relaxed text-foreground mb-4">
                UVA Health uses advanced artificial intelligence (AI) technologies—including RAMP (Real-Time Analytics Monitoring Platform), IMPACT Pro predictive monitoring, DAX Copilot for clinical documentation, and CoMet for disease prediction—to help our clinicians provide faster, safer, and more personalized care. These AI tools enhance the expertise of our healthcare team and never replace human judgment or compassion.
              </p>
              <p className="text-muted-foreground leading-relaxed">This page explains how we use AI at UVA Health, how we protect your information, and your rights as a patient. We believe in transparency and want you to feel informed and confident about the technology that supports your care.</p>
            </CardContent>
          </Card>
        </section>

        {/* How AI Is Used */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-accent/10">
              <Brain className="h-6 w-6 text-accent" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">UVA Health's AI Technologies in Action</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HeartPulse className="h-5 w-5 text-accent" />
                  RAMP: Real-Time Monitoring
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  <strong>RAMP (Real-Time Analytics Monitoring Platform)</strong> is UVA Health's custom-developed AI system that continuously analyzes patient data from electronic health records and bedside monitors. Using advanced machine learning, RAMP provides actionable, explainable predictions that help care teams identify patients on the verge of clinical deterioration.
                </p>
                <p className="text-muted-foreground text-sm">
                  RAMP integrates real-time vitals, EKG waveforms via Kafka streaming, and historical patient data to alert providers when immediate attention is needed, facilitating faster delivery of necessary care and improving patient outcomes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HeartPulse className="h-5 w-5 text-accent" />
                  IMPACT Pro: Cardiac Monitoring
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  <strong>IMPACT Pro</strong> (Predictive Monitoring: IMPact of Real-Time Predictive Monitoring in Acute Care Cardiology) uses AI-powered risk-prediction algorithms to identify cardiac patients at risk of deterioration. This technology enables faster intervention through enhanced data visualizations and early detection alerts to care teams.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-accent" />
                  DAX Copilot: AI Note-Taking
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  <strong>DAX Copilot</strong> uses ambient listening technology to securely record conversations between you and your provider during appointments. The AI then generates medical notes for your provider to review, giving them more time to focus on you instead of typing on a computer.
                </p>
                <p className="text-muted-foreground text-sm">
                  Your provider will only use DAX Copilot if you're comfortable with it. You can see these notes in your MyChart after your visit. Recordings are stored securely on HITRUST-certified Microsoft Azure cloud and deleted after one year.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-accent" />
                  CoMet: Disease Prediction
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  <strong>CoMet</strong> is an advanced deep learning model that combines patient proteomic data with electronic health records to enhance disease prediction accuracy. This technology helps clinicians identify health risks earlier and develop more personalized treatment plans.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-info/5 border-info/20">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-info flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground mb-2">AI never makes care decisions alone</p>
                  <p className="text-muted-foreground">
                    Every AI recommendation from RAMP, IMPACT Pro, or CoMet is reviewed and validated by licensed healthcare professionals. RAMP was built from Day One with close collaboration between data scientists and clinicians to ensure transparency, accountability, and explainability. Your doctor always has the final say in your treatment.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Data Protection */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-success/10">
              <Lock className="h-6 w-6 text-success" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">How UVA Protects Your Data</h2>
          </div>

          <Card>
            <CardContent className="pt-6">
              <p className="text-foreground leading-relaxed mb-6">
                Your privacy and data security are our top priorities. UVA Health uses industry-leading safeguards across all AI systems:
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Data Encryption</p>
                    <p className="text-muted-foreground">All patient data is encrypted both in transit and at rest. DAX Copilot uses HITRUST-certified Microsoft Azure cloud infrastructure with strict healthcare security standards.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">De-identification</p>
                    <p className="text-muted-foreground">When possible, AI systems like RAMP and CoMet work with de-identified data that cannot be traced back to individual patients.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Access Controls & Data Retention</p>
                    <p className="text-muted-foreground">Only authorized healthcare personnel can access your medical records and AI analysis results. DAX Copilot recordings are stored securely for one year, then automatically deleted.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">HIPAA Compliance</p>
                    <p className="text-muted-foreground">All AI tools including RAMP, IMPACT Pro, DAX Copilot, and CoMet fully comply with federal HIPAA privacy regulations. Your data is never shared with third parties or used for commercial AI training without explicit consent.</p>
                  </div>
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t">
                <p className="text-sm text-muted-foreground">
                  For more information, visit our{" "}
                  <a href="#" className="text-accent hover:underline font-medium">
                    Data Privacy Practices page
                  </a>
                  {" "}or contact our Privacy Office.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Human Oversight */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary/10">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">AI Supports Medical Staff, Not Replaces Them</h2>
          </div>

          <Card>
            <CardContent className="pt-6">
              <p className="text-foreground leading-relaxed mb-6">
                At UVA Health, we believe technology should enhance—not replace—the human connection at the heart of healthcare. Here's how we ensure that:
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <Badge variant="secondary" className="h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0">1</Badge>
                  <div>
                    <p className="font-semibold text-foreground mb-1">AI assists in letting providers decide</p>
                    <p className="text-muted-foreground">AI offers insights and recommendations, but your doctor reviews all information and makes the final clinical decisions.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Badge variant="secondary" className="h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0">2</Badge>
                  <div>
                    <p className="font-semibold text-foreground mb-1">AI always has continuous human oversight</p>
                    <p className="text-muted-foreground">Medical experts regularly review AI performance to ensure accuracy, safety, and effectiveness.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Badge variant="secondary" className="h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0">3</Badge>
                  <div>
                    <p className="font-semibold text-foreground mb-1">UVA priotitizes Patient-first care</p>
                    <p className="text-muted-foreground">Your relationship with your care team remains personal, compassionate, and centered on your individual needs.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Patient Rights */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-accent/10">
              <FileText className="h-6 w-6 text-accent" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">Your Rights and Choices</h2>
          </div>

          <Card>
            <CardContent className="pt-6">
              <p className="text-foreground leading-relaxed mb-6">
                As a patient at UVA Health, you have the right to:
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Know when AI tools have been used in your care</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Request information about how AI contributed to clinical recommendations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Discuss concerns about AI use with your healthcare provider</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Access your medical records, including AI-generated insights</span>
                </li>
              </ul>

              <div className="bg-muted p-4 rounded-lg">
                <p className="font-semibold text-foreground mb-2">Questions or Concerns?</p>
                <p className="text-muted-foreground text-sm mb-3">
                  We're here to help. Contact us through:
                </p>
                <ul className="text-sm space-y-1">
                  <li className="text-foreground"><span className="font-medium">MyChart messaging:</span> Send a message to your care team</li>
                  <li className="text-foreground"><span className="font-medium">HIPAA Compliance Office:</span> <a href="mailto:hipaa@uvahealth.org" className="text-accent hover:underline">hipaa@uvahealth.org</a></li>
                  <li className="text-foreground"><span className="font-medium">Patient Relations:</span> <span className="text-accent">(434) 924-8315</span></li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-3">
            {faqs.map(faq => <Card key={faq.id}>
                <Collapsible open={openFaq === faq.id} onOpenChange={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}>
                  <CollapsibleTrigger className="w-full">
                    <CardHeader className="hover:bg-muted/50 transition-colors">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg text-left">{faq.question}</CardTitle>
                        <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform ${openFaq === faq.id ? 'transform rotate-180' : ''}`} />
                      </div>
                    </CardHeader>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>)}
          </div>
        </section>

        {/* Footer Note */}
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground text-center">
              This page was last updated in November 2025. UVA Health uses RAMP (Real-Time Analytics Monitoring Platform), IMPACT Pro predictive monitoring, DAX Copilot for clinical documentation, and CoMet for disease prediction. We are committed to transparency and will update this information as our use of AI evolves.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>;
};
export default Index;