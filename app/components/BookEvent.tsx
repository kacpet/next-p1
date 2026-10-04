"use client";

import { useState } from "react";
import { posthog } from "posthog-js";

import { createBooking } from "@/lib/actions/booking.actions";

const BookEvent = ({eventId,slug}: {eventId:string, slug:string}) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    const {success, error} = await createBooking({eventId,slug,email})
    e.preventDefault()
    if(success)
    {
      setSubmitted(true);
      posthog.capture("event_booked", {eventId,slug, email})
    }
    else{
      console.log("booking creation failed",error);
      posthog.captureException(error)
    }
  };

  return (
    <div id="book-event">
      <p>BookEvent</p>

      {submitted ? (
        <p className="text-sm">Thank you for signing up!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email adress"
            />
          </div>
          <button type="submit" className="button-submit">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default BookEvent;
