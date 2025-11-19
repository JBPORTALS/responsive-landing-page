/**
 * Guide to get the design
 *
 * 1. This website design from dribbble.com https://dribbble.com/shots/26515405-Fintech-Banking-Website
 * 2. Install any chrome extension to get the colors on the browser to pick the colors from design image.
 * 3. Here we are gonna use google fonts to match up to the design -
 *    `Rubik` for body font - https://fonts.google.com/specimen/Rubik
 *    `Rubik Dirt` for display font - https://fonts.google.com/specimen/Rubik+Dirt
 *    Get font -> Web -> Get Embed Code -> Import
 */
import { Button } from "./components/button";
import { Header } from "./components/header";

import CardCoin from "./assets/card-coin.png";

function App() {
  return (
    <main className="min-h-svh">
      <Header />

      <section className="bg-primary gap-8 text-primary-foreground min-h-[calc(100svh-56px)] lg:min-h-[calc(100svh-112px)] p-8 flex items-center flex-col lg:p-16 lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-6 items-center lg:items-start">
          <h1 className="text-5xl font-display text-center lg:text-8xl lg:text-left">
            Smarter Banking, Made for you
          </h1>
          <p className="text-center text-lg text-primary-foreground/80 lg:text-left">
            Powerful tools. Real benifits. All in one place.
          </p>
          <Button variant={"green"} size={"lg"} className={"w-fit"}>
            Explore Tools
          </Button>
        </div>

        <img
          src={CardCoin}
          className="w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] aspect-square py-4"
        />
      </section>
    </main>
  );
}

export default App;
