import Tag from "@/components/Tag";
import { CoreContent } from "@/lib/utils/contentlayer";
import type { Blog } from "contentlayer/generated";
import { motion } from "framer-motion";
import Link from "next/link";

export interface PostCardProps {
  posts: CoreContent<Blog>[];
  showTags?: boolean;
}

export default function PostCard({ posts, showTags = true }: PostCardProps) {
  return (
    <ul>
      {posts.map(({ slug, title, tags, summary }, index) => (
        <motion.li
          key={slug}
          className="py-2"
          initial={{ scale: 0.8, x: 200, opacity: 0 }}
          animate={{ scale: 1, x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: index / 10 }}
        >
          <Link href={`/blog/${slug}`} aria-label={`Read "${title}"`}>
            <article className=" group mt-5 cursor-pointer gap-3 space-y-2 bg-opacity-20 p-2 py-5 transition-all hover:bg-[#1B1F3B] dark:hover:bg-slate-200 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
              <div className="space-y-3 xl:col-span-4">
                <span className="text-2xl font-bold leading-8 tracking-tight">
                  <Link href={`/blog/${slug}`}>
                    <span className="text-primary-500 dark:group-hover:text-primary-500 duration-300 hover:text-gray-100 group-hover:text-gray-100  dark:text-gray-100">
                      {title}
                    </span>
                  </Link>
                </span>
                {showTags && tags && (
                  <div className="flex flex-wrap gap-3">
                    {tags.map((tag) => (
                      <Tag key={tag} text={tag} />
                    ))}
                  </div>
                )}
                <div className="prose dark:group-hover:text-primary-500 max-w-none text-gray-900 group-hover:text-gray-100 dark:text-gray-100">
                  {summary}
                </div>
              </div>
            </article>
          </Link>
        </motion.li>
      ))}
    </ul>
  );
}
