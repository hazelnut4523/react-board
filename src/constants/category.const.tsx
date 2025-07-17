import {
  ChartNoAxesCombined,
  CodeXml,
  DraftingCompass,
  Footprints,
  Goal,
  Lightbulb,
  List,
  Rocket,
} from "lucide-react";
import type { JSX } from "react";

interface TopicCategory {
  id: number;
  label: string;
  category: string;
  icon: JSX.Element;
}

export const TOPIC_CATEGORY: TopicCategory[] = [
  { id: 1, label: "전체", category: "", icon: <List /> },
  { id: 2, label: "인문학", category: "humanities", icon: <Lightbulb /> },
  { id: 3, label: "스타트업", category: "startup", icon: <Rocket /> },
  { id: 4, label: "IT·프로그래밍", category: "it", icon: <CodeXml /> },
  { id: 5, label: "서비스·전략 기획", category: "strategy", icon: <Goal /> },
  {
    id: 6,
    label: "마케팅",
    category: "marketing",
    icon: <ChartNoAxesCombined />,
  },
  {
    id: 7,
    label: "디자인·일러스트",
    category: "design",
    icon: <DraftingCompass />,
  },
  {
    id: 8,
    label: "자기계발",
    category: "self-developing",
    icon: <Footprints />,
  },
];
