
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactButtonProps {
  className?: string;
}

const ContactButton = ({ className }: ContactButtonProps) => {
  return (
    <Button 
      variant="outline" 
      size="lg" 
      className={className}
      onClick={() => window.location.href = "tel:89500308830"}
    >
      <Phone className="mr-2 h-4 w-4" />
      8 950 030 88 30
    </Button>
  );
};

export default ContactButton;
