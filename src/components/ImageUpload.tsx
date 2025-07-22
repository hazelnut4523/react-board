import { useMemo, useRef, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Image, ImageOff } from "lucide-react";

interface Props {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ImageUpload(props: Props) {
  const [file, setFile] = useState<URL | File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onChange !== undefined) {
      console.log("props.onChange");
      props.onChange(event);
    }

    const file = event.target.files?.[0];
    if (file) {
      setFile(file);
      event.target.value = "";
    }
  };

  const resetFile = () => {
    setFile(null);
  };

  const ThumbnailPreview = () => {
    if (file instanceof URL) {
      // URL 형태일 경우
      return (
        <div>
          <img
            src={file.toString()}
            className="w-full aspect-video rounded-lg object-cover border"
          />
          <Button
            size="icon"
            className="absolute bottom-2 right-2"
            onClick={resetFile}
          >
            <ImageOff />
          </Button>
        </div>
      );
    } else if (file instanceof File) {
      // File 형태일 경우
      return (
        <div className="relative">
          <img
            src={URL.createObjectURL(file)}
            className="w-full aspect-video rounded-lg object-cover border"
          />
          <Button
            size="icon"
            className="absolute bottom-2 right-2"
            onClick={resetFile}
          >
            <ImageOff />
          </Button>
        </div>
      );
    }

    return (
      <div className="flex items-center justify-center w-full aspect-video bg-accent rounded-md border">
        <Button
          variant="secondary"
          onClick={() => fileInputRef.current?.click()}
        >
          <Image />
        </Button>
      </div>
    );
  };

  return (
    <div>
      {useMemo(() => ThumbnailPreview(), [file])}

      <Input
        type="file"
        accept="image/*"
        className="hidden"
        ref={fileInputRef}
        onChange={handleFileChange}
      />
    </div>
  );
}
