#!/bin/bash
if npx eslint 'src/**/*.{js,jsx,ts,tsx}'; then
    echo "✅ No issues found!"
else
    echo "❌ Linting errors found!"
fi
