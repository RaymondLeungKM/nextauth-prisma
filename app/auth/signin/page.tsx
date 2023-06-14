import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { getCsrfToken, getProviders, signIn } from "next-auth/react";
import { ButtonComponent } from "./button";
import { FormComponent } from "./form";

export default async function SignIn() {
  const session = await getServerSession(authOptions);
  if (session) {
    return { redirect: { destination: "/" } };
  }

  const providers = (await getProviders()) ?? [];
  console.log(providers);

  const csrfToken = await getCsrfToken();
  console.log(csrfToken);

  return (
    <>
      <FormComponent csrfToken={csrfToken!} />
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <ButtonComponent provider={provider} />
        </div>
      ))}
    </>
  );
}
