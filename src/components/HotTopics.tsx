import randomInt from "@/utils/randomInt";
import ImageCard from "./ImageCard";

export default function HotTopics() {
  return (
    <section className="w-full flex flex-col gap-2">
      <header>
        <h2 className="text-xl py-1 flex flex-row items-center gap-2">
          <img src="./src/assets/fire.gif" className="w-6 h-6" />
          <span>핫 토픽</span>
        </h2>

        <span className="text-neutral-500">
          지금 가장 주목받는 주제들을 살펴보고, 다양한 관점의 인사이트를
          얻어보세요.
        </span>
      </header>

      {/* 콘텐츠 카드 영역 */}
      <div className="flex flex-row gap-4 w-full overflow-x-scroll">
        <ImageCard
          imgSrc={`https://picsum.photos/500?number=${randomInt(100)}`}
          title="Lorem Ipsum 1"
        />
        <ImageCard
          imgSrc={`https://picsum.photos/500?number=${randomInt(100)}`}
          title="Lorem Ipsum 2"
        />
        <ImageCard
          imgSrc={`https://picsum.photos/500?number=${randomInt(100)}`}
          title="Lorem Ipsum 3"
        />
        <ImageCard
          imgSrc={`https://picsum.photos/500?number=${randomInt(100)}`}
          title="Lorem Ipsum 4"
        />
        <ImageCard
          imgSrc={`https://picsum.photos/500?number=${randomInt(100)}`}
          title="Lorem Ipsum 5"
        />
      </div>
    </section>
  );
}
