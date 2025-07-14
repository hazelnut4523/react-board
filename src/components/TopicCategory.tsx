import {
  ChartNoAxesCombined,
  ChevronDown,
  CodeXml,
  DraftingCompass,
  Footprints,
  Goal,
  Lightbulb,
  List,
  Rocket,
} from "lucide-react";

function TopicCategoryButton({ children }) {
  return (
    <a className="rounded-sm w-full p-2 hover:bg-neutral-800 flex flex-row justify-start gap-4">
      {children}
    </a>
  );
}

export default function TopicCategory() {
  return (
    <div className="flex flex-col gap-3 w-full">
      <span className="text-xl font-bold flex flex-row">
        카테고리 <ChevronDown />
      </span>

      <TopicCategoryButton>
        <List />
        전체
      </TopicCategoryButton>

      <TopicCategoryButton>
        <Lightbulb />
        인문학
      </TopicCategoryButton>

      <TopicCategoryButton>
        <Rocket />
        스타트업
      </TopicCategoryButton>

      <TopicCategoryButton>
        <CodeXml />
        IT/프로그래밍
      </TopicCategoryButton>

      <TopicCategoryButton>
        <Goal />
        서비스 전략 기획
      </TopicCategoryButton>

      <TopicCategoryButton>
        <ChartNoAxesCombined />
        마케팅
      </TopicCategoryButton>

      <TopicCategoryButton>
        <DraftingCompass />
        디자인 일러스트
      </TopicCategoryButton>

      <TopicCategoryButton>
        <Footprints />
        자기계발
      </TopicCategoryButton>
    </div>
  );
}
