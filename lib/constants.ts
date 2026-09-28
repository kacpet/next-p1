export type EventItem = {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
};

const events = [
  {
    image: "/images/event1.png",
    title: "KubeCon + CloudNativeCon North America",
    slug: "kubecon-cloudnativecon-north-america-2026",
    location: "Salt Palace Convention Center, Salt Lake City, UT",
    date: "November 9-12, 2026",
    time: "9:00 AM",
  },
  {
    image: "/images/event2.png",
    title: "Web Summit Lisbon",
    slug: "web-summit-lisbon-2026",
    location: "MEO Arena, Lisbon, Portugal",
    date: "November 9-12, 2026",
    time: "9:00 AM",
  },
  {
    image: "/images/event3.png",
    title: "AWS re:Invent",
    slug: "aws-reinvent-2026",
    location: "The Venetian, Las Vegas, NV",
    date: "November 30-December 4, 2026",
    time: "8:00 AM",
  },
  {
    image: "/images/event4.png",
    title: "TechCrunch Disrupt",
    slug: "techcrunch-disrupt-2026",
    location: "Moscone West, San Francisco, CA",
    date: "October 13-15, 2026",
    time: "9:00 AM",
  },
  {
    image: "/images/event5.png",
    title: "React Summit Amsterdam",
    slug: "react-summit-amsterdam-2026",
    location: "RAI Amsterdam, Amsterdam, Netherlands",
    date: "June 12-16, 2026",
    time: "9:00 AM",
  },
  {
    image: "/images/event6.png",
    title: "PyCon US",
    slug: "pycon-us-2026",
    location: "David L. Lawrence Convention Center, Pittsburgh, PA",
    date: "May 13-19, 2026",
    time: "9:00 AM",
  },
];

export { events };
