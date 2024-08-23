"use client";
import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

interface CloudinaryResults {
  public_id: string;
}

interface Props {
  imageId: string;
  setImageId: (imageId: string) => void;
}

const UploadImage = ({ imageId, setImageId }: Props) => {
  return (
    <div className="flex flex-col items-center">
      {imageId && (
        <CldImage
          className="mb-2"
          src={imageId}
          width={200}
          height={200}
          alt="Me"
        />
      )}
      <CldUploadWidget
        uploadPreset="p201i6tl"
        onSuccess={(result, widget) => {
          const info = result.info as CloudinaryResults;
          setImageId(info.public_id);
        }}
      >
        {({ open }) => {
          return (
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => open()}
            >
              Upload an Image
            </button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};

export default UploadImage;
