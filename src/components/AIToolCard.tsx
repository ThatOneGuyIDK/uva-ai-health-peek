import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AITool } from "@/data/aiTools";

interface AIToolCardProps {
  tool: AITool;
}

const colorConfig = {
  accent: {
    border: "border-l-accent",
    headerBg: "bg-accent/5",
    iconBg: "bg-accent",
    iconText: "text-accent-foreground"
  },
  success: {
    border: "border-l-success",
    headerBg: "bg-success/5",
    iconBg: "bg-success",
    iconText: "text-success-foreground"
  },
  info: {
    border: "border-l-info",
    headerBg: "bg-info/5",
    iconBg: "bg-info",
    iconText: "text-info-foreground"
  },
  primary: {
    border: "border-l-primary",
    headerBg: "bg-primary/5",
    iconBg: "bg-primary",
    iconText: "text-primary-foreground"
  }
};

export const AIToolCard = ({ tool }: AIToolCardProps) => {
  const Icon = tool.icon;
  const colors = colorConfig[tool.color];

  return (
    <Card className={`border-l-4 ${colors.border}`}>
      <CardHeader className={colors.headerBg}>
        <CardTitle className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${colors.iconBg} ${colors.iconText}`}>
            <Icon className="h-6 w-6" />
          </div>
          <div>
            <div className="text-xl">{tool.name}</div>
            <div className="text-sm font-normal text-muted-foreground">{tool.subtitle}</div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <p className="text-foreground mb-3">{tool.description}</p>
        <p className="text-muted-foreground text-sm">{tool.details}</p>
      </CardContent>
    </Card>
  );
};

