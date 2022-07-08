export enum SocialType {
  discord = "discord",
  twitter = "twitter",
  youtube = "youtube",
  tiktok = "tiktok",
  twitch = "twitch",
}

export interface IMember {
  name: string;
  img: string;
  socials?: Partial<Record<SocialType, string>>;
}

const membes_list: IMember[] = [
  {
    name: "Yui",
    img: "/images/Yui_PNG.png",
    socials: {
      [SocialType.twitter]: "https://twitter.com/YuichanVtuber",
      [SocialType.twitch]: "https://twitter.com/YuichanVtuber",
    },
  },
  {
    name: "Shiro",
    img: "/images/Shiro_PNG.png",
    socials: {
      [SocialType.twitter]: "https://twitter.com/Shirouzin",
      [SocialType.twitch]: "https://www.twitch.tv/shirotubo",
    },
  },
  {
    name: "Taka",
    img: "/images/Taka_PNG.png",
    socials: {
      [SocialType.twitter]: "https://twitter.com/_taaakaaaa",
      [SocialType.twitch]: "https://www.twitch.tv/taaakaaaa",
    },
  },
  {
    name: "Eriel",
    img: "/images/Eriel_PNG.png",
    socials: {
      [SocialType.twitter]: "https://twitter.com/eriel_vtuber",
      [SocialType.twitch]: "https://www.twitch.tv/eriel_morningstar",
    },
  },
];

export default membes_list;
