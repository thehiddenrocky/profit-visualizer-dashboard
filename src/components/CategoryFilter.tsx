import { Badge } from "@/components/ui/badge";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export const CategoryFilter = ({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <Badge
        className={`cursor-pointer ${
          selectedCategory === null
            ? "bg-primary text-white"
            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
        }`}
        onClick={() => onSelectCategory(null)}
      >
        All
      </Badge>
      {categories.map((category) => (
        <Badge
          key={category}
          className={`cursor-pointer ${
            selectedCategory === category
              ? "bg-primary text-white"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200"
          }`}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </Badge>
      ))}
    </div>
  );
};