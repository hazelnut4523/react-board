import type { Topic } from "@/types/topic";
import TopicCard from "./TopicCard";

export default function NewTopicSection(props: { topics: Topic[] }) {
  return (
    <section className="w-full flex flex-col gap-2">
      <header>
        <h2 className="text-xl py-1 flex flex-row gap-2">
          <img src="./src/assets/writing-hand.gif" className="w-6 h-6" />
          <span>NEW 토픽</span>
        </h2>

        <span className="text-neutral-500">
          새로운 시선으로, 새로운 이야기를 시작하세요. 지금 바로 당신만의 토픽을
          만들어보세요.
        </span>
      </header>

      <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2">
        {props.topics.map((topic, idx) => (
          <TopicCard
            key={idx}
            id={topic.id}
            thumbnailSrc={topic.thumbnail}
            title={topic.title}
            description={JSON.stringify(topic.body)}
          />
        ))}
      </div>
    </section>
  );
}
