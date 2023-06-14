"use client";

import { signIn } from "next-auth/react";

export const ButtonComponent = ({
  provider,
}: {
  provider: { id: string; name: string };
}) => {
  console.log("in ButtonComponent, provider=", provider);

  return (
    <button onClick={() => signIn(provider.id)}>
      Sign in with {provider.name}
    </button>
  );
};
