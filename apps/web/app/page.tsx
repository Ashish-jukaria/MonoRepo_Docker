import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { prisma } from "../../../packages/db";

export default async function  Home() {
  const data=await prisma.user.findMany()
   console.log(data)
  return (
    <div>
      {JSON.stringify(data)}
    </div>
  );
}

export const dynamic = 'force-dynamic'
