export default function VotingApp() {
    const votingapp_url = "https://github.com/priyankarpal/voting-app";

    return (
        <section className="space-y-3">
            <a
                target="_blank"
                className="font-medium pl-2 underline"
                href={votingapp_url}
            >
                {" "}
                - votingapp_ backend
            </a>
            <div className="pl-5 space-y-3">
                <li>made a simple voting app backend using expressjs, mongodb, jwt for auth & implemented redis for caching, user can vote to a candidate once.
                </li>
            </div>
        </section>
    );
}
