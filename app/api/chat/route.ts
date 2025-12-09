import { NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq =new  Groq({ apiKey : process.env.GROQ_API_KEY }); 


export async function POST(request: Request) {
  try{
    const {message} = await request.json();

    if(!message){
      return NextResponse.json({error: "Message is required"}, {status: 400});
    }
    const chatCompletion = await groq.chat.completions.create({
      messages: [{ 
        role: "user",
        content: message ,
        
      } ,
    ],
      model: "llama-3.3-70b-versatile",
    });
    const responseMessage = chatCompletion.choices[0]?.message?.content || "No response from model";
    return NextResponse.json({message: responseMessage});
  }
  catch (error){
    console.error("Error processing chat completion:", error);
    return NextResponse.json({error: "Internal Server Error"}, {status: 500});
  }


}
 
