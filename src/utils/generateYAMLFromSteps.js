import fs from "fs";

  if (fs.existsSync("./yml")) {
     fs.rmSync("./yml", { recursive: true, force: true });
}

export function generateYAMLFromSteps(steps, fileName) {

  // Pastikan folder tersedia
  if (!fs.existsSync("./yml")) {
    fs.mkdirSync("./yml");
  }

  let output = "";
  let counter = 1;

  steps.forEach((item) => {
    const step = item.step?.trim()?.replace(/:/g, ";") || "";
    const result =
      item.result?.replace(/\n/g, " ").replace(/\s+/g, " ").replace(/:/g, ";").trim() || "";

    output += `- runFlow:\n`;
    output += `    label: ${String(counter).padStart(2, "0")} - ${step}\n`;
    output += `    commands: \n`;
    counter++;

    output += `- runFlow:\n`;
    output += `    label: ${String(counter).padStart(2, "0")} - ${result}\n`;
    output += `    commands: \n\n`;
    counter++;
  });

  fs.writeFileSync(`./yml/${fileName}.yml`, output);

  console.log(`✔ Created YAML: ./yml/${fileName}.yml`);
}
