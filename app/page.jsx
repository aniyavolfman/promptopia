"use client";

import Feed from "@components/Feed";
import { useEffect } from "react";
import Link from "next/link";

const timestamp = Date.now();
const project = 'promptopia';

const Home = ({params}) => {
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`/api/prompts/${project}/prompts`, {
          method: "GET",
          cache: "no-cache",
          next: { revalidate: 60 },
        });

        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br />
        <span className="blue_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Promptopia is an open-source AI prompting tool for modern world to
        discover, create and share creative prompts
      </p>
      <Feed />
      <Link href="/feed"> Start!</Link>
    </section>
  );
};

export default Home;
