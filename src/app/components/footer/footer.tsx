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
      <div className="flex flex-wrap items-center justify-center mt-3">
        <span className="text-zinc-300 text-[10px] flex gap-1">
          Created by
          <a
            className="underline"
            target="_blank"
            href="https://linkedin.com/in/gabrielsouzacastro"
          >
            Gabriel Castro
          </a>
        </span>
        <Code className="size-4 text-emerald-500 mx-2" />
        <span className="text-zinc-300 text-[10px]">
          Icons by{" "}
          <a className="underline" target="_blank" href="https://icons8.com/">
            Icons8
          </a>
        </span>
        <Code className="size-4 text-emerald-500 mx-2" />
        <span className="text-zinc-300 text-[10px] gap-1 flex">
          Sound Effect by
          <a
            className="underline"
            target="_blank"
            href="https://pixabay.com/users/microsammy-22905943/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=8761"
          >
            Microsammy
          </a>
          <a
            className="underline"
            target="_blank"
            href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=8761"
          >
            Pixabay
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
