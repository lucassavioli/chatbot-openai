import { Card, CardDescription, CardTitle, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Home() {
  return (
    <div className="flex h-screen bg-slate-50 items-center justify-center">
      <Card className="w-[500px] h-[780px] grid grid-rows-[min-content_1fr_min-content]">
        <CardHeader>
          <CardTitle>How can I help you?</CardTitle>
          <CardDescription>Hey! How can I help you?</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-3 text-slate-600 text-sm">
            <Avatar>
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <p className="leading-relaxed">
              <span className="font-bold block text-slate-700">User:</span>
              Let's have a conversation in english</p>
          </div>
          <div className="flex gap-3 text-slate-600 text-sm">
            <Avatar>
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <p className="leading-relaxed">
              <span className="font-bold block text-slate-700">AI:</span>
              Sure what would you like to talk about?</p>
          </div>
        </CardContent>
        <CardFooter className="space-x-2">
          <Input placeholder="Type your question here" />
          <Button>Send</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
