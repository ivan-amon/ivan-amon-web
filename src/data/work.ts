import jobIconRaw from '../assets/icons/job-title-icon.svg?raw';
import companyIconRaw from '../assets/icons/company-icon.svg?raw';
import locationIconRaw from '../assets/icons/location-icon.svg?raw';
import { sanitizeToOutline } from '../lib/svg';

export const workIcons = {
  job: sanitizeToOutline(jobIconRaw, 15),
  company: sanitizeToOutline(companyIconRaw, 15),
  location: sanitizeToOutline(locationIconRaw, 15),
};

export const work = [
  {
    title: "Self-taught Software Developer",
    company: "Personal Projects",
    region: "Madrid, Spain",
    description:
      "Building software engineering projects, tinkering with Linux systems, and deploying containerized architectures with Docker. Focused on learning by doing.",
    technologies: [
      "Linux",
      "Docker",
      "Rust",
      "C",
      "SQL",
    ],
  },
];

export type WorkItem = (typeof work)[number];