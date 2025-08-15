export interface FestivalAward {
  readonly id: string;
  readonly alt: string;
  readonly src: string;
  readonly className: string;
}

export const festivalAwards: FestivalAward[] = [
  {
    id: 'isa',
    alt: 'ISA',
    src: "https://c.animaapp.com/medg3ymix0R5wb/assets/isa.png",
    className: "aspect-[auto_7575_/_3010] box-border h-[35.1562px] md:h-[35.5556px]"
  },
  {
    id: 'top-shorts',
    alt: 'Top Shorts',
    src: "https://c.animaapp.com/medg3ymix0R5wb/assets/top-shorts.png",
    className: "aspect-[auto_4620_/_4620] box-border h-[35.1562px] md:h-[35.5556px]"
  },
  {
    id: 'montreal',
    alt: 'Montreal',
    src: "https://c.animaapp.com/medg3ymix0R5wb/assets/montreal.png",
    className: "aspect-[auto_4756_/_3081] box-border h-[35.1562px] md:h-[35.5556px]"
  },
  {
    id: 'venice',
    alt: 'Venice',
    src: "https://c.animaapp.com/medg3ymix0R5wb/assets/venice.png",
    className: "aspect-[auto_4746_/_3075] box-border h-[35.1562px] md:h-[35.5556px]"
  },
  {
    id: 'beyond',
    alt: 'Beyond',
    src: "https://c.animaapp.com/medg3ymix0R5wb/assets/beyond.png",
    className: "aspect-[auto_1132_/_689] box-border h-[35.1562px] md:h-[35.5556px]"
  },
  {
    id: 'cannes-indie',
    alt: 'Cannes_Indie',
    src: "https://c.animaapp.com/medg3ymix0R5wb/assets/cannes_indie.png",
    className: "aspect-[auto_1117_/_607] box-border h-[35.1562px] md:h-[35.5556px]"
  },
  {
    id: 'ny-indie',
    alt: 'NY_Indie',
    src: "https://c.animaapp.com/medg3ymix0R5wb/assets/laurels_newyork_-54.png",
    className: "aspect-[auto_1151_/_639] box-border h-[35.1562px] md:h-[35.5556px]"
  },
  {
    id: 'sfm',
    alt: 'SFM',
    src: "https://c.animaapp.com/medg3ymix0R5wb/assets/sfm-finalist.png",
    className: "aspect-[auto_1864_/_1508] box-border h-[35.1562px] md:h-[35.5556px]"
  }
] as const;
