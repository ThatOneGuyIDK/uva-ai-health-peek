import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Brain, Shield, Users, FileText, CheckCircle2, Lock, Eye, Heart } from "lucide-react";
import { useState, useMemo } from "react";
import { faqs } from "@/data/faqs";
import { aiTools } from "@/data/aiTools";
import { contactInfo } from "@/data/contactInfo";
import { AIToolCard } from "@/components/AIToolCard";
import { FAQItem } from "@/components/FAQItem";

const Index = () => {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const handleFaqToggle = (faqId: string) => {
    setOpenFaq(openFaq === faqId ? null : faqId);
  };

  const contactIcons = useMemo(() => ({
    heart: Heart,
    shield: Shield,
    users: Users
  }), []);
  return <div className="min-h-screen bg-background font-sans">
      {/* Header */}
      <header className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl">
            <div className="flex items-center justify-between mb-2">
              <div className="flex-1"></div>
              <h1 className="text-4xl font-bold text-center flex-1">UVA Health and Artificial Intelligence (AI)</h1>
              <div className="flex-1 flex justify-end">
                <Button asChild className="bg-accent hover:bg-accent/90 text-white font-semibold px-6 shadow-lg">
                  <a href="https://mychart-ai-review.lovable.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <div className="bg-white/20 p-1.5 rounded">
                      <Heart className="h-4 w-4 fill-white" />
                    </div>
                    MyChart
                  </a>
                </Button>
              </div>
            </div>
            <p className="text-lg opacity-90 text-center">Learn how Artificial Intelligence tools like IMPACT PRO help your doctors take care of you</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Intro Section */}
        <section className="mb-12">
          <Card className="border-l-4 border-l-accent bg-accent/5">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-accent/10 flex-shrink-0">
                  <Brain className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <p className="text-lg leading-relaxed text-foreground mb-4">
                  UVA Health uses artificial intelligence (AI) tools to help our medical staff provide faster, safer, and more personalized care. AI enhances the expertise of our healthcare team—it never replaces human judgment or compassion                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                  This page explains how we use AI, how we protect your information, and your rights as a patient. UVA Health believes in transparency and wants you to feel informed and confident about the technology that supports your care.                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* How AI Is Used */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-lg bg-accent text-accent-foreground">
              <Brain className="h-7 w-7" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">How AI Helps You</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {aiTools.map(tool => (
              <AIToolCard key={tool.id} tool={tool} />
            ))}
          </div>

          <Card className="bg-info/10 border-info border-2">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-info text-info-foreground flex-shrink-0">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <div>
                  <p className="font-bold text-foreground mb-2 text-lg">AI never makes care decisions alone</p>
                  <p className="text-foreground">
                  Every AI recommendation is reviewed by licensed healthcare professionals. Your doctor always has the final say in your treatment.                  </p>
                </div> 
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Data Protection */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-lg bg-success text-success-foreground">
              <Lock className="h-7 w-7" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">How UVA Protects Your Data</h2>
          </div>

          <Card className="border-2">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-success/5">
                  <div className="p-2 rounded-lg bg-success text-success-foreground flex-shrink-0">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground mb-2">Locked and Protected</p>
                    <p className="text-muted-foreground text-sm">All patient data is encrypted both in transit and at rest using advanced security protocols.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-success/5">
                  <div className="p-2 rounded-lg bg-success text-success-foreground flex-shrink-0">
                    <Eye className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground mb-2">Private Information</p>
                    <p className="text-muted-foreground text-sm">When possible, we keep your name and personal details private when using AI tools.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-success/5">
                  <div className="p-2 rounded-lg bg-success text-success-foreground flex-shrink-0">
                    <Lock className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground mb-2">HIPAA Compliance</p>
                    <p className="text-muted-foreground text-sm">We follow strict laws called HIPAA to keep your health information safe and secure.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-success/5">
                  <div className="p-2 rounded-lg bg-success text-success-foreground flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground mb-2">Your information is protected</p>
                    <p className="text-muted-foreground text-sm">Only authorized healthcare personnel can access your medical records and AI analysis results.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Human Oversight */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-lg bg-primary text-primary-foreground">
              <Users className="h-7 w-7" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">AI Helps Your Care Team</h2>
          </div>

          <Card className="border-2">
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="flex gap-4 p-4 rounded-lg bg-primary/5">
                  <div className="p-2 rounded-full bg-primary text-primary-foreground h-12 w-12 flex items-center justify-center flex-shrink-0 text-xl font-bold">1</div>
                  <div>
                    <p className="font-bold text-foreground mb-2">Doctors Make Choices</p>
                    <p className="text-muted-foreground">AI offers insights and recommendations, but your doctor reviews all information and makes the final clinical decisions.</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-lg bg-primary/5">
                  <div className="p-2 rounded-full bg-primary text-primary-foreground h-12 w-12 flex items-center justify-center flex-shrink-0 text-xl font-bold">2</div>
                  <div>
                    <p className="font-bold text-foreground mb-2">Doctors Check Everything</p>
                    <p className="text-muted-foreground">Doctors watch the AI to make sure it's working right and helping patients.</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-lg bg-primary/5">
                  <div className="p-2 rounded-full bg-primary text-primary-foreground h-12 w-12 flex items-center justify-center flex-shrink-0 text-xl font-bold">3</div>
                  <div>
                    <p className="font-bold text-foreground mb-2">UVA Prioritizes Patient-First Care</p>
                    <p className="text-muted-foreground">Your care team cares about you. AI just helps them do their job better.</p>
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
            <div className="p-3 rounded-lg bg-accent text-accent-foreground">
              <FileText className="h-7 w-7" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">What You Can Do</h2>
          </div>

          <Card className="border-2">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-accent/5">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Know when AI helped with your care</span>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-accent/5">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Ask questions about AI</span>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-accent/5">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Talk to your doctor about any worries</span>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-accent/5">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">See your medical records anytime in MyChart</span>
                </div>
              </div>

              <div className="bg-accent/10 p-6 rounded-lg border-2 border-accent/20">
                <p className="font-bold text-foreground mb-3 text-lg">Need Help?</p>
                <div className="space-y-3">
                  {contactInfo.map((contact, index) => {
                    const Icon = contactIcons[contact.icon];
                    return (
                      <div key={index} className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-accent flex-shrink-0" aria-hidden="true" />
                        <span className="text-foreground">
                          <span className="font-bold">{contact.label}:</span>{" "}
                          {contact.href ? (
                            <a href={contact.href} className="text-accent hover:underline">
                              {contact.value}
                            </a>
                          ) : (
                            <span className={contact.label === "Phone" ? "text-accent font-bold" : ""}>
                              {contact.value}
                            </span>
                          )}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* FAQ Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-lg bg-info text-info-foreground">
              <Brain className="h-7 w-7" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-3" role="list">
            {faqs.map(faq => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isOpen={openFaq === faq.id}
                onToggle={() => handleFaqToggle(faq.id)}
              />
            ))}
          </div>
        </section>

        {/* Footer Note */}
        <Card className="bg-primary/10 border-primary/20">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-foreground font-semibold mb-2">
                This page was last updated on November 2025. UVA Health is committed to transparency and will update this information as our use of AI evolves.
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>;
};
export default Index;