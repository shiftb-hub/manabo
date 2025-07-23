import { prisma } from "@/app/_lib/prisma";
import{ LearningRecordForm }from "./_components/LearningRecordForm";

type Category = {
  id: number;
  categoryName: string; 
  parentId: number | null;
};
import React from 'react'

const Page = async() => {
  const categories: Category[] = await prisma.category.findMany({
    orderBy: {
      id: 'asc'
    }
  });
  return <LearningRecordForm categories={categories} />;
}
export default Page;