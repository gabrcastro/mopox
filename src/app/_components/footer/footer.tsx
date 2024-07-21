export default function FooterComponent() {
  return (
    <div className="w-full p-5 border-t-[.5px] border-t-zinc-700 flex items-center justify-center">
      <span className="text-zinc-300 text-xs">
        Create by{" "}
        <a
          className="underline"
          target="_blank"
          href="https://linkedin.com/in/gabrielsouzacastro"
        >
          Gabriel Castro
        </a>
      </span>
      <span className="text-zinc-300 mx-3">|</span>
      <span className="text-zinc-300 text-xs">
        Icons by{" "}
        <a className="underline" target="_blank" href="https://icons8.com/">
          Icons8
        </a>
      </span>
    </div>
  );
}
