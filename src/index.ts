import { App } from "./app";

async function main() {
  const app = new App(3008);
  await app.listen();
}

main();
