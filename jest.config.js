const dotenv = require('dotenv');
const nextJest = require('next/jest')

dotenv.config({ path: '.env.development' });
/** @type {import('jest').Config} */
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const config = {
  moduleDirectories: ["node_modules", "<rootDir>"],
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(config);
