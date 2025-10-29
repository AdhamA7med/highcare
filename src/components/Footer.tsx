import { Phone, MapPin, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground/5 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="text-center md:text-right">
              <h3 className="text-2xl font-bold text-primary mb-4">
                High Care
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                مؤسسة متخصصة في خدمات التمريض المنزلي ورعاية كبار السن في القاهرة
              </p>
            </div>

            {/* Contact Info */}
            <div className="text-center">
              <h4 className="text-lg font-bold text-foreground mb-4">
                تواصل معنا
              </h4>
              <div className="space-y-3">
                <div className="flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <a
                    href="tel:01000211522"
                    className="text-foreground/70 hover:text-primary transition-colors duration-300"
                    dir="ltr"
                  >
                    01000211522
                  </a>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <a
                    href="tel:01143244283"
                    className="text-foreground/70 hover:text-primary transition-colors duration-300"
                    dir="ltr"
                  >
                    01143244283
                  </a>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-foreground/70">القاهرة - مصر</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="text-center md:text-left">
              <h4 className="text-lg font-bold text-foreground mb-4">
                خدماتنا
              </h4>
              <ul className="space-y-2 text-foreground/70">
                <li>تمريض منزلي</li>
                <li>رعاية كبار السن</li>
                <li>تركيب كانيولا</li>
                <li>تعليق محاليل</li>
                <li>زيارات منزلية</li>
                <li>رعاية ذوي الاحتياجات الخاصة</li>
              </ul>
            </div>
          </div>

          {/* Hashtags */}
          <div className="text-center mb-8">
            <p className="text-sm text-foreground/60 flex flex-wrap justify-center gap-2">
              <span>#هاى_كير</span>
              <span>#تمريض_منزلى</span>
              <span>#رعاية_مسنين</span>
              <span>#تركيب_كانيولا</span>
              <span>#تعليق_محاليل</span>
              <span>#زيارات_منزلية</span>
              <span>#ذوى_الاحتياجات_الخاصة</span>
            </p>
          </div>

          {/* Copyright */}
          <div className="border-t border-border pt-8 text-center">
            <p className="text-foreground/60 flex items-center justify-center gap-2">
              جميع الحقوق محفوظة © {currentYear} High Care
              <Heart className="h-4 w-4 text-primary fill-primary" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
