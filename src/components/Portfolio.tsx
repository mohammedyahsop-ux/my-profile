import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Filter } from "lucide-react";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "جميع الأعمال" },
    { id: "web", name: "مواقع ويب" },
    { id: "app", name: "تطبيقات" },
    { id: "ecommerce", name: "متاجر إلكترونية" }
  ];

  const projects = [
    {
      id: 1,
      title: "منصة التجارة الإلكترونية",
      description: "متجر إلكتروني متكامل مع نظام إدارة المخزون ومعالجة المدفوعات",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      category: "ecommerce",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "تطبيق إدارة المشاريع",
      description: "تطبيق ويب لإدارة المشاريع والمهام مع إمكانيات التعاون الجماعي",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
      category: "app",
      technologies: ["Vue.js", "Express", "PostgreSQL", "Socket.io"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "موقع شركة تقنية",
      description: "موقع شركة متجاوب مع لوحة إدارة للمحتوى ونظام حجز المواعيد",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      category: "web",
      technologies: ["Next.js", "TypeScript", "Sanity CMS", "Tailwind"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "منصة التعلم الإلكتروني",
      description: "منصة تعليمية شاملة مع نظام الكورسات والاختبارات وتتبع التقدم",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
      category: "app",
      technologies: ["React", "Django", "Redis", "AWS"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "مدونة شخصية تفاعلية",
      description: "مدونة شخصية مع نظام التعليقات والاشتراك والتصنيفات المتقدمة",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      category: "web",
      technologies: ["Gatsby", "GraphQL", "Netlify CMS", "styled-components"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "تطبيق الطقس الذكي",
      description: "تطبيق ويب للطقس مع توقعات مفصلة وخرائط تفاعلية",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=80",
      category: "app",
      technologies: ["React", "PWA", "Weather API", "Chart.js"],
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              معرض أعمالي
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              مجموعة مختارة من المشاريع التي عملت عليها، تعكس خبرتي في تطوير حلول تقنية متنوعة
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="transition-all duration-300"
              >
                <Filter className="w-4 h-4 mr-2" />
                {category.name}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="group overflow-hidden hover:shadow-elegant transition-all duration-300 animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-right">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-lg text-muted-foreground mb-6">
              هل تريد رؤية المزيد من أعمالي؟
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="#contact">
                تواصل معي لمناقشة مشروعك
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;