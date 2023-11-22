export default function GoGreen() {
  const gogreen_url = "https://github.com/priyankarpal/gogreen";

  return (
    <section className="space-y-3">
      <a
        target="_blank"
        className="font-medium pl-2 underline"
        href={gogreen_url}
      >
        {" "}
        - gogreen
      </a>
      <div className="pl-5 space-y-3">
        <li>
          gogreen&apos;s primary goal revolves around establishing a
          comprehensive carbon-neutral platform tailored for avid travelers.
          every aspect of their engagement within this platform will be powered
          by renewable energy sources, encompassing a fully sustainable approach
          from inception to execution.
        </li>
        <li>
          we&apos;ve used next.js, tailwindcss, framer motion, autho for
          front-end and node.js, express.js, mongodb atlas for back-end also for
          payment we used razorpay. we deployed our website&apos;s front-end on
          vercel and back-end on render.
        </li>
      </div>
    </section>
  );
}
