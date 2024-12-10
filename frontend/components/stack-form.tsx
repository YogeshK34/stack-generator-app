"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { CartoonishButton } from "@/components/cartoonish-button";
import { useRouter } from "next/navigation";
import { generateCard } from "@/utils/api";

const predefinedStacks = {
  frontend: [
    { name: "React", icon: "mdi-react" },
    { name: "Next.js", icon: "mdi-nodejs" },
    { name: "Vue", icon: "mdi-vuejs" },
    { name: "Angular", icon: "mdi-angular" },
    { name: "Svelte", icon: "mdi-lighthouse" },
  ],
  backend: [
    { name: "Node.js", icon: "mdi-nodejs" },
    { name: "Python", icon: "mdi-language-python" },
    { name: "Java", icon: "mdi-language-java" },
    { name: "Go", icon: "mdi-language-go" },
    { name: "Ruby", icon: "mdi-language-ruby" },
  ],
  database: [
    { name: "MongoDB", icon: "mdi-database" },
    { name: "PostgreSQL", icon: "mdi-database" },
    { name: "MySQL", icon: "mdi-database" },
    { name: "Redis", icon: "mdi-database" },
    { name: "Supabase", icon: "mdi-database" },
  ],
  deployment: [
    { name: "Vercel", icon: "mdi-cloud" },
    { name: "AWS", icon: "mdi-aws" },
    { name: "GCP", icon: "mdi-google-cloud" },
    { name: "Azure", icon: "mdi-microsoft-azure" },
    { name: "Netlify", icon: "mdi-cloud" },
  ],
};

export function StackForm() {
  const [selectedStacks, setSelectedStacks] = useState<
    Array<{ name: string; icon: string }>
  >([]);
  const [name, setName] = useState("");
  const router = useRouter();

  const handleGenerateCard = async () => {
    try {
      const result = await generateCard(name, selectedStacks);
      console.log(result.message);
      const encodedData = encodeURIComponent(
        JSON.stringify({ name, stacks: selectedStacks })
      );
      router.push(`/card?data=${encodedData}`);
    } catch (error) {
      console.error("Error generating card:", error);
    }
    <button
      onClick={() => {
        router.push("/");
      }}
    >
      Create one more showcasr card
    </button>;
  };

  return (
    <div className="max-w-md mx-auto space-y-6 p-4 bg-white rounded-lg shadow-lg">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-xl font-bold">
          Your Name
        </Label>
        <Input
          id="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="text-lg border-2 border-gray-300 rounded-md"
        />
      </div>

      <div className="space-y-4">
        <Label className="text-xl font-bold">Select Tech Stacks</Label>
        {Object.entries(predefinedStacks).map(([category, stacks]) => (
          <div key={category} className="space-y-2">
            <Label className="text-lg font-semibold capitalize">
              {category}
            </Label>
            <Select
              onValueChange={(value) => {
                const selected = stacks.find((stack) => stack.name === value);
                if (selected) {
                  setSelectedStacks((prev) => [...prev, selected]);
                }
              }}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder={`Select ${category} stack`} />
              </SelectTrigger>
              <SelectContent>
                {stacks.map((stack) => (
                  <SelectItem key={stack.name} value={stack.name}>
                    <span className="flex items-center">
                      <i className={`${stack.icon} mr-2`}></i>
                      {stack.name}
                    </span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {selectedStacks.map((stack) => (
          <Badge
            key={stack.name}
            variant="secondary"
            className="text-lg py-2 px-3 rounded-full cursor-pointer flex items-center"
            onClick={() =>
              setSelectedStacks((prev) =>
                prev.filter((item) => item.name !== stack.name)
              )
            }
          >
            <i className={`${stack.icon} mr-2`}></i>
            {stack.name}
            <span className="ml-2">×</span>
          </Badge>
        ))}
      </div>

      <CartoonishButton
        onClick={handleGenerateCard}
        disabled={!name || selectedStacks.length === 0}
      >
        Generate Awesome Card!
      </CartoonishButton>
    </div>
  );
}
