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
import { Header } from "./components/header";

function App() {
  return (
    <main className="min-h-svh">
      <Header />

      <section>
        <h1 className="text-4xl font-display">Smarter Banking, Made for you</h1>
        <p>Powerful tools. Real benifits. All in one place.</p>
      </section>
    </main>
  );
}

export default App;
