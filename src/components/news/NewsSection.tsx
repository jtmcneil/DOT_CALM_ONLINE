import { news, Article } from "./News";
import ReactMarkdown from "react-markdown";

interface NewsArticleProps {
    article: Article;
}

const NewsArticle = ({ article }: NewsArticleProps) => {
    return (
        <article className="border-b-2 border-secondary mb-2 backdrop-blur-md bg-black/90">
            <h2 className="bg-secondary text-black px-2 text-xl">
                {article.subject}
            </h2>
            <div className="p-2 pb-4 mb-2 border-b-2 border-secondary">
                <ReactMarkdown>{article.body}</ReactMarkdown>
            </div>
        </article>
    );
};

interface NewsSectionProps {
    className?: string;
}

export default function NewsSection({ className }: NewsSectionProps) {
    return (
        <section className={`flex flex-col ${className}`}>
            {news.map((article, i) => (
                <NewsArticle article={article} key={i} />
            ))}
        </section>
    );
}
