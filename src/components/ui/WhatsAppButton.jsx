import { MessageCircle } from 'lucide-react';
import Button from '../common/Button';

const WhatsAppButton = ({ productName, className = '', size = 'lg' }) => {
  const phoneNumber = '923310000679';
  const message = productName
    ? `Hi, I'm interested in wholesale for ${productName}. Please share MOQ & pricing.`
    : "Hi, I'm interested in wholesale. Please share MOQ & pricing.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Button
      href={whatsappUrl}
      target="_blank"
      variant="whatsapp"
      size={size}
      className={`w-full ${className}`}
    >
      <MessageCircle className="w-5 h-5 mr-2" />
      Contact via WhatsApp
    </Button>
  );
};

export default WhatsAppButton;

