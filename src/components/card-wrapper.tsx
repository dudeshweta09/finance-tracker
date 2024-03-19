"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import React, { Children } from "react";
import AuthHeader from "./auth-header";

interface CardWrapperProps {
  label: string;
  title: string;
  children: React.ReactNode;
}
const CardWrapper = ({
  label,
  title,
  children,
}: CardWrapperProps) => {
  return (
    <Card>
      <CardHeader>
        <AuthHeader label={label} title={title} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default CardWrapper;
