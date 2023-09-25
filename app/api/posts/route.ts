import { getAuthSession } from "@/libs/auth";
import prisma from "@/libs/connect";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req:NextRequest) => {

    const {searchParams}= new URL(req.url)
    const page = parseInt(searchParams.get('page') ?? "" )
    const cat = searchParams.get('cat') ?? "" 
    const POST_PER_PAGE = 3;
  try {
    const query = {
        take:POST_PER_PAGE,
        skip:POST_PER_PAGE * (page - 1) ,
        where:{
          ...(cat && {catSlug:cat})
        }
    }
    const [posts , count] = await prisma.$transaction(
     [
        prisma.post.findMany(query),
        prisma.post.count({ where:query.where })
     ]
    );
    return new NextResponse(JSON.stringify({posts,count}), {status:200});

  } catch (err) {

    console.log(err);
    return new NextResponse(JSON.stringify({message:'somthing went wrong'}),{status:500})
    
  }
};

export const POST = async (req:NextRequest) => {

  const session = await getAuthSession()

  if(!session){

    return new NextResponse(JSON.stringify({message:'Not authenticated'}),{status:401})

  } else {
      try {
        const body = await req.json()
        
        const post =await prisma.post.create({
            data: {...body,userEmail:session?.user?.email}
        })
        return new NextResponse(JSON.stringify(post), { status: 200 });

      } catch (err) {
    
        console.log(err);
        return new NextResponse(JSON.stringify({message:'somthing went wrong'}),{status:500})
        
      }
  }
};