import {
  Code,
  Github,
  GithubIcon,
  Heart,
  LinkedinIcon,
  YoutubeIcon,
} from "lucide-react";

export default function FooterComponent() {
  return (
    <div className="w-full p-5 border-t-[.5px] border-t-zinc-700 flex flex-col items-center justify-center">
      <div className="flex items-center justify-center">
        <span className="text-zinc-300 text-xs flex gap-1">
          Created by
          <a
            className="underline"
            target="_blank"
            href="https://linkedin.com/in/gabrielsouzacastro"
          >
            Gabriel Castro
          </a>
        </span>
        <Code className="size-4 text-lime-300 mx-5" />
        <span className="text-zinc-300 text-xs">
          Icons by{" "}
          <a className="underline" target="_blank" href="https://icons8.com/">
            Icons8
          </a>
        </span>
      </div>
      {/* <div className="flex items-center justify-center">
        <GithubIcon className="size-5 text-zinc-400" />
        <LinkedinIcon className="size-5 text-zinc-400" />
        <YoutubeIcon className="size-5 text-zinc-400" />
      </div> */}
    </div>
  );
}
