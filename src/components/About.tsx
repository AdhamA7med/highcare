import { Heart, Shield, Users, Clock } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "رعاية متخصصة",
      description: "فريق طبي متخصص يقدم أفضل مستويات الرعاية الصحية في منزلك",
    },
    {
      icon: Shield,
      title: "أمان وثقة",
      description: "نضمن لك أعلى معايير الأمان والجودة في تقديم الخدمات",
    },
    {
      icon: Users,
      title: "فريق محترف",
      description: "كادر تمريضي مدرب ومؤهل لتقديم أفضل خدمة ممكنة",
    },
    {
      icon: Clock,
      title: "متاحون دائماً",
      description: "نحن في خدمتك على مدار الساعة لضمان راحتك وراحة أحبائك",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              عن مؤسسة High Care
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
              نحن مؤسسة متخصصة في تقديم خدمات التمريض المنزلي ورعاية كبار السن في
              القاهرة، مصر. نؤمن بأن الرعاية الصحية يجب أن تكون متاحة في راحة منزلك،
              ونلتزم بتقديم أعلى مستويات الجودة والاحترافية في كل خدمة نقدمها.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl shadow-soft hover:shadow-hover transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Mission Statement */}
          <div className="bg-gradient-card p-8 md:p-12 rounded-3xl shadow-soft animate-scale-in">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center text-foreground">
              مهمتنا
            </h3>
            <p className="text-lg text-foreground/80 leading-relaxed text-center max-w-3xl mx-auto">
              نسعى لتوفير رعاية صحية منزلية متميزة تجمع بين الاحترافية والدفء الإنساني.
              نؤمن بأن كل شخص يستحق الحصول على رعاية صحية عالية الجودة في بيئة مريحة
              وآمنة. فريقنا ملتزم بتقديم خدمات تتجاوز توقعاتك وتضمن راحتك وراحة أحبائك.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
