import fs from "fs";
import { FILE_LOCATION } from "../utils/constans.js";
function decodeHtmlEntities(str) {
  return str
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ");
}

export function generateYAMLDirect(items) {
  let output = "";

  items.forEach((item) => {
    const summary = item.issueSummary?.trim() || "";
    const issueKey = item.issueKey?.trim() || "";
    const description = item.issueDescription || "";

    let testCase = "";
    const regex = /<b[^>]*>\s*Test Case\s*:\s*<\/b>\s*([^<]+)/i;
    const match = description.match(regex);
    if (match && match[1]) {
      testCase = decodeHtmlEntities(match[1].trim());
    } else {
      testCase = "Unknown Case";
    }

    output += `- runFlow:\n`;
    output += `    label: ${testCase} - ${summary}\n`;
    // output += `    when:\n`;
    // output += `       platform: Android\n`;
    // output += `    file: ${FILE_LOCATION}Android/${summary}.yml\n`;
    // output += `    env:\n`;
    // output += `       JIRA_ISSUE: ${issueKey}\n\n`;

    // output += `- runFlow:\n`;
    // output += `    label: ${testCase} - ${summary}\n`;
    // output += `    when:\n`;
    // output += `       platform: iOS\n`;
    // output += `    file: ${FILE_LOCATION}iOS/${summary}.yml\n`;
    // output += `    env:\n`;
    // output += `       JIRA_ISSUE: ${issueKey}\n\n`;
  });

  fs.writeFileSync("outputAllTS.yaml", output);
}
