export interface SocialLink {
  readonly id: string;
  readonly href: string;
  readonly ariaLabel: string;
  readonly iconSrc: string;
  readonly iconClass: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: 'youtube',
    href: "https://www.youtube.com/@NoMoreHippocrites",
    ariaLabel: 'Go to youtube',
    iconSrc: "https://c.animaapp.com/medg3ymix0R5wb/assets/icon-5.svg",
    iconClass: "box-border h-4 w-[22px]"
  },
  {
    id: 'tiktok',
    href: "https://www.tiktok.com/@hippocrites",
    ariaLabel: 'Go to tiktok',
    iconSrc: "https://c.animaapp.com/medg3ymix0R5wb/assets/icon-6.svg",
    iconClass: "box-border h-5 w-[18px]"
  },
  {
    id: 'instagram',
    href: "https://www.instagram.com/nomorehippocrites/",
    ariaLabel: 'Go to instagram',
    iconSrc: "https://c.animaapp.com/medg3ymix0R5wb/assets/icon-7.svg",
    iconClass: "box-border h-5 w-5"
  }
] as const;
