import { getTestSteps } from "./../jira/getStepJira.js";
import { generateYAMLFromSteps } from "./../utils/generateYAMLFromSteps.js";

export async function generateAllTestStepsYaml(allTests, authHeader) {
  for (const test of allTests) {
    const issueId = test.issueId;
    const summary = test.issueSummary.replace(/[^\w]/g, "_");

    console.log(`📥 Fetching Test Steps for IssueID: ${issueId} (${summary})`);

    // ⬅ gunakan await untuk resolve promise
    const steps = await getTestSteps(issueId, authHeader);

    console.log(`📄 Generating YAML for ${summary}`);
    generateYAMLFromSteps(steps, summary);
  }
}


