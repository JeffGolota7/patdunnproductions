import { json, type MetaFunction } from "@remix-run/node";
import { fetchPhotosByFolder, fetchVideos } from "~/api/cloudinary";
import Hero from "~/components/Home/Hero/Hero";

import { Videos } from "~/components/Home/Videos/Videos";
import { About } from "~/components/Home/About/About";
import { Showcase } from "~/components/Home/Showcase/Showcase";

export const meta: MetaFunction = () => {
  return [
    { title: "Pat Dunn Productions - Home" },
    {
      name: "description",
      content:
        "Whether it's on the field, court, or in the stadium, I thrive in the exhilarating atmosphere of sports events, always ready to freeze those split-second moments of victory or determination.",
    },
  ];
};

export async function loader() {
  const photos = await fetchPhotosByFolder("sports");
  const videos = await fetchVideos();

  return json(
    { photos, videos },
    { headers: { "Cache-Control": "max-age=3600, public" } }
  );
}

export default function Index() {
  return (
    <div>
      <Hero />
      <Videos />
      <About />
      <Showcase />
    </div>
  );
}
