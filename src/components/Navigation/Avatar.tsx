import React from "react";
import * as Avatar from "@radix-ui/react-avatar";

const AvatarDemo = () => (
  <div style={{ display: "flex", gap: 20 }}>
    <Avatar.Root className="inline-flex items-center justify-center overflow-hidden select-none w-[45px] h-[45px] rounded-full ">
      <Avatar.Image
        className="w-full h-full object-cover"
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
        alt="Colm Tuite"
      />
      <Avatar.Fallback
        className="w-full h-full flex items-center justify-center"
        delayMs={600}
      >
        CT
      </Avatar.Fallback>
    </Avatar.Root>
  </div>
);

export default AvatarDemo;
