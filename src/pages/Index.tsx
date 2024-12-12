import { useState } from "react";
import { ActionCard } from "@/components/ActionCard";
import { CategoryFilter } from "@/components/CategoryFilter";
import { ChatInterface } from "@/components/chat/ChatInterface";
import { MarketIntelligence } from "@/components/MarketIntelligence";

interface Action {
  title: string;
  cost: "Low" | "Mid" | "High";
  reason: string;
  category: string;
  profitEstimate: string;
}

const actions: Action[] = [
  {
    title: "Add relevant fiber optic keywords",
    cost: "Low",
    reason: "Improves SEO rankings and organic traffic for high-intent searches",
    category: "Marketing",
    profitEstimate: "€5,000-€10,000/month",
  },
  {
    title: "Create FAQ section",
    cost: "Low",
    reason: "Builds trust and removes barriers for hesitant customers",
    category: "Customer Service",
    profitEstimate: "€2,000-€3,000/month",
  },
  {
    title: "Promote community group discounts",
    cost: "Low",
    reason: "Encourages neighborhoods to collaborate on installations",
    category: "Marketing",
    profitEstimate: "€3,000/month",
  },
  {
    title: "Add a Demand Check form",
    cost: "Low",
    reason: "Allows potential customers to register interest",
    category: "Data Collection",
    profitEstimate: "€5,000/month",
  },
  {
    title: "Optimize for local SEO",
    cost: "Mid",
    reason: "Targets underserved regions by tailoring content",
    category: "SEO Optimization",
    profitEstimate: "€6,000/month",
  },
  {
    title: "Bundle add-ons features",
    cost: "Mid",
    reason: "Meets emerging demand for bundled services",
    category: "Product Development",
    profitEstimate: "€10,000-€15,000/month",
  },
  {
    title: "Launch flexible payment plans",
    cost: "High",
    reason: "Addresses concerns about high upfront costs",
    category: "Financial Strategy",
    profitEstimate: "€20,000/month",
  },
  {
    title: "Invest in infrastructure improvements",
    cost: "High",
    reason: "Resolves technical issues and ensures consistent performance",
    category: "Infrastructure",
    profitEstimate: "€15,000-€25,000/month",
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
        <MarketIntelligence />
        
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedActions.map((action) => (
            <ActionCard key={action.title} {...action} />
          ))}
        </div>
      </div>
      <ChatInterface />
    </div>
  );
};

export default Index;