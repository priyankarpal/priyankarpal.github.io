export default function GSSOC() {
  const projectshut_url = "https://github.com/priyankarpal/projectshut";

  return (
    <section className="space-y-3">
      <p className="font-medium pl-2">
        {" "}
        - girlscript summer of code (may. 2023 - aug. 2023)
      </p>
      <div className="pl-5 space-y-3">
        <li>
          in may 2023 our open source project{" "}
          <a
            target="_blank"
            href={projectshut_url}
            className="underline font-medium"
          >
            (projectshut)
          </a>{" "}
          i was accepted as a project admin. during that period, i not only
          learned a lot about technology but also gained valuable insights into
          community building, open source practices, project management, and
          more. i also had the opportunity to collaborate with many talented
          individuals.
        </li>
        <li>
          i looked at more than 200+ issues and merged around 100 pull requests,
          which was the best part of my work.
        </li>
      </div>
    </section>
  );
}
