import React, { useEffect, useState } from "react";

export default function Table() {
  const [profile, setProfile] = useState({ name: "akash", age: 23, age2: 34 });

  useEffect(() => {
    console.log("component did mount");
  }, []);

  useEffect(() => {
    console.log("Componet did Update for age");
  }, [profile.age]);

  useEffect(() => {
    console.log("Componet did Update for newer age2");
  }, [profile.age2]);

  return (
    <>
      <button
        onClick={() => {
          setProfile({ ...profile, age: profile.age + 1 });
        }}
      >
        Increase Count for age
      </button>

      <button
        onClick={() => {
          setProfile({ ...profile, age2: profile.age2 + 1 });
        }}
      >
        Count for age 2
      </button>
      <p>{profile.name}</p>
      <p>Age :{profile.age}</p>
      <p>Age2: {profile.age2}</p>
    </>
  );
}
