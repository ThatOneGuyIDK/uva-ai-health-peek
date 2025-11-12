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
    answer: "No. AI helps your doctor, but your doctor is still in charge. AI gives ideas, and your doctor decides what's best for you."
  }, {
    id: "opt-out",
    question: "Can I say no to AI tools?",
    answer: "Yes. For tools like DAX Copilot (the note writer), your doctor will ask if it's okay. You can say no anytime. Other tools like RAMP help keep all patients safe."
  }, {
    id: "privacy",
    question: "Is my information safe?",
    answer: "Yes. We keep your information locked and private. We follow special rules called HIPAA. We never share your information with other companies."
  }, {
    id: "know",
    question: "What is RAMP?",
    answer: "RAMP watches your health signs like heart rate and breathing. If something looks wrong, it tells your care team fast so they can help you."
  }, {
    id: "accuracy",
    question: "Does the AI work well?",
    answer: "Yes. Doctors at UVA Health made RAMP and test it often to make sure it works right. Doctors always check what AI says before helping you."
  }];
  return <div className="min-h-screen bg-background font-sans">
      {/* Header */}
      <header className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl">
            <div className="flex items-start justify-between mb-2">
              <h1 className="text-4xl font-bold">How UVA Health Uses AI to Help You</h1>
              <Button asChild className="bg-accent hover:bg-accent/90 text-white font-semibold px-6 shadow-lg">
                <a href="https://mychart.uvahealth.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <div className="bg-white/20 p-1.5 rounded">
                    <Heart className="h-4 w-4 fill-white" />
                  </div>
                  MyChart
                </a>
              </Button>
            </div>
            <p className="text-lg opacity-90">Learn how our computer tools help your doctors take care of you</p>
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
                    UVA Health uses special computer programs to help our doctors and nurses take better care of you. These programs are called AI (Artificial Intelligence).
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    AI helps doctors spot problems early and spend more time with you. Your doctor always makes the final choices about your care—not the computer.
                  </p>
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
            <Card className="border-l-4 border-l-accent">
              <CardHeader className="bg-accent/5">
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-accent text-accent-foreground">
                    <HeartPulse className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xl">RAMP</div>
                    <div className="text-sm font-normal text-muted-foreground">Watches Your Health 24/7</div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-foreground mb-3">
                  RAMP watches your heart rate, breathing, and other health signs all day and night.
                </p>
                <p className="text-muted-foreground text-sm">
                  If something looks wrong, RAMP tells your care team right away so they can help you fast.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-success">
              <CardHeader className="bg-success/5">
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-success text-success-foreground">
                    <Heart className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xl">IMPACT Pro</div>
                    <div className="text-sm font-normal text-muted-foreground">Heart Health Helper</div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-foreground mb-3">
                  IMPACT Pro helps doctors take care of patients with heart problems.
                </p>
                <p className="text-muted-foreground text-sm">
                  It uses pictures and graphs to show doctors when a heart patient might need extra help.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-info">
              <CardHeader className="bg-info/5">
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-info text-info-foreground">
                    <FileText className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xl">DAX Copilot</div>
                    <div className="text-sm font-normal text-muted-foreground">Smart Note Writer</div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-foreground mb-3">
                  DAX Copilot listens to you and your doctor talk. Then it writes notes about your visit.
                </p>
                <p className="text-muted-foreground text-sm mb-3">
                  This gives your doctor more time to look at you and talk to you instead of typing.
                </p>
                <p className="text-muted-foreground text-sm">
                  Your doctor will ask if it's okay to use this tool. You can see the notes in MyChart.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardHeader className="bg-primary/5">
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary text-primary-foreground">
                    <Brain className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xl">CoMet</div>
                    <div className="text-sm font-normal text-muted-foreground">Finds Health Risks Early</div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-foreground mb-3">
                  CoMet looks at your health information to find problems before they get big.
                </p>
                <p className="text-muted-foreground text-sm">
                  This helps your doctor make a care plan that's just right for you.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-info/10 border-info border-2">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-info text-info-foreground flex-shrink-0">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <div>
                  <p className="font-bold text-foreground mb-2 text-lg">Your Doctor Always Decides</p>
                  <p className="text-foreground">
                    AI gives ideas to your doctor, but your doctor always makes the final choice about your care.
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
            <div className="p-3 rounded-lg bg-success text-success-foreground">
              <Lock className="h-7 w-7" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">Keeping Your Information Safe</h2>
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
                    <p className="text-muted-foreground text-sm">Your health information is locked up tight. Only your doctors and nurses can see it.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-success/5">
                  <div className="p-2 rounded-lg bg-success text-success-foreground flex-shrink-0">
                    <Eye className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground mb-2">Private Information</p>
                    <p className="text-muted-foreground text-sm">We keep your name and personal details private when using AI tools.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-success/5">
                  <div className="p-2 rounded-lg bg-success text-success-foreground flex-shrink-0">
                    <Lock className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground mb-2">Special Rules</p>
                    <p className="text-muted-foreground text-sm">We follow strict laws called HIPAA to keep your health information safe.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-success/5">
                  <div className="p-2 rounded-lg bg-success text-success-foreground flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground mb-2">We Never Share</p>
                    <p className="text-muted-foreground text-sm">Your information stays with UVA Health. We don't give it to other companies.</p>
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
                    <p className="text-muted-foreground">AI gives ideas, but your doctor picks what's best for you.</p>
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
                    <p className="font-bold text-foreground mb-2">You Come First</p>
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
                  <span className="text-foreground">See your medical records anytime</span>
                </div>
              </div>

              <div className="bg-accent/10 p-6 rounded-lg border-2 border-accent/20">
                <p className="font-bold text-foreground mb-3 text-lg">Need Help?</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Heart className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground"><span className="font-bold">MyChart:</span> Message your care team</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground"><span className="font-bold">Email:</span> <a href="mailto:hipaa@uvahealth.org" className="text-accent hover:underline">hipaa@uvahealth.org</a></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground"><span className="font-bold">Phone:</span> <span className="text-accent font-bold">(434) 924-8315</span></span>
                  </div>
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
            <h2 className="text-3xl font-bold text-foreground">Questions You Might Have</h2>
          </div>
          
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
        <Card className="bg-primary/10 border-primary/20">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-foreground font-semibold mb-2">
                We will keep this page up to date as we use new AI tools.
              </p>
              <p className="text-sm text-muted-foreground">
                Last updated: November 2025
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>;
};
export default Index;