"use client";

import { SignIn, SignInButton, SignOutButton, useUser } from "@clerk/nextjs";

export const SignInComponent = () => {
  const user = useUser();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <SignIn routing="hash" />
      <div>
        {!user.isSignedIn && <SignInButton />}
        {!!user.isSignedIn && <SignOutButton />}
      </div>
    </main>
  );
};
