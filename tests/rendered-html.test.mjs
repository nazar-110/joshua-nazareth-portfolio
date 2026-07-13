import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders Joshua Nazareth's portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Joshua Nazareth — Robotics &amp; Autonomous Systems<\/title>/i);
  assert.match(html, /I build systems/);
  assert.match(html, /that perceive, decide,/);
  assert.match(html, /VisionRoute/);
  assert.match(html, /ROS 2 Autonomy Stack/);
  assert.match(html, /LiDAR SLAM Prototype/);
  assert.match(html, /linkedin\.com\/in\/joshnazz/);
  assert.match(html, /github\.com\/nazar-110/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/i);
});

test("includes production metadata, accessibility, and deployment wiring", async () => {
  const [page, layout, css, packageJson, workflow, nextConfig] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../.github/workflows/deploy-pages.yml", import.meta.url), "utf8"),
    readFile(new URL("../next.config.ts", import.meta.url), "utf8"),
  ]);

  assert.match(page, /className="skip-link"/);
  assert.match(page, /application\/ld\+json/);
  assert.match(page, /prefers-reduced-motion|aria-label|aria-hidden/);
  assert.match(layout, /og\.png/);
  assert.match(layout, /themeColor: "#f6f5f1"/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  assert.match(css, /:focus-visible/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.match(workflow, /actions\/deploy-pages@v5/);
  assert.match(nextConfig, /output: isGitHubPages \? "export"/);

  await access(new URL("../public/og.png", import.meta.url));
});
