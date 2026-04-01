export const studies = [
  {
    title: "Telecom Engineering",
    institution: "Universidad Politécnica de Madrid (UPM)",
    description:
      "Undergraduate degree covering programming, networking and signal processing. Building a strong foundation in both hardware and software systems.",
    tags: [
      "Programming",
      "Networking",
      "Computer Networks",
      "Signal Processing",
    ],
  },
];

export type StudyItem = (typeof studies)[number];
