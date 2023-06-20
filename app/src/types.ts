export interface Dictionary {
  idioms: Idioms;
  nav: Nav;
  hero1: Hero1;
  footer: Footer;
}

export interface Footer {
  siteSubTitle: string;
  menu: Menu[];
}

export interface Menu {
  title: string;
  children: Child[];
}

export interface Child {
  name: string;
  href: string;
}

export interface Hero1 {
  subTitle: string;
  title: string;
  description: string;
  contact: string;
}

export interface Idioms {
  en: string;
  pt: string;
}

export interface Nav {
  home: string;
  project: string;
  contact: string;
}

export interface Project {
  _id: string;
  name: string;
  image: string;
  tags: Tag[];
  descriptionEN: string;
  descriptionPT: string;
  bodyEN: string[];
  bodyPT: string[];
  repository: string
  host: string
}

interface Tag {
  title: string;
}
