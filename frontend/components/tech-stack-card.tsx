import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface TechStackCardProps {
  name: string;
  stacks: string[];
}

export function TechStackCard({ name, stacks }: TechStackCardProps) {
  const handleShare = (platform: "twitter" | "linkedin") => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(
      `Check out my tech stack: ${stacks.join(", ")}`
    );
    const shareUrl =
      platform === "twitter"
        ? `https://twitter.com/intent/tweet?url=${url}&text=${text}`
        : `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    window.open(shareUrl, "_blank");
  };

  const handleSave = () => {
    // TODO: Implement save to gallery functionality
    console.log("Saving card to gallery");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <h2 className="text-2xl font-bold text-center">{name}</h2>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {stacks.map((stack) => (
              <Badge key={stack} variant="secondary">
                {stack}
              </Badge>
            ))}
          </div>
          <div className="flex justify-end space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleShare("twitter")}
            >
              Share to Twitter
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleShare("linkedin")}
            >
              Share to LinkedIn
            </Button>
            <Button variant="outline" size="sm" onClick={handleSave}>
              Save to Gallery
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
