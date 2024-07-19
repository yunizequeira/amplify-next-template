"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { UploadFile } from "@mui/icons-material";
const CreateSevice = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const route = useRouter();

  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const hiddenInput = useRef<HTMLInputElement>(null);

  // cuando se cambia la imagen se actualiza el estado
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    console.log(file);
    if (file) {
      setSelectedImage(file);
    }
  };

  // cuando se envia el formulario se obtiene la imagen del state y se sube a s3 y devuelve la url si es exitosa o el error si falla
  const onSubmit = handleSubmit(async (data) => {
    const formData = new FormData();

    if (selectedImage) {
      formData.append("name", selectedImage.name);
      formData.append("image", selectedImage);

      const req = await fetch("/api/s3", {
        method: "POST",
        body: formData,
      });
      const { url, error } = await req.json();
      console.log(url, error);
      if (error) {
        setError(error);
        return;
      }

      // si hay url despues de subir la imagen a s3 se crea el servicio
      if (url) {
        const res = await fetch("/api/create-service", {
          method: "POST",
          body: JSON.stringify({ ...data, image: url }),
          headers: { "Content-Type": "application/json" },
        });
        const { success, error } = await res.json();
        if (success) {
          route.push("/list");
        } else {
          console.log(error);
          setError(error);
        }
      }
    } else {
      setError("image is required");
    }
  });
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-2 w-full max-w-[800px] bg-slate-950 px-10 py-5 rounded shadow-md"
    >
      <h2 className="text-2xl font-semibold">Create Service</h2>
      <div>{error && <p className="text-red-500">{error}</p>}</div>
      <div className="flex flex-col gap-1">
        <label htmlFor="image">Image</label>
        <div
          className="w-full h-60 mx-auto border cursor-pointer"
          onClick={() => hiddenInput.current?.click()}
        >
          {selectedImage ? (
            <Image
              src={URL.createObjectURL(selectedImage)}
              alt="image"
              width={200}
              height={200}
              className="object-cover w-full h-full"
            />
          ) : (
            <div className="w-full h-full flex flex-col justify-center items-center">
              <UploadFile />
              <p className="text-xl">Click to upload</p>
            </div>
          )}
        </div>
        <input
          type="file"
          name="image"
          tabIndex={-1}
          ref={hiddenInput}
          className="h-10 rounded px-2 hidden"
          placeholder="Enter title"
          onChange={(e) => handleChange(e)}
        />
        {errors.image && <p className="text-red-500">{"image is required"}</p>}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="h-10 rounded px-2"
          placeholder="Enter title"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <p className="text-red-500 text-xs">{"Name is required"}</p>
        )}
      </div>
      <div className="w-full grid grid-cols-2 gap-2 items-center">
        <div className="flex flex-col gap-2">
          <label htmlFor="price">Price of Service</label>
          <input
            type="number"
            className="h-10 rounded px-2"
            placeholder="price"
            {...register("price", { required: true })}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="type_price">Type of Price</label>
          <select
            id="price_type"
            className="h-10 rounded px-2"
            {...register("type_price", { required: true })}
          >
            <option value="trip">Trip</option>
            <option value="hours">Hours</option>
            <option value="day">Days</option>
          </select>
        </div>

        {errors.price && (
          <p className="text-red-500 text-xs">{"Price is required"}</p>
        )}
      </div>
      <div className="w-full grid lg:grid-cols-2 gap-2 items-center">
        <div className="w-full flex flex-col gap-2">
          <div className="w-full flex gap-5 py-5">
            <label htmlFor="type_service">Type of Service</label>
            <div className="space-x-2">
              <input
                type="radio"
                value="city"
                {...register("type_service", { required: true })}
              />
              <span>city</span>
            </div>
            <div>
              <input
                type="radio"
                value="rural"
                {...register("type_service", { required: true })}
              />
              <span>rural</span>
            </div>
          </div>
          {errors.type_service && (
            <p className="text-red-500 text-xs">{"Select Service Type"}</p>
          )} 

          {/* <label htmlFor="type_service">Type of Service</label>
          <select
            id="type_service"
            className="h-10 rounded px-2"
            {...register("type_service", { required: true })}
          >
            <option value="city">City</option>
            <option value="rural">Rural</option>
          </select>
          {errors.type_service && (
            <p className="text-red-500 text-xs">{"Select Service Type"}</p>
          )} */}
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="time">Estimated Time</label>
          <div className="w-full flex gap-2 items-center">
            <input
              type="number"
              id="type"
              className="h-10 rounded px-2 w-full"
              placeholder="time"
              {...register("time", { required: true })}
            />

           
          </div>
          {errors.time && (
              <p className="text-red-500 text-xs">
                {" Service Time is required"}
              </p>
            )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="description">Description</label>
        <textarea
          className="h-32 rounded px-2 resize-none"
          placeholder="Description Service ..."
          {...register("description", { required: true })}
        />
        {errors.description && (
          <p className="text-red-500 text-xs">{"Description is required"}</p>
        )}
      </div>

      <button
        type="submit"
        className="p-2 bg-blue-700 text-white rounded-md font-semibold"
      >
        Add Service
      </button>
    </form>
  );
};

export default CreateSevice;
