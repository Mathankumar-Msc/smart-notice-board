import fs from "fs/promises";

const path = "./public/version.json";

try {
  await fs.access(path).catch(() => {
    return fs.writeFile(path, JSON.stringify({ version: "1.0.0" }, null, 2));
  });

  const file = await fs.readFile(path, "utf8");
  const versionFile = JSON.parse(file);
  let [major, minor, patch] = versionFile.version.split(".").map(Number);

  patch += 1;
  if (patch >= 100) {
    patch = 0;
    minor += 1;
  }

  versionFile.version = `${major}.${minor}.${patch}`;
  await fs.writeFile(path, JSON.stringify(versionFile, null, 2));
  console.log(`✅ Version bumped to ${versionFile.version}`);
} catch (err) {
  console.error("❌ Failed to bump version:", err);
}
