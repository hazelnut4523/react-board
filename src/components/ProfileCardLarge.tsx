import { UserPlus, UserSearch } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardAction } from "./ui/card";
import randomInt from "@/utils/randomInt";

export default function ProfileCardLarge() {
  return (
    <Card className="p-4">
      <div className="flex flex-row gap-4 items-center">
        <img
          src="https://picsum.photos/64"
          className="w-12 aspect-square rounded-full"
        />

        <div className="flex flex-col gap-1">
          <span className="text-neutral-500 text-sm">IT 및 기술 분야</span>
          <span className="flex flex-row gap-4 items-end">
            <span>개발자 9Diin</span>

            <span className="text-neutral-500 text-xs flex gap-1 items-end">
              <span>팔로워</span>
              <span className="text-white text-sm">{randomInt(100)}</span>
              <span>명</span>
            </span>
          </span>
        </div>
      </div>

      <hr />

      <CardAction className="w-full flex flex-row justify-between gap-2">
        <Button className="flex-1">
          <UserPlus />
          팔로우
        </Button>
        <Button className="flex-1">
          <UserSearch />
          프로필 보기
        </Button>
      </CardAction>
    </Card>
  );
}
