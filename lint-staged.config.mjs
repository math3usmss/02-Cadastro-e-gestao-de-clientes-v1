export default {
  "frontend/**/*.{js,jsx,ts,tsx}": [
    "eslint --fix --config frontend/eslint.config.mjs",
  ],

  "backend/**/*.ts": ["eslint --fix --config backend/eslint.config.mjs"],

  "*.{js,jsx,ts,tsx,json,css,md,yml,yaml}": ["prettier --write"],
};
