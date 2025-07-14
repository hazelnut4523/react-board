import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { ArrowLeft, Asterisk, Rocket } from "lucide-react";

export default function NewTopicsPage() {
  return (
    <form className="w-full flex flex-col gap-4">
      {/* 제목 입력 영역 */}
      <Input placeholder="토픽 제목을 입력하세요" className="h-14" />

      <hr />

      <div className="lg:flex flex-row gap-4">
        {/* 좌측 영역 */}
        <div className="lg:w-1/3 flex flex-col gap-4 pb-4">
          {/* 버튼 영역 */}
          <div className="flex flex-row justify-between gap-2">
            <Button className="dark:bg-neutral-800 dark:text-white">
              <ArrowLeft />
            </Button>
            <Button className="dark:bg-neutral-800 dark:text-white">
              임시 저장
            </Button>
            <Button className="bg-rose-400 text-white">
              <Rocket />
              <span>토픽 발행하기</span>
            </Button>
          </div>

          <hr />

          <CategorySelector />

          <ThumbnailSelector />
        </div>

        {/* 우측 영역 */}
        <div className="flex-1">(입력창 영역)</div>
      </div>
    </form>
  );
}

function CategorySelector() {
  return (
    <>
      <Label htmlFor="category">
        <Asterisk color="red" />
        카테고리
      </Label>

      <Select>
        <SelectTrigger className="w-full">
          <SelectValue
            placeholder="주제 선택"
            id="category"
            aria-required={true}
          />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>토픽 Topic</SelectLabel>
            <SelectItem value="humanities">인문학</SelectItem>
            <SelectItem value="startup">스타트업</SelectItem>
            <SelectItem value="it">IT 프로그래밍</SelectItem>
            <SelectItem value="strategy">서비스전략 기획</SelectItem>
            <SelectItem value="marketing">마케팅</SelectItem>
            <SelectItem value="design">디자인 일러스트</SelectItem>
            <SelectItem value="self-development">자기계발</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
}

function ThumbnailSelector() {
  return (
    <>
      <Label htmlFor="thumbnail">
        <Asterisk color="red" />
        썸네일
      </Label>

      <Input type="file" id="thumbnail" />
    </>
  );
}
