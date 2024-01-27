export default function Hacktoberfest() {
    const event_url =
        "https://gdsc.community.dev/events/details/developer-student-clubs-sb-jain-institute-of-technology-management-research-nagpur-presents-hacktoberfest-2023-your-open-source-odyssey-begins/";

    return (
        <section className="space-y-3">
            <p className="font-medium pl-2"> - guest speaker at GDSC SBJIT  (oct. 2023 )</p>
            <div className="pl-5 space-y-3">
                <li>
                    took a
                    <a href={event_url} className="underline font-medium" target="_blank">
                        {" "}
                        session
                    </a>{" "}
                    virtualy about how to get started with open source & contributing to
                    open source projects in hacktoberfest 2023 at GDSC SBJIT. 
                </li>
            </div>
        </section>
    );
}
