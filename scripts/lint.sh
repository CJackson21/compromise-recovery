#!/bin/bash
if npx eslint 'src/**/*.{js,jsx,ts,tsx}'; then
    echo "✅ No issues found!"
else
    echo "❌ Linting errors found! Fixing..."
    npx eslint --fix 'src/**/*.{js,jsx,ts,tsx}'
    if npx eslint 'src/**/*.{js,jsx,ts,tsx}'; then
        echo "✅ Fixed!"
    fi
fi
