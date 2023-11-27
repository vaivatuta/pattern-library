import Container from "./container";
import Button from "./button";

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Hi, Doug.
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            {/* <a
              href="https://tetr.io/"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Play Tetris
            </a> */}
            <Button text="Play Tetris" href="https://tetr.io/" />
            <a
              href={`https://www.youtube.com/watch?v=9d4-OxBy16Y`}
              className="mx-3 font-bold hover:underline"
            >
              It's going to be ok
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
