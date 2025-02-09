"use client";
import React, { useEffect } from "react";
import MyReviews from "../components/MyReviews/MyReviews";
import { useSession } from "next-auth/react";
import { getReviewsByEmail } from "../lib/reviews/reviewsApi";

const ProfilePage = () => {
  const { data: session } = useSession();
  const [reviews, setReviews] = React.useState([]);

  useEffect(() => {
    if (session?.user?.email && reviews.length === 0) {
      getReviewsByEmail(session?.user?.email).then((data) => {
        setReviews(data);
      });
    }
  }, [session?.user?.email]);

  return (
    <div>
      {session?.user?.image && (
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src={session?.user?.image} />
          </div>
        </div>
      )}
      {session?.user?.name && <h1>{session?.user?.name}</h1>}
      <MyReviews reviews={reviews} />
    </div>
  );
};

export default ProfilePage;
