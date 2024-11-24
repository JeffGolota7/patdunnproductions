import { json, type MetaFunction } from "@remix-run/node";
import { ClientLoaderFunctionArgs } from "@remix-run/react";
import { cacheClientLoader, createCacheAdapter } from "remix-client-cache";
import { fetchImages, fetchVideos } from "~/api/cloudinary";
import { Gallery as GalleryComponent } from "~/components/Gallery/Gallery";

export const meta: MetaFunction = () => {
  return [
    { title: "Pat Dunn Productions - Gallery" },
    {
      name: "description",
      content:
        "Feel free to explore my collection of photos and videos, which highlight not only my technical skills but also my passion for storytelling and visual artistry.",
    },
  ];
};

export async function loader() {
  const [photos, videos] = await Promise.all([fetchImages(), fetchVideos()]);
  console.log("length", photos.resources.length);

  const categories = photos.resources.map((photo) => {
    const filePath = photo.asset_folder.split("/");

    if (photo.asset_folder !== "") {
      return (
        filePath[filePath.length - 1].charAt(0).toUpperCase() +
        filePath[filePath.length - 1].slice(1)
      );
    }
  });

  const newCategories = categories.reduce((accumulator, value) => {
    if (!accumulator.includes(value) && value) {
      accumulator.push(value);
    }
    return accumulator;
  }, []);

  return json({ photos, videos, categories: newCategories });
}

export default function Gallery() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <GalleryComponent />
    </div>
  );
}
