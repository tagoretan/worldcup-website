var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_fs = __toESM(require("fs"), 1);
var import_net = __toESM(require("net"), 1);
var import_path = __toESM(require("path"), 1);
var import_vite = require("vite");
var DEFAULT_PORT = 3e3;
var DEFAULT_HMR_PORT = 24678;
function canListen(port, host = "0.0.0.0") {
  return new Promise((resolve) => {
    const server = import_net.default.createServer();
    server.once("error", () => resolve(false));
    server.once("listening", () => {
      server.close(() => resolve(true));
    });
    server.listen(port, host);
  });
}
async function findAvailablePort(preferred, maxOffset = 199) {
  for (let port = preferred; port <= preferred + maxOffset; port += 1) {
    if (await canListen(port)) return port;
  }
  throw new Error(`No available port found from ${preferred} to ${preferred + maxOffset}.`);
}
async function startServer() {
  const app = (0, import_express.default)();
  const requestedPort = Number(process.env.PORT) || DEFAULT_PORT;
  const requestedHmrPort = Number(process.env.HMR_PORT) || DEFAULT_HMR_PORT;
  const PORT = await findAvailablePort(requestedPort);
  const HMR_PORT = await findAvailablePort(requestedHmrPort);
  process.env.PORT = String(PORT);
  process.env.HMR_PORT = String(HMR_PORT);
  app.use(import_express.default.json());
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });
  app.post("/api/generate-event", async (req, res) => {
    res.json({ event: "A local scout found a hidden gem in the neighborhood." });
  });
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: {
        middlewareMode: true,
        hmr: process.env.DISABLE_HMR === "true" ? false : { port: HMR_PORT },
        watch: process.env.DISABLE_HMR === "true" ? null : {}
      },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use("/assets", import_express.default.static(import_path.default.join(distPath, "assets"), {
      immutable: true,
      maxAge: "1y",
      fallthrough: false
    }));
    app.use(import_express.default.static(distPath, {
      setHeaders: (res, filePath) => {
        if (import_path.default.basename(filePath) === "index.html") {
          res.setHeader("Cache-Control", "no-store");
        }
      }
    }));
    app.get("*", (req, res) => {
      res.setHeader("Cache-Control", "no-store");
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    if (PORT !== requestedPort) {
      console.log(`Port ${requestedPort} is busy. Using ${PORT} instead.`);
    }
    if (HMR_PORT !== requestedHmrPort && process.env.NODE_ENV !== "production") {
      console.log(`Vite WebSocket port ${requestedHmrPort} is busy. Using ${HMR_PORT} instead.`);
    }
    console.log(`Server running on http://localhost:${PORT}`);
    if (process.env.START_PORT_FILE) {
      import_fs.default.writeFileSync(process.env.START_PORT_FILE, `URL=http://localhost:${PORT}
PORT=${PORT}
HMR_PORT=${HMR_PORT}
`, "utf8");
    }
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
