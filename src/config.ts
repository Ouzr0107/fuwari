import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	LinksConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "王小明的杂物堆",
	subtitle: "乱七八糟就像我一样",
	lang: "zh_CN", // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko', 'es', 'th'
	themeColor: {
		hue: 310, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: true, // Hide the theme color picker for visitors
	},
	banner: {
		enable: true,
		src: "https://cdn.hubblebirthday.com/january-7.jpg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: false, // Display the credit text of the banner image
			text: "", // Credit text to be displayed
			url: "", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		// Leave this array empty to use the default favicon
		{
			src: "/favicon/favicon-light.png", // Path of the favicon, relative to the /public directory
			theme: "light", // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
			sizes: "32x32", // (Optional) Size of the favicon, set only if you have favicons of different sizes
		},
		{
			src: "/favicon/favicon-dark.png", // Path of the favicon, relative to the /public directory
			theme: "dark", // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
			sizes: "32x32", // (Optional) Size of the favicon, set only if you have favicons of different sizes
		},
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		LinkPreset.Links,
		LinkPreset.Artitalk,
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "https://avatars.githubusercontent.com/u/87957461", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "王小明",
	bio: "人被杀，就会死。",
	links: [
		{
			name: "Twitter",
			icon: "fa6-brands:x-twitter", // Visit https://icones.js.org/ for icon codes
			// You will need to install the corresponding icon set if it's not already included
			// `pnpm add @iconify-json/<icon-set-name>`
			url: "https://x.com/wngzhu02753709",
		},
		{
			name: "Steam",
			icon: "fa6-brands:steam",
			url: "https://steamcommunity.com/id/wangzhuo0107/",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/Ouzr0107",
		},
		{
			name: "Bilibili",
			icon: "fa6-brands:bilibili",
			url: "https://space.bilibili.com/176493689",
		},
		{
			name: "email",
			icon: "fa6-regular:envelope",
			url: "mailto:zhuo0107@foxmail.com",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const linksConfig: LinksConfig[] = [
	// {
	//   Name: "Arthals' ink",
	//   Desc: "所见高山远木，阔云流风；所幸岁月盈余，了无拘束",
	//   Link: "https://arthals.ink/",
	//   Avatar: "https://cdn.arthals.ink/Arthals.png",
	// },
	{
		name: "Stark's",
		desc: "Personal website and blog of Charles Stark",
		url: "https://c12k.dev",
		avatar: "https://avatars.githubusercontent.com/u/69138022",
	},
	{
		name: "Arthals' ink",
		desc: "所见高山远木，阔云流风；所幸岁月盈余，了无拘束",
		url: "https://arthals.ink/",
		avatar: "https://cdn.arthals.ink/Arthals.png",
	},
	{
		name: "CWorld Site",
		desc: "求知若愚，虚怀若谷",
		url: "https://cworld0.com/",
		avatar:
			"https://cworld0.com/_image?href=%2F_astro%2Favatar.CKYBHtS3.png&w=768&h=768&f=webp",
	},
	{
		name: "Yu",
		desc: "Something about me.",
		url: "https://www.mileomni.com/",
		avatar:
			"https://img.mileomni.com/m4vWN8HU6K5vWtaW.jpg",
	},
];

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};
