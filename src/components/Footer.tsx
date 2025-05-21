
const Footer = () => {
  return (
    <footer className="bg-secondary py-10 border-t border-gold/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold gold-gradient-text">Divya Vipparla</span>
            <p className="text-gray-400 text-sm mt-2">© {new Date().getFullYear()} All Rights Reserved</p>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <a href="#home" className="text-gray-300 hover:text-gold transition-colors">Home</a>
            <a href="#about" className="text-gray-300 hover:text-gold transition-colors">About</a>
            <a href="#skills" className="text-gray-300 hover:text-gold transition-colors">Skills</a>
            <a href="#experience" className="text-gray-300 hover:text-gold transition-colors">Experience</a>
            <a href="#projects" className="text-gray-300 hover:text-gold transition-colors">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-gold transition-colors">Contact</a>
          </div>
          <div className="mt-6 md:mt-0 flex gap-4">
            <a href="https://github.com" className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold hover:bg-gold/30 transition-colors">
              GH
            </a>
            <a href="https://linkedin.com" className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold hover:bg-gold/30 transition-colors">
              LI
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
