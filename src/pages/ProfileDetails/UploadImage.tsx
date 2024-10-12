import Section from "@/components/Section";
import { showErrorToast } from "@/config/toast-options";
import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { IoImageOutline } from "react-icons/io5";

const IMAGEBB_API_KEY = import.meta.env.VITE_IMAGEBB_API_KEY;
const MAX_FILE_SIZE = 1024 * 1024;
const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/png'];

export default function UploadImage() {
  const { setValue, watch } = useFormContext();
  const imageUrl = watch('picture');
  const [isLoading, setIsLoading] = useState(false);

  const validateImage = (file: File): boolean => {
    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      showErrorToast('Please upload a PNG or JPG image.');
      return false;
    }
    if (file.size > MAX_FILE_SIZE) {
      showErrorToast('Image size must be below 1MB.');
      return false;
    }
    return true;
  };

  const uploadToImageBB = async (file: File) => {
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch(`https://api.imgbb.com/1/upload?key=${IMAGEBB_API_KEY}`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Upload failed');

      const data = await response.json();
      return data.data.url;
    } catch (error) {
      console.log(error);
      showErrorToast('Error uploading image:',);
      return null;
    }
  };

  const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!validateImage(file)) return;

    setIsLoading(true);
    const uploadedImageUrl = await uploadToImageBB(file);
    setIsLoading(false);

    if (uploadedImageUrl) {
      setValue('picture', uploadedImageUrl);
    } else {
      showErrorToast('Failed to upload image. Please try again.');
    }
  };

  return (
    <Section className="bg-gray-50 flex flex-col md:flex-row md:items-center md:justify-between">
      <p className="text-neutral-grey md:text-nowrap">Profile picture</p>

      <div className="md:flex md:items-center md:justify-end md:gap-10">
        <div className="flex my-4">
          <label
            htmlFor="upload-image-input"
            className="relative w-[140px] h-[140px] flex flex-col items-center justify-center gap-2 cursor-pointer bg-neutral-light-purple rounded-lg hover:shadow-lg border border-transparent hover:border-primary-index transition-all duration-300 text-primary bg-primary/10 overflow-hidden"
          >
            {isLoading ? (
              <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-index"></div>
                <p className="mt-2">Uploading...</p>
              </div>
            ) : !imageUrl ? (
              <>
                <IoImageOutline className="text-3xl" />
                <span className="font-semibold text-primary-index">
                  + Upload Image
                </span>
              </>
            ) : (
              <>
                <img
                  src={imageUrl}
                  alt="Uploaded image preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center transition-opacity duration-300 opacity-0 hover:opacity-100 z-10">
                  <IoImageOutline className="text-white text-3xl" />
                  <span className="text-lg font-semibold text-white mt-2">
                    Change Image
                  </span>
                </div>
              </>
            )}
            <input
              id="upload-image-input"
              name="upload-image"
              type="file"
              accept="image/png, image/jpeg"
              className="absolute top-0 left-0 opacity-0 w-full h-full cursor-pointer"
              onChange={handleImageChange}
              disabled={isLoading}
            />
          </label>
        </div>

        <div className="md:w-[40%]">
          <p className="text-neutral-grey text-xs">
            Image must be below 1MB. Use PNG or JPG format.
          </p>
        </div>
      </div>
    </Section>
  );
}