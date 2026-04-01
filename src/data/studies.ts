export const studies = [
  {
    title: "Telecom Engineering",
    institution: "Universidad Politécnica de Madrid (UPM)",
    description:
      "Undergraduate degree covering systems programming, backend engineering and computer netoworks. Building a strong foundation in both hardware and software systems.",
    tags: [
      "Backend",
      "Systems",
      "Computer Networks",
    ],
  },
];

export type StudyItem = (typeof studies)[number];
