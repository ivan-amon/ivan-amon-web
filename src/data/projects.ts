import laravelIcon from '../assets/logos/Laravel-logo.svg?raw';
import sqlIcon from '../assets/logos/SQL-logo.svg?raw';
import dockerIcon from '../assets/logos/Docker-logo.svg?raw';
import rustIcon from '../assets/logos/Rust.svg?raw';
import tcpipIcon from '../assets/logos/TCPIP-logo.svg?raw';

export const projects: {
	title: string;
	techStack: string;
	description: string;
	ctaText: string;
	ctaLink: string;
	icons?: string[];
	videoLink?: string;
	cratesLink?: string;
}[] = [
	{
		title: "XSCP",
		techStack: "Rust · Low Level · Networking",
		description: "Text-based chat protocol over TCP. The protocol specification, the server, and the client are all designed and implemented from scratch in Rust, with no external protocol libraries.",
		ctaText: "View on GitHub",
		ctaLink: "https://github.com/ivan-amon/xscp",
		icons: [rustIcon, tcpipIcon, dockerIcon],
		cratesLink: "https://crates.io/crates/xscp",
	},
	{
		title: "Flash Sales",
		techStack: "Laravel · MySQL · Docker",
		description: "A high-demand ticket sales system designed to handle concurrency and race conditions. Built with advanced software engineering principles to ensure inventory integrity through a scalable and robust architecture.",
		ctaText: "View on GitHub",
		ctaLink: "https://github.com/ivan-amon/flash-sales",
		icons: [laravelIcon, sqlIcon, dockerIcon],
		videoLink: "https://www.youtube.com/watch?v=Om1l69TtolY",
	},
	{
		title: "Rust HTTP Server",
		techStack: "Rust · Low Level · Networking",
		description: "A multithreaded HTTP server built from the ground up to explore systems programming. Implements low-level networking, manual protocol parsing, and a custom thread pool architecture.",
		ctaText: "View on GitHub",
		ctaLink: "https://github.com/ivan-amon/rust-http-server",
		icons: [rustIcon, tcpipIcon, dockerIcon],
	},
];
