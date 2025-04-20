
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactButtonProps {
  className?: string;
}

const ContactButton = ({ className }: ContactButtonProps) => {
  return (
    <Button className={`bg-[#25D366] hover:bg-[#128C7E] text-white ${className}`}>
      <Phone className="mr-2 h-4 w-4" /> 8 950 030 88 30
    </Button>
  );
};

export default ContactButton;
