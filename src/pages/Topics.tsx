import HotTopics from "@/components/HotTopics";
import NewTopicSection from "@/components/NewTopicSection";
import TopicCategory from "@/components/TopicCategory";
import type { Topic } from "@/types/topic";
import supabase from "@/utils/supabase";
import { PencilLine } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";

export default function TopicsPage() {
  const [newTopic, setNewTopic] = useState<Topic[]>([]);
  const [searchParam, setSearchParam] = useSearchParams();
  const category = searchParam.get("category");

  useEffect(() => {
    console.log(category);
    const req = supabase
      .from("topic")
      .select()
      .limit(6)
      .order("upload_date", { ascending: false });

    if (category) {
      req.eq("category", category);
    }

    req.then((res) => {
      console.log(res);

      setNewTopic(res.data);
    });
  }, [category]);

  return (
    <div className="relative flex flex-row gap-5">
      <Link
        to="/topics/new-topic"
        className="fixed bottom-10 left-1/2 px-8 py-4 bg-rose-400/60 rounded-full flex flex-row gap-1"
      >
        <PencilLine />
        토픽 작성하기
      </Link>

      <div className="hidden lg:inline lg:w-1/4">
        <TopicCategory />
      </div>

      <div className="w-full lg:w-3/4 flex flex-col gap-12">
        <HotTopics width={4} />

        <NewTopicSection topics={newTopic ?? []} />
      </div>
    </div>
  );
}
