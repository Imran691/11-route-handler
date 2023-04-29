// DYMANIC SEGMENTS
// Here we want our name parameter to be dynamic
// We will have two parameters for our function "request" & "params"
// We have destructured "params" in parameters and assigned its type as "{params:{name:string}"
// In type we will assign the type "string" to "name" the name of the folder. in order to receive in params whatever the name of our folder.
// In postman whatever we will write after the URL, will be considered as dynamic segment.

import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, {params}:{params:{name:string}}) {
    return NextResponse.json({
      From: params.name,
      Message: "Greetings from Pakistan",
      RequestType: "GET"
    });
}
