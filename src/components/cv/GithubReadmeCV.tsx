import { marked } from "marked";
import { getRemoteFileData } from "../helpers/getRemoteFile";
import { useEffect, useState } from "react";

const REMOTE_FILE = 'https://raw.githubusercontent.com/fgbyte/fgbyte/main/README.md?v=2';
const GithubReadmeCV = () => {
	const [file, setFile] = useState("Loading from Github Profile...");
	useEffect(() => {
		async function getData(url) {
			const content = await getRemoteFileData(url, "text");
			if (content) {
				const parsedContent = marked.parse(content);
				if (parsedContent) setFile(parsedContent);
			}
		}
		getData(REMOTE_FILE);
	}, []);

	return (
		<article
			className="py-3 mb-4 overflow-auto prose-h1:mb-5 prose-h1:text-3xl prose-h1:font-bold prose-a:underline prose-ul:mt-4 prose-ul:my-2 prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-5 prose-img:mt-4 prose-img:inline break-words prose-li:my-2 prose-p:text-base [&>p>a>img]:rounded-lg [&>p>a>img]:opacity-80 [&>p:last-child]:my-4"
			dangerouslySetInnerHTML={{ __html: file }}
		/>
	);
};

export default GithubReadmeCV;
