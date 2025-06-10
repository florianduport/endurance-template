#!/usr/bin/env node

/**
 * Module dependencies.
 */

import path from 'path';
import fs from 'fs';
import { fileURLToPath, pathToFileURL } from 'url';
import { app as coreApp } from 'endurance-core';
import debugFactory from 'debug';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const localAppPath = path.join(__dirname, '../src/app.js');

const debug = debugFactory('myapp:server');

async function startServer() {
  let app;

  if (fs.existsSync(localAppPath)) {
    const { default: localApp } = await import(pathToFileURL(localAppPath).href);
    app = localApp();
  } else {
    app = coreApp;
  }
}

startServer();