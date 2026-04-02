import { convertScenarioTitle } from "./convertScenarioTitle.js";

function decodeHtmlEntities(str) {
  return str
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ");
}

export function converstAllTestCase(getAllTS) {
  return getAllTS
    .map((item) => {
      const issueSummary = item.issueSummary?.trim() || "";
      const issueKey = item.issueKey?.trim() || "";
      const description = item.issueDescription || "";

      let testCase = "";
      const regex = /Test Case:\s*([^<]+)/i;
      const match = description.match(regex);

      if (match && match[1]) {
        testCase = decodeHtmlEntities(match[1].trim());
      }

      return `${issueSummary}\nTest Case: ${testCase}\nNomor Jira: ${issueKey}`;
    })
    .join("\n\n");
}
