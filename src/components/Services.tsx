import { Heart, Users, Syringe, Droplets, Home, HandHeart } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "تمريض منزلي",
      description:
        "خدمات تمريضية شاملة في منزلك مع فريق محترف ومؤهل لتقديم أفضل رعاية طبية",
    },
    {
      icon: Users,
      title: "رعاية كبار السن",
      description:
        "رعاية خاصة لكبار السن تشمل المتابعة الصحية اليومية والدعم النفسي والاجتماعي",
    },
    {
      icon: Syringe,
      title: "تركيب كانيولا",
      description:
        "تركيب كانيولا وريدية بأيدي متخصصة وبأعلى معايير السلامة والتعقيم",
    },
    {
      icon: Droplets,
      title: "تعليق محاليل",
      description:
        "خدمة تعليق المحاليل الوريدية والعلاجات في المنزل بإشراف طبي متخصص",
    },
    {
      icon: Home,
      title: "زيارات منزلية",
      description:
        "زيارات منزلية دورية للمتابعة الصحية والعناية الطبية المستمرة",
    },
    {
      icon: HandHeart,
      title: "رعاية ذوي الاحتياجات الخاصة",
      description:
        "رعاية شاملة لذوي الاحتياجات الخاصة مع فريق مدرب على التعامل مع مختلف الحالات",
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              خدماتنا المتميزة
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
              نقدم مجموعة شاملة من خدمات الرعاية الصحية المنزلية بأعلى معايير الجودة
              والاحترافية
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-card p-8 rounded-3xl shadow-soft hover:shadow-hover transition-all duration-300 cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300">
                  <service.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center animate-scale-in">
            <div className="bg-secondary/20 p-8 md:p-12 rounded-3xl shadow-soft">
              <p className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                هل تحتاج لأي من خدماتنا؟
              </p>
              <p className="text-lg text-foreground/70 mb-6">
                تواصل معنا الآن للحصول على استشارة مجانية وحجز موعد
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://wa.me/201000211522"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary-dark text-primary-foreground rounded-full shadow-soft hover:shadow-hover transition-all duration-300 font-semibold"
                >
                  تواصل عبر واتساب
                </a>
                <div className="text-foreground/70 flex flex-col sm:flex-row gap-2">
                  <span dir="ltr">01000211522</span>
                  <span className="hidden sm:inline">•</span>
                  <span dir="ltr">01143244283</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
