import { Button } from "@/components/ui/button";
import { Phone, Heart } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden pt-20"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Icon */}
          <div className="mb-8 flex justify-center">
            <div className="bg-primary/10 p-6 rounded-full animate-scale-in">
              <Heart className="w-16 h-16 text-primary" />
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-relaxed animate-slide-up">
            خليك مكانك واحنا هنوصلك .. راحتك تهمنا 🤍
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 leading-relaxed animate-slide-up delay-100">
            مؤسسة High Care لخدمة كبار السن والتمريض المنزلي
            <br />
            فريق متخصص يقدملك الرعاية الكاملة في بيتك✅
          </p>

          {/* Additional text */}
          <p className="text-lg md:text-xl text-foreground/70 mb-10 animate-slide-up delay-200">
            راحة وأمان وجودة في كل لحظة 🌸
            <br />
            اطلبنا تجدنا أينما كنت 🤝
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up delay-300">
            <Button
              size="lg"
              onClick={() =>
                window.open("https://wa.me/201000211522", "_blank")
              }
              className="bg-primary hover:bg-primary-dark text-primary-foreground shadow-soft hover:shadow-hover transition-all duration-300 text-lg px-8 py-6"
            >
              <Phone className="ml-2 h-5 w-5" />
              تواصل معنا عبر واتساب
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.getElementById("services");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8 py-6"
            >
              اعرف المزيد عن خدماتنا
            </Button>
          </div>

          {/* Contact Numbers */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center text-foreground/70 animate-slide-up delay-400">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-primary" />
              <span className="font-semibold" dir="ltr">01000211522</span>
            </div>
            <span className="hidden sm:block">|</span>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-primary" />
              <span className="font-semibold" dir="ltr">01143244283</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
