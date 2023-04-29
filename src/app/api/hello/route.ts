// for API we need separete folder in app directory to avoid path conflict between page.tsx & route.ts.
// we can't create route.ts in app directly, because when we run our app page.tsx is called by default.
// Next.js will throw an error.


// we write code in the form of a function. API calls this function.
// API collects request from client and takes it to server and collects response from server and takes it to client.
// we name these functions afetr API methods i.e. "GET", "POST", "PATCH" etc. SO that when one calls GET method, this function is called.

// when someone calls this API we will recieve a parameter. Conventionally we name it "request". An object will be recieved in "request" and can be some cookies, header or URL. We assign this parameter type "NextRequest"

//We can add some data in URL after ? mark in the form of a variable, this is called query parameter.
// this parameter is received in "request" parameter.
// and extracted by using the method "request.nextUrl"
// ".has" method is used to extraxt query parameters from the request

import { NextRequest, NextResponse } from "next/server"

export const GET = async (request:NextRequest) => {
  
  const url = request.nextUrl;  // to add query parameters with request URL.
  if(url.searchParams.has("name")){    // to check if url has a query parameter named "name"
    const name = url.searchParams.get("name");  // to extract the value of query parameter by using "get" method.
    
    return NextResponse.json({message:"Hello, from: " + name});   // ".json" method to return the response in json format
  }
  else {        // for error handling
    return new NextResponse('Please send your name in search parameter "name"');
  }
}