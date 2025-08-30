import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-profile.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-secondary">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-right space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              مرحباً، أنا{" "}
              <span className="bg-gradient-to-r from-primary-glow to-white bg-clip-text text-transparent">
                محمد يحصب
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-300 font-light">
              مطور ويب متخصص في تطوير تطبيقات الويب الحديثة
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0">
              أقوم بتصميم وتطوير مواقع وتطبيقات ويب عصرية ومتجاوبة باستخدام أحدث التقنيات. 
              أحب تحويل الأفكار إلى تجارب رقمية مبتكرة.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="hero"
                size="lg"
                onClick={() => scrollToSection("#portfolio")}
                className="text-lg px-8 py-3"
              >
                مشاهدة أعمالي
                <ArrowDown className="w-5 h-5 mr-2" />
              </Button>
              <Button
                variant="elegant"
                size="lg"
                onClick={() => scrollToSection("#contact")}
                className="text-lg px-8 py-3"
              >
                تواصل معي
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start pt-4">
              <Button variant="ghost" size="icon" className="text-white hover:text-primary">
                <Github className="w-6 h-6" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-primary">
                <Linkedin className="w-6 h-6" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-primary">
                <Mail className="w-6 h-6" />
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-glow">
                <img
                  src={heroImage}
                  alt="محمد يحصب - مطور ويب"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-primary rounded-full blur-md opacity-70 animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-glow/30 rounded-full blur-lg opacity-50 animate-float" style={{animationDelay: '2s'}}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-white opacity-70" />
      </div>
    </section>
  );
};

export default Hero;