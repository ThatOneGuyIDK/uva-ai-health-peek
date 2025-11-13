export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: "replace",
    question: "Does AI replace my doctor?",
    answer: "No. AI helps your doctor, but your doctor is still in charge. AI gives ideas, and your doctor decides what's best for you."
  },
  {
    id: "opt-out",
    question: "Can I say no to AI tools?",
    answer: "Yes. For tools like DAX Copilot (the note writer), your doctor will ask if it's okay. You can say no anytime. Other tools like RAMP help keep all patients safe."
  },
  {
    id: "privacy",
    question: "Is my information safe?",
    answer: "Yes. We keep your information locked and private. We follow special rules called HIPAA. We never share your information with other companies."
  },
  {
    id: "know",
    question: "What is RAMP?",
    answer: "RAMP watches your health signs like heart rate and breathing. If something looks wrong, it tells your care team fast so they can help you."
  },
  {
    id: "accuracy",
    question: "Does the AI work well?",
    answer: "Yes. Doctors at UVA Health made RAMP and test it often to make sure it works right. Doctors always check what AI says before helping you."
  }
];

