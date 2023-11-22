export default function ReactPlay() {
  const reactplay_url = "https://github.com/reactplay/react-play";

  return (
    <section className="space-y-3">
      <p className="font-medium pl-2"> - reactplay.io (oct. 2023 - present)</p>
      <div className="pl-5 space-y-3">
        <li>
          in oct 2023 i joined
          <a
            href={reactplay_url}
            className="underline font-medium"
            target="_blank"
          >
            {" "}
            reactplay.io
          </a>{" "}
          as a project maintainer. this project was part of Hacktoberfest, and
          at that time, i maintained it with other maintainers & still taking
          care of the project now with fellow maintainers.
        </li>
      </div>
    </section>
  );
}
