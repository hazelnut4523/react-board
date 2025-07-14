import { ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";
import { TOPIC_CATEGORY } from "@/constants/category.const";

function TopicCategoryButton({ id, children }) {
  return (
    <NavLink
      to={{ search: `?category=${id}` }}
      className={`rounded-sm w-full p-2 hover:bg-neutral-800 flex flex-row justify-start gap-4 \
        hover:pl-6 transition-all duration-300`}
    >
      {children}
    </NavLink>
  );
}

export default function TopicCategory() {
  return (
    <div className="flex flex-col gap-3 w-full">
      <span className="text-xl font-bold flex flex-row">
        카테고리 <ChevronDown />
      </span>

      {TOPIC_CATEGORY.map((category) => (
        <TopicCategoryButton key={category.id} id={category.category}>
          {category.icon}
          {category.label}
        </TopicCategoryButton>
      ))}
    </div>
  );
}
