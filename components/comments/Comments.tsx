"use client";

import { CommentType } from "@/libs/types";
import { useSession } from "next-auth/react";
import Image from "next/image"
import Link from "next/link"
import { useState } from "react";
import useSWR from "swr";

const fetcher = async (url:any)=> {
  const res = await fetch(url)
  const data = await res.json()
  if(!res.ok) {
    return { error: true, message: "Failed to fetch data" };
  }
  return data
}
const Comments = ({postSlug}:any) => {

  const { status } = useSession();
  const { data, mutate, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_URL}/api/comments?postSlug=${postSlug}`,
    fetcher
  );
  const [desc, setDesc] = useState("");

  const handleSubmit = async () => {
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ desc, postSlug }),
    });
    mutate();
    setDesc('')
  };
  return (
    <div className="">
          <h1 className="text-gra-500 mb-8 text-3xl">Comments</h1>
         {status === 'authenticated' ? 
          (<div className="flex items-center justify-between gap-4">
              <textarea value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="write a comment" className="placeholder:text-black py-5 px-4 w-full text-black"/>
              <button type="button" onClick={handleSubmit} className="p-4 bg-teal-600 text-white rounded-xl cursor-pointer font-bold"> Send  </button>
            </div>
            )  :  (  <Link className="underline uppercase font-semibold" href="/login">
            Login to write a comment 
            </Link>
            ) 
          }
          <br/>
        {isLoading
          ? "loading"
          : data?.map((item: CommentType) => (
          <div className="my-10" key={item.id}>
            <div className="gap-4 mb-6 flex flex-col">
              <div className="flex gap-2">
                {item?.user?.image && (
                  <div className="w-12 h-12 relative">
                    <Image src={item?.user?.image} alt="user" fill className="rounded-full" />
                  </div>
                )}
                <div className="flex flex-col gap-2">
                  <span>{item?.user?.name}</span>
                  <span className="font-light text-gray-400">{item.createdAt.substring(0,10)} </span>
                </div>
              </div>
              <p className="text-lg font-light">{item?.desc}</p>
            </div>
          </div>
        ))}

    </div>
  )
}

export default Comments