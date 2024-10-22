import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useFormValidation } from "../hooks/useFormValidation";
import { validateLogin } from "../utils/validate";

export function LoginForm() {
  const initialValues = { username: "", password: "" };

  const onSubmit = (values) => {
    console.log("Submitted:", values);
    // Here you can handle the form submission (e.g., call an API)
  };
  
  const onCancle = (e) => {
    e.preventDefault(); 
    console.log("cancled:");
  };

  const { values, errors, handleChange, handleSubmit } = useFormValidation(initialValues, validateLogin, onSubmit); // Pass onSubmit here

  return (
    <Card className="md:w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent className="px-4 pb-2">
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-2.5">
              <Label htmlFor="test">Username</Label>
              <Input
                type="text"
                name="username"
                id="username"
                value={values.username}
                onChange={handleChange}
                autoComplete="off"
              />
              {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
            </div>
            <div className="flex flex-col space-y-1.5">

              <label htmlFor="password">Password</label>
              <Input
                type="password"
                name="password"
                id="password"
                value={values.password}
                onChange={handleChange}
                autoComplete="off"
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>
          </div>
          <CardFooter className="flex justify-between mt-4">
            <Button className="border bg-gradient-to-r from-black to-black text-white hover:from-gray-800 hover:to-black py-2 px-4 rounded"
              variant="outline" type="button" onClick={onCancle}>
              Cancel
            </Button>
            <Button className="border bg-gradient-to-r from-black to-black text-white hover:from-gray-800 hover:to-black py-2 px-4 rounded"
              type="submit">Deploy</Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
}
