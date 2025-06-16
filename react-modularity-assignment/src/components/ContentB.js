import React from "react";
import { Button } from "./SharedComponents";

// ⬇︎ named export
export function ContentB() {
  return (
    <section>
      <h2>Content B</h2>
      <p>Here’s a different chunk of dummy text for Content B.</p>
      <Button onClick={() => alert("Clicked in Content B!")}>Press Here</Button>
    </section>
  );
}
