import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function fetchImages() {
  const result = await cloudinary.api.resources({
    type: "upload",
    tags: true,
    max_results: 500,
    transformations: "q_auto,f_auto,c_fill,g_face,w_400,ar_1",
  });

  return result;
}

export async function fetchVideos() {
  const result = await cloudinary.api.resources_by_asset_folder(
    "patdunnproductions/videos",
    {
      tags: true,
      metadata: true,
    }
  );

  return result;
}

export async function fetchPhotosByFolder(folder: string) {
  const result = await cloudinary.api.resources_by_asset_folder(
    `patdunnproductions/photos/${folder}`,
    {
      tags: true,
      metadata: true,
    }
  );

  return result;
}
