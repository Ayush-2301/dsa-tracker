"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Provider } from "@supabase/supabase-js";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { socialLogin } from "@/redux/actions/auth";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const spinner = (
  <svg
    className="mr-2 h-4 w-4 animate-spin"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
);

export default function UserAuthForm({
  className,
  ...props
}: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const supbase = createClientComponentClient();
  const dispatch = useDispatch<AppDispatch>();

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  const handleLogin = async (provider: Provider) => {
    const { error } = await supbase.auth.signInWithOAuth({
      provider: provider,
      options: {
        redirectTo: "http://localhost:3000/auth/callback",
      },
    });
    dispatch(socialLogin({ error }));
  };
  // const handleLogin = (provider: Provider) => {
  //   dispatch(socialLogin(provider));
  // };

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && <>{spinner}</>}
            Sign In with Email
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <div className="space-y-2 ">
        <Button
          variant="outline"
          type="button"
          disabled={isLoading}
          className="flex justify-center items-center w-full"
          onClick={() => handleLogin("google")}
        >
          {isLoading ? (
            <>{spinner}</>
          ) : (
            <svg
              fill="currentColor"
              className="w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 210 210"
            >
              <path
                d="M0,105C0,47.103,47.103,0,105,0c23.383,0,45.515,7.523,64.004,21.756l-24.4,31.696C133.172,44.652,119.477,40,105,40
            c-35.841,0-65,29.159-65,65s29.159,65,65,65c28.867,0,53.398-18.913,61.852-45H105V85h105v20c0,57.897-47.103,105-105,105
	S0,162.897,0,105z"
              />
            </svg>
          )}
          Google
        </Button>
        <Button
          variant="outline"
          className="w-full"
          type="button"
          disabled={isLoading}
          onClick={() => handleLogin("github")}
        >
          {isLoading ? (
            <>{spinner}</>
          ) : (
            <div>
              <GitHubLogoIcon className="mr-2 h-4 w-4" />
            </div>
          )}{" "}
          Github
        </Button>
      </div>
    </div>
  );
}
