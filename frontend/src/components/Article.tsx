import Link from "next/link";
import { DetailedHTMLProps, HTMLAttributes } from "react";

import { useArticlesContext } from "@/context/ArticlesContext";

interface ArticleProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  article_id: number;
  title: string;
  content: string;
  category_id: number;
}

export default function Article({ article_id, title, content, category_id }: ArticleProps) {
  const { categories } = useArticlesContext();
  return (
    <div key={article_id} className="flex w-full flex-col gap-2">
      <div className="flex flex-row items-center w-full gap-2 justify-between">
        <Link href={`/articles/${article_id}`} passHref legacyBehavior>
          <h2 className="text-[25px] cursor-pointer">{title}</h2>
        </Link>
        <p className="text-[14px] py-[2px] truncate rounded-[20px] px-5 bg-black/5">
          {categories.find((category) => category.id === Number(category_id))?.name || "Category"}
        </p>
      </div>
      <p>{content}</p>
    </div>
  );
}
