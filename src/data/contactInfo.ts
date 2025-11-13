export interface ContactMethod {
  icon: "heart" | "shield" | "users";
  label: string;
  value: string;
  href?: string;
}

export const contactInfo: ContactMethod[] = [
  {
    icon: "heart",
    label: "MyChart",
    value: "Message your care team and see your medical records"
  },
  {
    icon: "shield",
    label: "Email",
    value: "hipaa@uvahealth.org",
    href: "mailto:hipaa@uvahealth.org"
  },
  {
    icon: "users",
    label: "Phone",
    value: "(434) 924-8315"
  }
];

