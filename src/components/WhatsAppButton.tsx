import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/201000211522"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-hover hover:shadow-lg transition-all duration-300 animate-scale-in group"
      aria-label="تواصل معنا عبر واتساب"
    >
      <MessageCircle className="h-7 w-7 group-hover:scale-110 transition-transform duration-300" />
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-4 py-2 bg-foreground/90 text-background text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        تواصل معنا عبر واتساب
      </div>
    </a>
  );
};

export default WhatsAppButton;
