import { AboutDetails } from "./AboutDetails/AboutDetails";
import { Companies } from "./Companies/Companies";
import { HeroBanner } from "./HeroBanner/HeroBanner";

export function About() {
  return (
    <>
      <HeroBanner />
      <Companies />
      <AboutDetails />
    </>
  );
}
