import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Brain, Shield, Users, FileText, ChevronDown, CheckCircle2, Lock, Eye, HeartPulse } from "lucide-react";
import { useState } from "react";
const Index = () => {
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const faqs = [{
    id: "replace",
    question: "Does AI replace my doctor?",
    answer: "No. AI is a tool that helps your clinicians work more efficiently and accurately. Your doctor always reviews AI recommendations and makes the final decisions about your care. AI supports human expertise—it doesn't replace it."
  }, {
    id: "opt-out",
    question: "Can I opt out of AI-based tools?",
    answer: "Yes. You have the right to discuss AI use in your care with your provider. While some AI tools are integrated into standard clinical workflows, we respect your preferences and will work with you to address any concerns you may have."
  }, {
    id: "privacy",
    question: "How is my privacy protected?",
    answer: "UVA Health follows strict HIPAA regulations and uses advanced security measures including data encryption, de-identification, and controlled access. Your data is never shared with third parties or used to train commercial AI models without your explicit consent."
  }, {
    id: "know",
    question: "Will I know when AI is used in my care?",
    answer: "Yes. We're committed to transparency. Your care team can inform you when AI tools have been used to support clinical decisions, and you can always request more information about AI's role in your treatment."
  }, {
    id: "accuracy",
    question: "How accurate is the AI?",
    answer: "Our AI tools undergo rigorous testing and validation before use. They're continuously monitored for accuracy and are only used in situations where they've proven to enhance clinical outcomes. All AI outputs are reviewed by licensed medical professionals."
  }];
  return <div className="min-h-screen bg-background font-sans">
      {/* Header */}
      <header className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold mb-2">UVA Health and Artificial Intelligence (AI)</h1>
            <p className="text-lg opacity-90">Understanding how AI supports your care</p>
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
                UVA Health uses artificial intelligence (AI) tools to help our clinicians provide faster, safer, and more personalized care. AI enhances the expertise of our healthcare team—it never replaces human judgment or compassion.
              </p>
              <p className="text-muted-foreground leading-relaxed">This page explains how we use AI, how we protect your information, and your rights as a patient. UVA Health believes in transparency and wants you to feel informed and confident about the technology that supports your care.</p>
            </CardContent>
          </Card>
        </section>

        {/* How AI Is Used */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-accent/10">
              <Brain className="h-6 w-6 text-accent" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">How AI Is Used in Your Care</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-accent" />
                  Medical Imaging
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  AI helps radiologists detect patterns in X-rays, CT scans, and MRIs, making it easier to identify potential issues quickly and accurately.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HeartPulse className="h-5 w-5 text-accent" />
                  Diagnostic Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  AI analyzes symptoms and medical history to help clinicians identify potential conditions and recommend appropriate tests.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-accent" />
                  Clinical Documentation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  AI assists with summarizing clinical notes and medical records, giving providers more time to focus on patient care.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-accent" />
                  Safety Checks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  AI reviews medications for potential interactions and alerts providers to safety concerns before prescriptions are finalized.
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
                    Every AI recommendation is reviewed and validated by licensed healthcare professionals. Your doctor always has the final say in your treatment.
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
                Your privacy and data security are our top priorities. We use industry-leading safeguards to protect your information:
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Data Encryption</p>
                    <p className="text-muted-foreground">All patient data is encrypted both in transit and at rest using advanced security protocols.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">De-identification</p>
                    <p className="text-muted-foreground">When possible, AI systems work with de-identified data that cannot be traced back to individual patients.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Access Controls</p>
                    <p className="text-muted-foreground">Only authorized healthcare personnel can access your medical records and AI analysis results.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">HIPAA Compliance</p>
                    <p className="text-muted-foreground">All AI tools and data practices fully comply with federal HIPAA privacy regulations.</p>
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
              This page was last updated on March 2025. UVA Health is committed to transparency and will update this information as our use of AI evolves.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>;
};
export default Index;