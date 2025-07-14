import HotTopics from "@/components/HotTopics";
import NewTopicSection from "@/components/NewTopicSection";
import TopicCategory from "@/components/TopicCategory";

export default function TopicsPage() {
  return (
    <div className="flex flex-row gap-5">
      <div className="hidden lg:inline lg:w-1/4">
        <TopicCategory />
      </div>

      <div className="w-full lg:w-3/4 flex flex-col gap-12">
        <HotTopics />

        <NewTopicSection />
      </div>
    </div>
  );
}
