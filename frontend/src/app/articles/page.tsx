"use client";

import { useState } from "react";
import { useCategory } from "@/context/CategoryContext";
import { useArticlesContext } from "@/context/ArticlesContext";

import { Layout } from "@/components/layout/Layout";
import { FeaturedCategories } from "@/components/FeaturedCategories";

import LoadingSpinner from "@/components/LoadingSpinner";
import ArticlesList from "@/components/ArticlesList";

export default function ArticlePage() {
  const { selectedCategory } = useCategory();
  const { articles, loading } = useArticlesContext();

  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);

  const articlesPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const filteredArticles = articles.filter((article) => {
    if (selectedCategory && selectedFeature) {
      return article.category_id === selectedCategory && article.features.includes(selectedFeature);
    }
    if (selectedCategory) {
      return article.category_id === selectedCategory;
    }
    if (selectedFeature) {
      return article.features.includes(selectedFeature);
    }
    return true;
  });

  const totalVisiblePages = Math.ceil(filteredArticles.length / articlesPerPage);
  const currentVisibleArticles = filteredArticles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalVisiblePages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      {loading || articles.length === 0 ? (
        <div className="bg-white h-screen">
          <LoadingSpinner />
        </div>
      ) : (
        <Layout>
          <div className="flex items-center justify-center mb-10 w-full">
            <FeaturedCategories selectedFeature={selectedFeature} setSelectedFeature={setSelectedFeature} />
          </div>
          <ArticlesList
            currentVisibleArticles={currentVisibleArticles}
            currentPage={currentPage}
            totalVisiblePages={totalVisiblePages}
            handlePageChange={handlePageChange}
          />
        </Layout>
      )}
    </>
  );
}
