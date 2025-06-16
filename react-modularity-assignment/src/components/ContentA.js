import React from "react";
import { Button } from "./SharedComponents";

// ⬇︎ named export
export function ContentA() {
  return (
    <section>
      <h2>Content A</h2>
      <p>This is some dummy text for Content A.</p>
      <Button onClick={() => alert("Clicked in Content A!")}>Click Me</Button>
    </section>
  );
}
