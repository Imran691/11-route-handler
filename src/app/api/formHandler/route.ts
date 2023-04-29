// we create this API to submit the form that we created in "Form.tsx"

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const req = await request.json();

  console.log(req);

  // if(req.name){
  //   return NextResponse.json({
  //     To: req.name,
  //     Message: "All well here",
  //     RequestType: "POST"
  //   });
  // }
  // else {
  //   return new NextResponse('Please include your name in the POST request');
  // }
}
