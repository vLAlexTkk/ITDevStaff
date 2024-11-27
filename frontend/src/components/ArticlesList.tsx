import Article from "./Article";
import { Pagination } from "./Pagination";

interface ArticleListProps {
  currentVisibleArticles: { id: number; title: string; content: string; category_id: number }[];
  currentPage: number;
  totalVisiblePages: number;
  handlePageChange: (page: number) => void;
}

export default function ArticlesList({
  currentVisibleArticles,
  currentPage,
  totalVisiblePages,
  handlePageChange,
}: ArticleListProps) {
  return (
    <>
      <div className="flex flex-col items-start gap-5">
        {currentVisibleArticles.map((article) => (
          <Article
            key={article.id}
            article_id={article.id}
            title={article.title}
            content={article.content}
            category_id={article.category_id}
          />
        ))}
        {currentVisibleArticles.length === 0 && (
          <div className="flex items-center justify-center w-full">
            <p>No articles found</p>
          </div>
        )}
      </div>
      {currentVisibleArticles.length != 0 && (
        <Pagination
          currentVisiblePage={currentPage}
          totalVisiblePages={totalVisiblePages}
          handlePageChange={handlePageChange}
        />
      )}
    </>
  );
}
