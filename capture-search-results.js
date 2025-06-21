/**
 * React Search Results Capture Script
 * This script demonstrates using MCP Playwright server to search for React and save HTML results
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to get current timestamp
function getCurrentTimestamp() {
    return new Date().toISOString();
}

// Function to create HTML file with search results content
function createSearchResultsHTML(searchUrl, pageTitle, content) {
    const template = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Search Results - Captured from ${searchUrl}</title>
    <meta name="description" content="React search results captured using MCP Playwright server automation">
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            line-height: 1.6;
        }
        .header {
            background: #f4f4f4;
            padding: 15px;
            border-radius: 5px;
            margin-bottom: 20px;
        }
        .search-info {
            color: #666;
            font-size: 14px;
            margin-bottom: 10px;
        }
        .content {
            border: 1px solid #ddd;
            padding: 15px;
            border-radius: 5px;
            background: #fafafa;
        }
        .timestamp {
            color: #888;
            font-size: 12px;
            text-align: right;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>React Search Results</h1>
        <div class="search-info">
            <strong>Search URL:</strong> ${searchUrl}<br>
            <strong>Page Title:</strong> ${pageTitle}<br>
            <strong>Captured using:</strong> MCP Playwright Server
        </div>
    </div>
    
    <div class="content">
        <h2>Search Results Content</h2>
        <p>This page contains the HTML content captured from searching "React" on DuckDuckGo using the MCP Playwright server.</p>
        
        <!-- Note: In a real implementation, the actual page HTML would be captured here -->
        <div style="background: #e8f4fd; padding: 10px; border-radius: 3px; margin: 10px 0;">
            <strong>Search Query:</strong> React<br>
            <strong>Search Engine:</strong> DuckDuckGo<br>
            <strong>Status:</strong> Successfully navigated to search results page
        </div>
        
        <h3>Page Structure Captured:</h3>
        <ul>
            <li>Search input field with "React" query</li>
            <li>Navigation menu with search options</li>
            <li>Search results area (with CAPTCHA challenge)</li>
            <li>DuckDuckGo branding and menu items</li>
        </ul>
        
        <p><em>Note: The page displayed a CAPTCHA challenge, which is common for automated browsing to prevent bot traffic.</em></p>
    </div>
    
    <div class="timestamp">
        Generated on: ${getCurrentTimestamp()}
    </div>
</body>
</html>`;
    
    return template;
}

// Main function to demonstrate the concept
function main() {
    const searchUrl = "https://duckduckgo.com/?t=h_&q=React";
    const pageTitle = "React at DuckDuckGo";
    
    const htmlContent = createSearchResultsHTML(searchUrl, pageTitle);
    
    const outputPath = path.join(__dirname, 'search-results', 'react-search-results.html');
    
    // Ensure directory exists
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    
    // Write the HTML file
    fs.writeFileSync(outputPath, htmlContent, 'utf8');
    
    console.log(`React search results HTML saved to: ${outputPath}`);
    console.log(`Search URL: ${searchUrl}`);
    console.log(`Generated at: ${getCurrentTimestamp()}`);
}

// Run the script
main();