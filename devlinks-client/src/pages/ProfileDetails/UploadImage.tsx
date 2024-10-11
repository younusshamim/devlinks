import Section from "@/components/Section";
import { IoImageOutline } from "react-icons/io5";

export default function UploadImage() {
  // const formContext = useFormContext();
  // const { register, setValue, getValues, formState: { errors } } = formContext;

  const imageUrl = null;

  const handleImageChange = () => {
  };

  return (
    <Section
      className={`bg-gray-50 flex flex-col md:flex-row md:items-center md:justify-between `}
    >
      <p className="text-neutral-grey md:text-nowrap">Profile picture</p>

      <div className="md:flex md:items-center md:justify-end md:gap-10">
        <div className="flex my-4">
          <label
            htmlFor="upload-image-input"
            className="relative w-[140px] h-[140px] flex flex-col items-center justify-center gap-2 cursor-pointer bg-neutral-light-purple rounded-lg hover:shadow-lg border border-transparent hover:border-primary-index transition-all duration-300 text-primary bg-primary/10"
          >
            {!imageUrl ? (
              <>
                <IoImageOutline className="text-3xl" />
                <span className="font-semibold text-primary-index">
                  + Upload Image
                </span>
              </>
            ) : (
              <>
                {/* <>
                  <NextImage
                    src={imageUrl}
                    alt="Uploaded image preview"
                    fill
                    priority
                    sizes="193px"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-neutral-dark-grey opacity-50 rounded-lg" />
                </>

                <div className="h-full w-full absolute top-0 right-0 flex flex-col items-center justify-center">
                   <IoImageOutline className="text-white"/>

                  <span className="text-lg font-semibold text-white">
                    Change Image
                  </span>
                </div> */}
              </>
            )}
            <input
              id="upload-image-input"
              name="upload-image"
              type="file"
              className="absolute top-0 left-0 opacity-0 w-full h-full cursor-pointer"
              onChange={handleImageChange}
            />
          </label>
        </div>

        <div className="md:w-[30%]">
          <p className="text-neutral-grey text-xs ">
            Image must be below 1024x1024px. Use PNG or JPG format.
          </p>

          {/* {!error?.profile_picture?.status ? (
            <p className="text-neutral-grey text-xs ">
              Image must be below 1024x1024px. Use PNG or JPG format.
            </p>
          ) : (
            <p className="text-error text-xs">
              Error: &nbsp; {error?.profile_picture?.message}
            </p>
          )} */}
        </div>
      </div>
    </Section>
  );
}
