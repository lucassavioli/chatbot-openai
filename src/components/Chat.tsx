"use client";

import { Card, CardDescription, CardTitle, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import { useChat } from "ai/react";

export function Chat() {

  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <Card className="w-[500px] h-[780px] grid grid-rows-[min-content_1fr_min-content]">
      <CardHeader>
        <CardTitle>How can I help you?</CardTitle>
        <CardDescription>Hey! How can I help you?</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">        
      { messages.map((message) => {
          return (
            <div key={message.id} className="flex gap-3 text-slate-600 text-sm">
                { message.role === "user" && (
                <Avatar>
                    <AvatarFallback>U</AvatarFallback>
                </Avatar>
                )}

                { message.role === "assistant" && (
                <Avatar>
                    <AvatarFallback>AI</AvatarFallback>
                </Avatar>
                )}
                <p className="leading-relaxed">
                    <span className="font-bold block text-slate-700">{message.role === "user" ? "You" : "AI"}</span>
                    {message.content}
                </p>
            </div>            
          );
        })
      } 
        
      </CardContent>
      <CardFooter>
        <form className="w-full flex gap-2" onSubmit={handleSubmit}>
            <Input value={input} onChange={handleInputChange} placeholder="Type your question here" />
            <Button>Send</Button>
        </form>
      </CardFooter>
    </Card>
  );
}
