import React from "react";

type HeadingProps = { name?: string };

export function Heading({ name = "React" }: HeadingProps) {
  return <h3>Hello {name}</h3>;
}
