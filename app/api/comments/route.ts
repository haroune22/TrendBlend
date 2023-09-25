import { getAuthSession } from "@/libs/auth";
import prisma from "@/libs/connect";
import { NextRequest, NextResponse } from "next/server";

// Get All Comments Of a posts

export const GET = async (req:NextRequest) => {

    const {searchParams}= new URL(req.url)
    const postSlug = searchParams.get("postSlug")
  
  try {
    const post = await prisma.comment.findMany({
        where: {
            ...(postSlug && {postSlug})
        },
        include:{user:true}
    })

    return new NextResponse(JSON.stringify(post), {status:200});

  } catch (err) {

    console.log(err);
    return new NextResponse(JSON.stringify({message:'somthing went wrong'}),{status:500})
    
  }
};

export const POST = async (req:NextRequest) => {

  const session = await  getAuthSession()

  if(!session){

    return new NextResponse(JSON.stringify({message:'Not authenticated'}),{status:401})

  } else {
      try {
        const body = await req.json()
        
        const comment =await prisma.comment.create({
            data: {...body,userEmail:session?.user?.email}
        })
        return new NextResponse(JSON.stringify(comment), { status: 201 });
      } catch (err) {
    
        console.log(err);
        return new NextResponse(JSON.stringify({message:'somthing went wrong'}),{status:500})
        
      }
  }
};