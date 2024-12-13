import { useState } from "react";
import { ActionCard } from "@/components/ActionCard";
import { CategoryFilter } from "@/components/CategoryFilter";
import { ChatInterface } from "@/components/chat/ChatInterface";
import { MarketIntelligence } from "@/components/MarketIntelligence";
import { NotificationPanel } from "@/components/NotificationPanel";

interface Action {
  title: string;
  cost: "Low" | "Mid" | "High";
  reason: string;
  category: string;
  profitEstimate: string;
  timeline: string;
  evidence: string[];
  implementationSteps: string[];
  riskLevel: string;
  dataSources: string[];
}

const actions: Action[] = [
  {
    title: "Add relevant fiber optic keywords",
    cost: "Low",
    reason: "Improves SEO rankings and organic traffic for high-intent searches",
    category: "Marketing",
    profitEstimate: "€5,000-€10,000/month",
    timeline: "2 weeks",
    evidence: [
      "Competitor keyword analysis shows gaps",
      "High search volume for targeted terms",
      "Low current rankings for key phrases"
    ],
    implementationSteps: [
      "Conduct keyword research",
      "Update meta descriptions and titles",
      "Create new content around keywords",
      "Monitor rankings and traffic"
    ],
    riskLevel: "Low",
    dataSources: [
      "Google Search Console",
      "SEMrush Analytics",
      "Competitor Analysis"
    ]
  },
  {
    title: "Create FAQ section",
    cost: "Low",
    reason: "Builds trust and removes barriers for hesitant customers",
    category: "Customer Service",
    profitEstimate: "€2,000-€3,000/month",
    timeline: "1 week",
    evidence: [
      "50% of support tickets ask similar questions",
      "Competitors have comprehensive FAQs",
      "High bounce rate on product pages"
    ],
    implementationSteps: [
      "Analyze common support tickets",
      "Draft FAQ content",
      "Design and implement FAQ section",
      "Set up tracking metrics"
    ],
    riskLevel: "Low",
    dataSources: [
      "Support ticket analysis",
      "Customer feedback surveys",
      "Website analytics"
    ]
  },
  {
    title: "Promote community group discounts",
    cost: "Low",
    reason: "Encourages neighborhoods to collaborate on installations",
    category: "Marketing",
    profitEstimate: "€3,000/month",
    timeline: "3 weeks",
    evidence: [
      "Successful pilot in Helsinki suburbs",
      "30% conversion rate in test areas",
      "Positive community feedback"
    ],
    implementationSteps: [
      "Define group discount structure",
      "Create marketing materials",
      "Train sales team",
      "Launch neighborhood campaign"
    ],
    riskLevel: "Low",
    dataSources: [
      "Pilot program results",
      "Customer surveys",
      "Sales team feedback"
    ]
  },
  {
    title: "Add a Demand Check form",
    cost: "Low",
    reason: "Allows potential customers to register interest",
    category: "Data Collection",
    profitEstimate: "€5,000/month",
    timeline: "1 week",
    evidence: [
      "Increased inquiries from potential customers",
      "Positive feedback from initial users",
      "Competitors using similar forms"
    ],
    implementationSteps: [
      "Design the form layout",
      "Integrate with CRM system",
      "Promote the form on the website",
      "Analyze data collected"
    ],
    riskLevel: "Low",
    dataSources: [
      "User feedback",
      "Website analytics",
      "CRM data"
    ]
  },
  {
    title: "Optimize for local SEO",
    cost: "Mid",
    reason: "Targets underserved regions by tailoring content",
    category: "SEO Optimization",
    profitEstimate: "€6,000/month",
    timeline: "4 weeks",
    evidence: [
      "Identified local keywords with high search volume",
      "Competitors lack local content",
      "Positive trends in local search results"
    ],
    implementationSteps: [
      "Research local keywords",
      "Create localized content",
      "Optimize Google My Business listing",
      "Monitor local search performance"
    ],
    riskLevel: "Medium",
    dataSources: [
      "Google Analytics",
      "Keyword research tools",
      "Competitor analysis"
    ]
  },
  {
    title: "Bundle add-ons features",
    cost: "Mid",
    reason: "Meets emerging demand for bundled services",
    category: "Product Development",
    profitEstimate: "€10,000-€15,000/month",
    timeline: "6 weeks",
    evidence: [
      "Customer surveys indicate interest in bundles",
      "Competitors offering similar packages",
      "Increased sales of add-on features"
    ],
    implementationSteps: [
      "Identify popular add-ons",
      "Create bundle pricing strategy",
      "Market the new bundles",
      "Track sales performance"
    ],
    riskLevel: "Medium",
    dataSources: [
      "Sales data",
      "Customer feedback",
      "Market research"
    ]
  },
  {
    title: "Launch flexible payment plans",
    cost: "High",
    reason: "Addresses concerns about high upfront costs",
    category: "Financial Strategy",
    profitEstimate: "€20,000/month",
    timeline: "2 months",
    evidence: [
      "Customer feedback highlights payment concerns",
      "Competitors offering flexible plans",
      "Increased sales in similar markets"
    ],
    implementationSteps: [
      "Develop payment plan options",
      "Train sales team on new offerings",
      "Market the payment plans",
      "Monitor customer uptake"
    ],
    riskLevel: "High",
    dataSources: [
      "Customer surveys",
      "Sales data",
      "Market analysis"
    ]
  },
  {
    title: "Invest in infrastructure improvements",
    cost: "High",
    reason: "Resolves technical issues and ensures consistent performance",
    category: "Infrastructure",
    profitEstimate: "€15,000-€25,000/month",
    timeline: "3 months",
    evidence: [
      "Customer complaints about service interruptions",
      "Competitor infrastructure upgrades",
      "Positive ROI from past improvements"
    ],
    implementationSteps: [
      "Conduct infrastructure audit",
      "Identify key areas for improvement",
      "Allocate budget for upgrades",
      "Implement changes and monitor results"
    ],
    riskLevel: "Medium",
    dataSources: [
      "Customer feedback",
      "Technical audits",
      "Performance metrics"
    ]
  },
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(actions.map((action) => action.category)));
  
  const filteredActions = selectedCategory
    ? actions.filter((action) => action.category === selectedCategory)
    : actions;

  const sortedActions = [...filteredActions].sort((a, b) => {
    const costOrder = { Low: 1, Mid: 2, High: 3 };
    return costOrder[a.cost] - costOrder[b.cost];
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8">
        <div className="flex gap-8">
          <div className="w-[380px] sticky top-8 self-start">
            <NotificationPanel />
          </div>
          
          <div className="flex-1">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-secondary mb-2">
                Profitability Action Plan
              </h1>
              <p className="text-gray-600">
                Prioritized actions to increase revenue, sorted by implementation cost
              </p>
            </div>

            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />

            <MarketIntelligence />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedActions.map((action) => (
                <ActionCard key={action.title} {...action} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;