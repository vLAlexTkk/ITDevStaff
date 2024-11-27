"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

import { fetchArticles, fetchCategories, fetchFeatures } from "@/client/apiClient";
import { Article, Category, Features } from "@/types/dataTypes";

interface ArticlesContextType {
  articles: Article[];
  categories: Category[];
  features: Features[];
  loading: boolean;
  error: string | null;
}

const ArticlesContext = createContext<ArticlesContextType | undefined>(undefined);

export const ArticlesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [features, setFeatures] = useState<Features[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [articlesData, categoriesData, featuresData] = await Promise.all([
          fetchArticles(),
          fetchCategories(),
          fetchFeatures(),
        ]);
        setArticles(articlesData);
        setCategories(categoriesData);
        setFeatures(featuresData);
        setError(null);
      } catch (err) {
        setError(err as string);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <ArticlesContext.Provider value={{ articles, categories, features, loading, error }}>
      {children}
    </ArticlesContext.Provider>
  );
};

export const useArticlesContext = () => {
  const context = useContext(ArticlesContext);
  if (!context) {
    throw new Error("useArticlesContext can't be used");
  }
  return context;
};
