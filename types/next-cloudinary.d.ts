declare module "next-cloudinary" {
  import { ImageProps } from "next/image";

  // Cloudinary Image component
  export function CldImage(
    props: ImageProps & { src: string }
  ): JSX.Element;

  // Cloudinary Upload Button props (strict)
  export interface CldUploadButtonProps {
    uploadPreset: string;
    multiple?: boolean;
    onUpload?: (result: unknown) => void; // 'unknown' instead of 'any'
    children?: React.ReactNode;
    [key: string]: unknown; // allow extra props safely
  }

  export function CldUploadButton(
    props: CldUploadButtonProps
  ): JSX.Element;
}