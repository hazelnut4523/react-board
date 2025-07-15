import TextEditor from "@/components/TextEditor";
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
import { TOPIC_CATEGORY } from "@/constants/category.const";

import { ArrowLeft, Asterisk, Rocket } from "lucide-react";

export default function NewTopicsPage() {
  return (
    <form className="w-full flex flex-col gap-4">
      {/* 제목 입력 영역 */}
      <Input placeholder="토픽 제목을 입력하세요" className="h-14" />

      <hr />

      <div className="lg:flex flex-row gap-4">
        {/* 좌측 영역 */}
        <div className="lg:w-1/4 flex flex-col gap-4 pb-4">
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
        <div className="flex-1 min-h-150">
          <TextEditor />
        </div>
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
            {TOPIC_CATEGORY.filter((item) => item.category !== "").map(
              (category) => (
                <SelectItem key={category.id} value={category.category}>
                  {category.label}
                </SelectItem>
              ),
            )}
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
