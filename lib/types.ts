export interface Header {
  brand: {
    full: string;
    short: string;
  },
  navigations: Navigation[]
}
export interface Navigation {
  name: string;
  path: string;
  className: string;
}
export interface Hero  {
  photo_link: string;
  highlight: string;
  intro: string;
  country: string;
  location: string;
  time_zone: string;
  status: string;
}
export interface About {
  photo_link: string;
  text: string;
}
export interface Work {
  name: string;
  year: string;
  repo: string;
  image?: string;
  tech: string[];
  bg: string;
}
export interface Experience {
  as: string;
  company: string;
  year: string;
}
export interface Contact {
  instagram: string;
  whatsapp: string;
  github: string;
  cv: string;
  linkedin: string;
}
