import { NextRequest, NextResponse } from "next/server";

// export const GET = async (request:NextRequest) => {
//     return new NextResponse("Hello world")
// }

export const GET = async (request: NextRequest) => {
  const url = request.nextUrl;
  if (url.searchParams.has("name")) {
    const name = url.searchParams.get("name");
    return NextResponse.json({ message: `Hello from ` + name });
  } else {
    return new NextResponse("Please send your name with URL.");
  }
};

// export const POST = async (request:NextRequest) => {
//     const body = await request.json();
//     return new NextResponse(JSON.stringify(body));
// }

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  if (body.name) {
    return NextResponse.json({
      To: body.name,
      message: "All well here",
      request: "POST",
    });
  } else {
    return new NextResponse("Please send your name with request");
  }
};

export const PUT = async (request: NextRequest) => {
  const body = await request.json();
  if (body.name) {
    return NextResponse.json({
      To: body.name,
      message: "All is well",
      request: "PUT",
    });
  } else {
    return new NextResponse("Please send your name");
  }
};


export const DELETE =async (request:NextRequest) => {
  return NextResponse.json({
    To:"Imran",
    message:"I have deleted the data",
    request:"Delete"
  })
}
