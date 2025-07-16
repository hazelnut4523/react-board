import { ChartNoAxesColumnIncreasing, Heart } from "lucide-react";
import ProfileCard from "./ProfileCard";
import { Link } from "react-router-dom";

interface Property {
  thumbnailSrc: string;
  title: string;
  description: string;
}

export default function TopicCard(props: Property) {
  return (
    <article className="w-full p-4 border border-neutral-600 rounded-lg bg-neutral-900">
      <Link to="/topics/1" className="flex flex-col gap-4">
        {/* 상단 부분 */}
        <figure className="w-full flex flex-row items-center gap-4">
          <img
            src={props.thumbnailSrc}
            className="w-30 min-w-30 aspect-square rounded-lg object-cover bg-accent"
          />

          <figcaption className="h-30 flex flex-col justify-start gap-1">
            <h3 className="text-lg font-semibold tracking-tight line-clamp-2">
              {props.title}
            </h3>

            <span className="text-neutral-500 tracking-tight line-clamp-3">
              {props.description}
            </span>
          </figcaption>
        </figure>

        {/* 하단 부분 */}
        <div className="flex flex-row justify-between">
          <ProfileCard
            profilePicUrl="https://picsum.photos/64"
            name="개발자 9Diin"
            domain={["IT 및 기술 분야", "소프트웨어 엔지니어"]}
          />

          {/* 게시물 지표 부분 */}
          <div className="flex flex-row gap-4 items-center">
            <div className="flex flex-row gap-1 items-center">
              <ChartNoAxesColumnIncreasing />
              <span>0</span>
            </div>

            <div className="flex flex-row gap-1 items-center">
              <Heart className="text-red-500" />
              <span>0</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
