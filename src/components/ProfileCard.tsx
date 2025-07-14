interface Property {
  profilePicUrl: string;
  name: string;
  domain: string[];
}

export default function ProfileCard(props: Property) {
  return (
    <div className="flex flex-row gap-2 w-full items-center">
      {/* 프로필 사진 영역 */}
      <div className="relative">
        <img
          src={props.profilePicUrl}
          className="w-9 h-9 min-w-9 min-h-9 rounded-full"
        />
        <img
          src="src/assets/verify_icon.svg"
          className="w-3 h-3 absolute bottom-[2px] right-[2px]"
        />
      </div>

      {/* 텍스트 영역 */}
      <div className="flex flex-col">
        <div className="text-sm text-neutral-500 text-ellipsis">
          {props.domain.join("·")}
        </div>
        <div className="">{props.name}</div>
      </div>
    </div>
  );
}
