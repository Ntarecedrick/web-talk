"use Client";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/Avatar";

export default function UserAvatar({className, url, fallback}:{className?:string, url:string, fallback?:string}) {
  return (
    <Avatar className={className}>
      <AvatarImage src={url}/>
      {fallback && <AvatarFallback>{fallback}</AvatarFallback>}
    </Avatar>
  );
}
