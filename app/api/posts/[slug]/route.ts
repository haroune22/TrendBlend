import { getAuthSession } from "@/libs/auth";
import prisma from "@/libs/connect";
import { NextRequest, NextResponse } from "next/server";

export const GET = async ({params}:{params:any}) => {

    const { slug } = params
  
  try {
    const post = await prisma.post.update({
      where: { slug },
      data: { views: { increment: 1 } },
      include: { user: true },
    });

    return new NextResponse(JSON.stringify(post), {status:200});

  } catch (err) {

    console.log(err);
    return new NextResponse(JSON.stringify({message:'somthing went wrong'}),{status:500})
    
  }
};

export const DELETE = async (req:NextRequest,{params}:{params:any}) => {
       
  const session = await getAuthSession()
  const body = await req.json()
  const { slug } = params

  if(!session){
    return new NextResponse(JSON.stringify({message:'Not authenticated'}),{status:401})

  }else if(session?.user?.email === body.email) {
    try {
       await prisma.post.delete({
        where: {slug},
    })
    return new NextResponse(JSON.stringify("Post Deleted"), {status:200});

  } catch (err) {

    console.log(err);
    return new NextResponse(JSON.stringify({message:'somthing went wrong'}),{status:500})
    
  }
  }else {
    return new NextResponse(JSON.stringify({message:"You can delet ony your post "}),{status:500})
  }
};