
import * as React from "react";
import { Button } from "@/components/ui/button"; // Ensure you have a Button component
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"; // Adjust the import path as necessary

export function product() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here (e.g., API call)
    console.log("Form submitted");
  };

  return (
    <Card className="w-[300px] mx-auto mt-10">
    <CardHeader>
      <CardTitle>Product Title</CardTitle>
      <CardDescription>This is a short description of the product.</CardDescription>
    </CardHeader>
    <CardContent>
      <p>
        Here you can provide additional details about the product, including features, specifications, and more.
      </p>
    </CardContent>
    <CardFooter className="flex justify-between">
      <Button className="dark:bg-green-700 bg-green-700 hover:bg-green-600 dark:hover:bg-green-600" variant="outline" onClick={() => console.log("Added to cart")}>
        Add
      </Button>
      <Button className="dark:bg-red-700 bg-red-700 hover:bg-red-600 dark:hover:bg-red-600" onClick={() => console.log("Product details")}>delete</Button>
    </CardFooter>
  </Card>
  );
}
