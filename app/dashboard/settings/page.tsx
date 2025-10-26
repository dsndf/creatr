"use client";
import { api } from "@/convex/_generated/api";
import { useMutation, useQuery } from "convex/react";
import React, { FormEvent, useEffect, useState } from "react";
import { BarLoader } from "react-spinners";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAuth } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const SettingsPage = () => {
  const { isSignedIn } = useAuth();
  const currentUser = useQuery(
    api.users.getCurrentUser,
    !isSignedIn ? "skip" : undefined
  );
  const updateUsername = useMutation(api.users.updateUsername);
  const [loading, setLoading] = useState<boolean>(true);
  const [username, setUsername] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const onSumbit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);
      await updateUsername({ newUsername: username });
      toast.success("Username updated successfully!");
    } catch (error) {
      console.error("Error updating username:", error);
      toast.error("Failed to update username. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (currentUser) {
      setLoading(false);
      setUsername(currentUser.username || "");
    }
  }, [currentUser]);

  if (loading) {
    return <BarLoader color="#D8B4FE" width={"100%"} />;
  }
  return (
    <div className="p-6 space-y-8 ">
      <div>
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
        <p className="text-muted-foreground">
          Manage your profile and account preferences
        </p>
      </div>
      <form onSubmit={onSumbit}>
        <Card className="card-glass w-xl">
          <CardHeader></CardHeader>
          <CardContent>
            <div className="grid w-full max-w-sm items-center gap-3">
              <Label htmlFor="username">Username</Label>
              <Input
                type="text"
                id="username"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button disabled={isSubmitting} variant={"primary"}>
              Save Changes
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
};

export default SettingsPage;
