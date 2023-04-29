// Functions are named after the methods used to call APIs. In this way whichever method is used, same function is called accordingly.
// for each end point we ceate CRUD system.

import { NextRequest, NextResponse } from "next/server";

// GET method to read the data from data base
// GET method returns data. Here it returns an object.
// when we call a function with API, All data is received in "request"
export async function GET(request: NextRequest) {
    return NextResponse.json({
      From: "Zia",
      Message: "Greetings from Pakistan",
      RequestType: "GET"
    });
}


// clients send data in "request"
// POST method is used to create data in data base.
// to create data we need to send data. In postman we send data in request body, in "raw" in "json" format.
// This data is recieved in "request" and we convert this data in json using "request.json" method.

export async function POST(request: NextRequest) {
  const req = await request.json();     // we use "await" because it is a promise.
  if(req.name){         // If request body object contains "name" propoety
    return NextResponse.json({
      To: req.name,        // to make this property dynamic
      Message: "All well here",
      RequestType: "POST"
    });
  }
  else {
    return new NextResponse('Please include your name in the POST request');
  }
}

// IN PUT and DELETE methods we need to use the ID of relevant data.

//PUT is used to update data in data base e.g. uploading profile pic.
// We send ID of the data to be uodated.
// We send body with PUT as well containing data that is to be updated.
export async function PUT(request: NextRequest) {
  const req = await request.json();
  if(req.name){
    return NextResponse.json({
      To: "Zia",
      Message: "This is a updated greeting",
      RequestType: "PUT"
    });
  }
  else {
    return new NextResponse('Please include your name in the PUT request');
  }
}


// DELETE method is used to delete data from data base.
// We need not to attach data body in the request body. If we attach data the API will crash and throw an error.
// We only need to send the ID of data to be deleted.
// We add the ID of data to be deleted in request URL as   "URL/ID" or as query parameter with request URl as "URl?id=1"
export async function DELETE(request: NextRequest) {
  // const req = await request.json();
  // if(req.name){
    return NextResponse.json({
      To: "zia",
      Message: "I have deleted the greetings",
      RequestType: "DELETE"
    });
  }
//   else {
//     return new NextResponse('Please include your name in the DELETE request');
//   }
// }