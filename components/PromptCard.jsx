"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import nanoid  from "nanoid";

const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  const { data: session } = useSession();
  const pathName = usePathname();

  const router = useRouter();
  const [copied, setCopied] = useState("");

  const handleProfileClick = () => {
    if (post.creator === session?.user.id) return router.push("/profile");

    router.push(`/profile/${post.creator}?name=${post.username}`);
  };

  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);

    setTimeout(() => setCopied(""), 3000);
  };

  const stringOfTags = post.tag.split(",");

  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div
          className="flex-1 flex justify-start cursor-pointer items-center gap-3 profile"
          onClick={handleProfileClick}
        >
          <Image
            src={post?.image}
            alt="user image"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />
          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibolt text-gray-900">
              {post?.username}
            </h3>
            <p className="font-inter text-sm text-gray-500">
              {post?.email}
            </p>
          </div>
        </div>
        <div className="copy_btn " onClick={handleCopy}>
          <Image
            src={
              copied === post.prompt
                ? "/assets/icons/tick.svg"
                : "/assets/icons/copy.svg"
            }
            width={12}
            height={12}
            alt="icon"
          />
        </div>
      </div>
      <p className="my-4 font-satoshi text-sm text-gray-700">{post.prompt}</p>
      <div className="wrapper">
        {stringOfTags.map((tag) => {
          return (
            <p
              key={nanoid()}
              className="font-inter text-sm blue_gradient cursor-pointer tag"
              onClick={() => handleTagClick && handleTagClick(tag)}
            >
              {tag}
            </p>
          );
        })}
      </div>
      {session?.user.id === post.creator?._id && pathName === "/profile" && (
        <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
          <button
            type="button"
            className="font-inter text-sm cursor-pointer bg-white btn"
            onClick={handleEdit}
          >
            Edit
          </button>
          <button
            type="button"
            className="font-inter text-sm cursor-pointer btn"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default PromptCard;
