import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "أحمد محمود",
      rating: 5,
      text: "خدمة ممتازة جداً، الفريق محترف ومتعاون. والدتي حصلت على أفضل رعاية ممكنة في المنزل. شكراً High Care على الاهتمام والاحترافية.",
    },
    {
      name: "فاطمة حسن",
      rating: 5,
      text: "أنصح الجميع بالتعامل مع High Care. الممرضات على قدر عالي من المسؤولية والأخلاق. جدي في أفضل حال بفضل رعايتهم المستمرة.",
    },
    {
      name: "محمد علي",
      rating: 5,
      text: "متابعة دقيقة واهتمام بالتفاصيل. الفريق دائماً متواجد ومستعد للمساعدة. سعر مناسب ورعاية ممتازة، ما كنت أتوقع أحسن من كده.",
    },
    {
      name: "نور الدين",
      rating: 5,
      text: "والدي كان يحتاج رعاية خاصة بعد العملية، وفريق High Care كان على قدر المسؤولية تماماً. متشكرين جداً على الخدمة المتميزة.",
    },
    {
      name: "ياسمين أحمد",
      rating: 5,
      text: "تجربة رائعة مع High Care. الممرضات محترفات وعندهم خبرة كبيرة. جدتي بتحبهم جداً وبنشوف تحسن كبير في حالتها الصحية.",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              آراء عملائنا
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
              نفخر بثقة عملائنا ورضاهم عن خدماتنا
            </p>
          </div>

          {/* Testimonial Slider */}
          <div className="relative">
            <div className="bg-gradient-card p-8 md:p-12 rounded-3xl shadow-soft animate-scale-in">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed text-center mb-8 min-h-[120px]">
                "{testimonials[currentIndex].text}"
              </p>

              {/* Client Name */}
              <p className="text-lg font-bold text-primary text-center">
                {testimonials[currentIndex].name}
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-primary/30 hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
