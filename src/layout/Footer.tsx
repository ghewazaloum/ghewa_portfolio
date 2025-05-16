import { Linkedin, Mail, Phone } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-indigo-100 via-white to-indigo-200 py-8">
    <div className="max-w-6xl mx-auto px-4 flex justify-center space-x-8 text-[#061492]">
        <a
          href="mailto:ghewazaloum@gmail.com"
          aria-label="Email"
          className="hover:text-indigo-300 transition "
        >
          <Mail size={20} />
        </a>
        <a
          href="tel:+963954795924"
          aria-label="Phone"
          className="hover:text-indigo-300 transition"
        >
          <Phone size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/ghewa-zaloum-73a6b92a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-indigo-300 transition"
        >
          <Linkedin size={20} />
        </a>

 
      </div>
    </footer>
  )
}
