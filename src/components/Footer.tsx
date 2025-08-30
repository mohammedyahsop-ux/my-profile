import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com",
      label: "LinkedIn"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:mohammedyahsop2013@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-gradient-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="text-center md:text-right">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary-glow to-white bg-clip-text text-transparent">
                محمد يحصب
              </h3>
              <p className="text-gray-300 mb-4">
                مطور ويب متخصص في إنشاء تجارب رقمية استثنائية
              </p>
              <div className="flex gap-3 justify-center md:justify-start">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    asChild
                    className="text-white hover:text-primary-glow hover:bg-white/10"
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h4 className="text-lg font-semibold mb-4">روابط سريعة</h4>
              <nav className="space-y-2">
                <a href="#home" className="block text-gray-300 hover:text-primary-glow transition-colors duration-300">
                  الرئيسية
                </a>
                <a href="#about" className="block text-gray-300 hover:text-primary-glow transition-colors duration-300">
                  نبذة عني
                </a>
                <a href="#skills" className="block text-gray-300 hover:text-primary-glow transition-colors duration-300">
                  المهارات
                </a>
                <a href="#portfolio" className="block text-gray-300 hover:text-primary-glow transition-colors duration-300">
                  الأعمال
                </a>
                <a href="#contact" className="block text-gray-300 hover:text-primary-glow transition-colors duration-300">
                  التواصل
                </a>
              </nav>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold mb-4">تواصل معي</h4>
              <div className="space-y-2 text-gray-300">
                <p>mohammedyahsop2013@gmail.com</p>
                <p>+966 50 123 4567</p>
                <p>الرياض، المملكة العربية السعودية</p>
              </div>
              <Button
                variant="hero"
                size="sm"
                className="mt-4"
                onClick={scrollToTop}
              >
                العودة للأعلى
              </Button>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-white/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-300 text-sm text-center md:text-right">
                © {currentYear} محمد يحصب. جميع الحقوق محفوظة.
              </p>
              <p className="text-gray-300 text-sm flex items-center gap-1">
                صنع بـ <Heart className="w-4 h-4 text-red-400" /> في السعودية
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;