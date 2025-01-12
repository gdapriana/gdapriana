import {About, Contact, Experience, Header, Hero, Work} from "@/lib/types";

export const header: Header = {
  brand: {
    full: "Gede Apriana",
    short: "GA",
  },
  navigations: [
    {name: "About", path: "#__about", className: "hidden md:inline" },
    {name: "Work", path: "#__work", className: "hidden md:inline" },
    {name: "Contact", path: "#__contact", className: ""},
  ]
}

export const hero: Hero = {
  photo_link: "https://lh3.googleusercontent.com/a/ACg8ocJv5Hn06WMGJPugcK2tMm9XrIPDSopUrUBlaBrt5wPFiraarNDKmA=s576-c-no",
  highlight: "I Connect with creators and builders to design and develop Framer websites reaching goals and delivering the message",
  intro: "Fullstack and Machine Learning Developer",
  location: "Gianyar, Bali",
  country: "Indonesia",
  time_zone: "GMT 8+",
  status: "AVAILABLE"
}

export const about: About = {
  photo_link: "/profile.jpg",
  text: "My name is I Komang Gede Apriana. I’m a Fullstack and Machine Learning Developer with a strong passion for technology since high school, where I focused on computer network engineering. Currently, I’m enhancing my skills through the Dicoding Frontend Backend program while pursuing a degree in Informatics at Udayana University."
}

export const works: Work[] = [
  {name: "Clickbait Detector", year: "2024", repo: "https://github.com/gdapriana/clickbait-detector-frontend", image: "https://github.com/gdapriana/clickbait-detector-frontend/raw/main/public/web.png", tech: ["Machine Learning", "Tensorflow"], bg: "bg-[#0F0D0C]"},
  {name: "Kelayakan Pinjaman", year: "2024", repo: "https://github.com/gdapriana/kelayakan-pinjaman-frontend", image: "https://github.com/gdapriana/kelayakan-pinjaman-frontend/raw/main/public/web.png", tech: ["Fuzzy", "Python"], bg: "bg-[#141210]"},
  {name: "Housing Price Regression", year: "2024", repo: "https://github.com/gdapriana/housing-price-regression", image: "https://github.com/gdapriana/housing-price-regression/raw/main/sources/capture.png", tech: ["Machine Learning", "Scikit-learn"], bg: "bg-[#191614]"},
]

export const experiences: Experience[] = [
  {as: "Machine Learning Cohort", company: "Bangkit Academy", year: "2023"},
  {as: "Fullstack Cohort", company: "Dicoding Indonesia", year: "2024"},
  {as: "Data Entry & Frontend Developer", company: "Jasa Web Creator", year: "2023"},
  {as: "It Consultan", company: "Lina Computer", year: "2020"},
]

export const contact: Contact = {
  whatsapp: "https://wa.me/6281339486902",
  instagram: "https://instagram.com/gdapriana",
  github: "https://github.com/gdaprianaa",
  cv: "https://drive.google.com/file/d/1yO3puA-Qqqko8UTIywSGiBUy_RyPpuhS/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/komang-apriana/",
}
