"use client";

import { IKImage, ImageKitProvider, IKUpload, IKVideo } from "imagekitio-next";
import config from "@/lib/config";
import { useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const {
  env: {
    imagekit: { publicKey, urlEndpoint },
  },
} = config;

const authenticator = async () => {
  try {
    const response = await fetch(`${config.env.apiEndpoint}/api/imagekit`);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`
      );
    }

    const data = await response.json();
    const { signature, expire, token } = data;

    return { token, expire, signature };
  } catch (error) {
    throw new Error(`Authentication request failed: ${error.message}`);
  }
};

const FileUpload = ({
  type,
  accept,
  placeholder,
  folder,
  variant,
  onFileChange,
  setFileId,
}) => {
  const ikUploadRef = useRef(null);
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const styles = {
    button:
      variant === "dark"
        ? "bg-dark-300"
        : "bg-light-600 border-gray-100 border",
    placeholder: variant === "dark" ? "text-light-100" : "text-slate-500",
    text: variant === "dark" ? "text-light-100" : "text-dark-400",
  };

  const onError = (error) => {
    console.log(error);
    toast.error(`Failed to upload ${type}. Please try again.`);
  };

  const onSuccess = (res) => {
    setFile(res);
    onFileChange(res.url);
    setFileId(res.fileId);
    toast.success(`Successfully uploaded ${type}.`);
  };

  const onValidate = (file) => {
    if (type === "image" && file.size > 20 * 1024 * 1024) {
      toast.error("Please upload a file that is less than 20MB in size");
      return false;
    }
    if (type === "video" && file.size > 50 * 1024 * 1024) {
      toast.error("Please upload a file that is less than 50MB in size");
      return false;
    }
    return true;
  };

  const handleReupload = async (e) => {
    e.preventDefault();

    if (file?.fileId) {
      try {
        setIsDeleting(true);
        const res = await fetch(
          `${config.env.apiEndpoint}/api/imagekit/delete`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ fileId: file.fileId }),
          }
        );

        if (!res.ok) {
          throw new Error(`Delete failed with status ${res.status}`);
        }

        toast.success("Previous file deleted.");
        setFile(null);
        setProgress(0);
      } catch (error) {
        console.error("Delete failed", error);
        toast.error("Failed to delete previous file. Try again.");
        return;
      } finally {
        setIsDeleting(false);
      }
    }

    // Open upload dialog
    if (ikUploadRef.current) {
      ikUploadRef.current?.click();
    }
  };

  return (
    <ImageKitProvider
      publicKey={publicKey}
      urlEndpoint={urlEndpoint}
      authenticator={authenticator}
    >
      <IKUpload
        ref={ikUploadRef}
        onError={onError}
        onSuccess={onSuccess}
        useUniqueFileName={true}
        validateFile={onValidate}
        onUploadStart={() => setProgress(0)}
        onUploadProgress={({ loaded, total }) => {
          const percent = Math.round((loaded / total) * 100);
          setProgress(percent);
        }}
        folder={folder}
        accept={accept}
        className="hidden"
      />

      <button
        className={cn("upload-btn", styles.button)}
        onClick={
          file
            ? handleReupload
            : (e) => {
                e.preventDefault();
                if (ikUploadRef.current) {
                  ikUploadRef.current?.click();
                }
              }
        }
        disabled={isDeleting}
      >
        <Image
          src="/icons/upload.svg"
          alt="upload-icon"
          width={20}
          height={20}
          className="object-contain"
        />
        <p className={cn("text-base", styles.placeholder)}>
          {isDeleting ? "Deleting..." : file ? "Reupload" : placeholder}
        </p>
      </button>

      {progress > 0 && progress !== 100 && (
        <div className="w-full rounded-full bg-green-200 mt-2">
          <div className="progress" style={{ width: `${progress}%` }}>
            {progress}%
          </div>
        </div>
      )}

      {file &&
        (type === "image" ? (
          <IKImage
            alt={file.filePath}
            path={file.filePath}
            width={500}
            height={300}
          />
        ) : type === "video" ? (
          <IKVideo
            path={file.filePath}
            controls={true}
            className="h-96 w-full rounded-xl"
          />
        ) : null)}
    </ImageKitProvider>
  );
};

export default FileUpload;
