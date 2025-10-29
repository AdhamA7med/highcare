import { Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              تواصل معنا
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
              نحن هنا لخدمتك على مدار الساعة
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Phone Contact */}
            <div className="bg-gradient-card p-8 rounded-3xl shadow-soft hover:shadow-hover transition-all duration-300 animate-slide-up">
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                اتصل بنا
              </h3>
              <div className="space-y-3">
                <a
                  href="tel:01000211522"
                  className="block text-lg text-primary hover:text-primary-dark transition-colors duration-300 font-semibold"
                  dir="ltr"
                >
                  01000211522
                </a>
                <a
                  href="tel:01143244283"
                  className="block text-lg text-primary hover:text-primary-dark transition-colors duration-300 font-semibold"
                  dir="ltr"
                >
                  01143244283
                </a>
              </div>
              <Button
                onClick={() =>
                  window.open("https://wa.me/201000211522", "_blank")
                }
                className="w-full mt-6 bg-primary hover:bg-primary-dark text-primary-foreground shadow-soft hover:shadow-hover transition-all duration-300"
              >
                تواصل عبر واتساب
              </Button>
            </div>

            {/* Location */}
            <div className="bg-gradient-card p-8 rounded-3xl shadow-soft hover:shadow-hover transition-all duration-300 animate-slide-up delay-100">
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                موقعنا
              </h3>
              <p className="text-lg text-foreground/70 mb-4">
                القاهرة - مصر
              </p>
              <p className="text-foreground/60 leading-relaxed">
                نقدم خدماتنا في جميع أنحاء القاهرة الكبرى
              </p>
            </div>
          </div>

          {/* CTA Box */}
          <div className="bg-secondary/20 p-8 md:p-12 rounded-3xl shadow-soft text-center animate-scale-in">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              📍 لطلب إحدى خدماتنا
            </h3>
            <p className="text-lg text-foreground/70 mb-6">
              تواصل معنا الآن وسنصلك أينما كنت في القاهرة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                onClick={() =>
                  window.open("https://wa.me/201000211522", "_blank")
                }
                className="bg-primary hover:bg-primary-dark text-primary-foreground shadow-soft hover:shadow-hover transition-all duration-300"
              >
                <Phone className="ml-2 h-5 w-5" />
                احجز موعدك الآن
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
