import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code2, Database, Globe, Smartphone } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "تطوير الواجهات الأمامية",
      description: "تطوير واجهات مستخدم تفاعلية وحديثة",
      skills: [
        { name: "React & Next.js", level: 95 },
        { name: "TypeScript & JavaScript", level: 90 },
        { name: "Vue.js & Nuxt.js", level: 85 },
        { name: "HTML & CSS", level: 95 }
      ]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "تطوير الخدمات الخلفية",
      description: "بناء APIs قوية وقواعد بيانات محسنة",
      skills: [
        { name: "Node.js & Express", level: 88 },
        { name: "Python & Django", level: 82 },
        { name: "MongoDB & PostgreSQL", level: 85 },
        { name: "REST & GraphQL APIs", level: 90 }
      ]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "تطوير الويب الحديث",
      description: "تطبيق أحدث معايير وتقنيات الويب",
      skills: [
        { name: "Progressive Web Apps", level: 87 },
        { name: "Server-Side Rendering", level: 85 },
        { name: "Performance Optimization", level: 90 },
        { name: "SEO & Accessibility", level: 88 }
      ]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "التطوير متعدد المنصات",
      description: "تطبيقات تعمل على جميع الأجهزة",
      skills: [
        { name: "React Native", level: 80 },
        { name: "Flutter & Dart", level: 75 },
        { name: "Responsive Design", level: 95 },
        { name: "Cross-Browser Testing", level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              مهاراتي وخبراتي
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              مجموعة شاملة من المهارات التقنية المطلوبة لتطوير تطبيقات ويب عصرية ومتقدمة
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-elegant transition-all duration-300 animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardHeader className="text-center pb-4">
                  <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <CardDescription className="text-center">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                        style={{
                          animationDelay: `${(index * 4 + skillIndex) * 0.1}s`
                        }}
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto bg-gradient-primary text-primary-foreground">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">التعلم المستمر</h3>
                <p className="text-lg opacity-90">
                  أؤمن بأهمية التطوير المستمر للمهارات ومواكبة أحدث التقنيات في عالم البرمجة. 
                  أخصص وقتاً منتظماً لتعلم تقنيات جديدة والمشاركة في المجتمع التقني.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;