"use client";

import Image from "next/image";
import posthog from "posthog-js";

const ExploreBtn = () => {
  return (
    <button
      type="button"
      id="explore-btn"
      className="mt-7 mx-auto"
      onClick={() => {
        posthog.capture("events_explored");
        console.log("clicked");
        document.getElementById("events")?.scrollIntoView({
          behavior: "smooth",
        });
      }}
    >
      Explore Events
      <Image
        src="/icons/arrow-down.svg"
        alt="arrow-down"
        width={24}
        height={24}
      />
    </button>
  );
};

export default ExploreBtn;
