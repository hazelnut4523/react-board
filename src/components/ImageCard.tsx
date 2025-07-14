import { MousePointerClick } from "lucide-react";
import ProfileCard from "./ProfileCard";
import { Link } from "react-router-dom";

interface Property {
  imgSrc: string;
  title: string;
}

export default function ImageCard(props: Property) {
  return (
    <article className="w-full min-w-58">
      <Link to="/topics/1" className="flex flex-col gap-2">
        <div className="relative">
          {/* 이미지 영역 */}
          <img
            src={props.imgSrc}
            className="w-full aspect-3/4 bg-neutral-400 rounded-xl object-cover"
          />

          <header className="w-full flex flex-row justify-between items-end absolute bottom-0 p-2 z-10">
            <h3 className="w-3/4 font-bold text-2xl text-shadow-lg tracking-tight line-clamp-3">
              {props.title}
            </h3>
            <button className="rounded-md bg-neutral-800 p-2">
              <MousePointerClick />
            </button>
          </header>
        </div>

        <ProfileCard
          profilePicUrl="https://picsum.photos/500"
          name="개발자 9Diin"
          domain={["IT 및 기술 분야", "소프트웨어 엔지니어"]}
        />
      </Link>
    </article>
  );
}
