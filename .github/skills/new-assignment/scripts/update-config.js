#!/usr/bin/env node

/**
 * Script to update config.json with new assignment metadata
 * 
 * Usage: node update-config.js
 * 
 * This script will:
 * 1. Read the current config.json
 * 2. Prompt for assignment details
 * 3. Add the new assignment entry
 * 4. Write the updated config.json
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const CONFIG_PATH = path.join(__dirname, '../../..', 'config.json');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

async function main() {
  try {
    console.log('📝 Assignment Config Updater\n');

    // Read current config
    if (!fs.existsSync(CONFIG_PATH)) {
      console.error('❌ config.json not found at:', CONFIG_PATH);
      process.exit(1);
    }

    const config = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8'));

    // Gather assignment details
    const id = await question('Assignment ID (kebab-case): ');
    const title = await question('Assignment Title: ');
    const folder = await question('Folder name (in assignments/): ');
    const description = await question('Brief description: ');
    const difficulty = await question('Difficulty (beginner/intermediate/advanced): ');
    const tagsInput = await question('Tags (comma-separated): ');
    
    const tags = tagsInput.split(',').map(tag => tag.trim()).filter(tag => tag);

    // Create assignment entry
    const assignment = {
      id,
      title,
      folder,
      description,
      difficulty,
      tags
    };

    // Add to config
    if (!config.assignments) {
      config.assignments = [];
    }

    // Check for duplicate
    if (config.assignments.some(a => a.id === id)) {
      console.warn(`⚠️  Assignment with ID "${id}" already exists. Skipping.`);
    } else {
      config.assignments.push(assignment);
      
      // Write updated config
      fs.writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2) + '\n');
      console.log('\n✅ Assignment added to config.json');
      console.log(JSON.stringify(assignment, null, 2));
    }

    rl.close();
  } catch (error) {
    console.error('❌ Error:', error.message);
    rl.close();
    process.exit(1);
  }
}

main();
