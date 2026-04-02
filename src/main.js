import { getAuthHeader } from "./jira/auth.js";
import { getAll } from "./jira/getAll.js";
import { generateYAMLDirect } from "./utils/generateYAMLDirect.js";
import { generateAllTestStepsYaml } from "./generator/generateAllTestStepsYaml.js";
import { JIRA_PASSWORD, JIRA_USERNAME } from "./utils/constans.js";

// -------------------------------------------------------------------




// Jira Credentials
const USERNAME = JIRA_USERNAME;
const PASSWORD = JIRA_PASSWORD;

const authHeader = getAuthHeader(USERNAME, PASSWORD);

// -------------------------------------------------------------------

async function run() {
  try {
    // Get All Data
    console.log(`🔍 Fetching IssueId for All testcase ...`);
    const getAllTS = await getAll(authHeader);
    console.log(`✔ IssueId: ${getAllTS}`);

    console.log("⚙️ Generating YAML directly from API response...");
    generateYAMLDirect(getAllTS);

    console.log("⚙️ Generating YAML for each IssueId...");
    await generateAllTestStepsYaml(getAllTS, authHeader);





    console.log("🎉 DONE! output.yaml is ready.");
  } catch (err) {
    console.error("❌ ERROR:", err.message);
  }
}

run();
