import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Rocket, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "تطوير تقني",
      description: "خبرة في أحدث تقنيات تطوير الويب"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "تصميم إبداعي",
      description: "تصميم واجهات مستخدم جذابة ومبتكرة"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "أداء متميز",
      description: "تطوير تطبيقات سريعة ومحسنة"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "تعاون فعال",
      description: "العمل بفعالية ضمن فرق متنوعة"
    }
  ];

  const technologies = [
    "React", "TypeScript", "Node.js", "Next.js", "Vue.js",
    "Python", "MongoDB", "PostgreSQL", "Docker", "AWS"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              نبذة عني
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              مطور ويب شغوف بتقنيات الويب الحديثة ومتخصص في بناء تطبيقات ويب فعالة ومبتكرة
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* About Text */}
            <div className="space-y-6 text-right">
              <p className="text-lg text-muted-foreground leading-relaxed">
                أنا محمد يحصب، مطور ويب مع أكثر من 5 سنوات من الخبرة في تطوير التطبيقات والمواقع الإلكترونية.
                أتخصص في تطوير واجهات المستخدم التفاعلية وتطبيقات الويب الحديثة.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                أؤمن بأن التكنولوجيا يجب أن تكون في خدمة الإنسان، لذلك أركز على إنشاء حلول تقنية 
                تجمع بين الوظائف القوية والتصميم الجذاب لتوفير تجربة مستخدم استثنائية.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                أحب التعلم المستمر ومواكبة أحدث التطورات في عالم التقنية، وأسعى دائماً 
                لتطبيق أفضل الممارسات في مشاريعي.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8">التقنيات التي أعمل بها</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;