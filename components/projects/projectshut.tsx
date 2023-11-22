export default function ProjectsHut() {
  const projectshut_url = "https://github.com/priyankarpal/projectshut";

  return (
    <section className="space-y-3">
      <a
        target="_blank"
        className="font-medium pl-2 underline"
        href={projectshut_url}
      >
        {" "}
        - projectshut
      </a>
      <div className="pl-5 space-y-3">
        <li>
          projectshut is an open-source web app that enables users to freely
          publish their projects and create user profiles within the platform.
          users need to create pull requests for adding projects it will help
          users to learn via doing.
        </li>
        <li>
          to develop this project we used next.js with typescript, tailwindcss,
          framer motion & more.{" "}
        </li>
      </div>
    </section>
  );
}
