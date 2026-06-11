#!/usr/bin/env node

/**
 * Script to add assignment files and attachments
 * 
 * Usage: node add-attachment.js
 * 
 * This script will:
 * 1. Create assignment folder structure
 * 2. Copy starter code template
 * 3. Create README.md from template
 * 4. Optionally add data files
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const ASSIGNMENTS_DIR = path.join(__dirname, '../../..', 'assignments');
const TEMPLATE_PATH = path.join(__dirname, '../../..', 'templates', 'assignment-template.md');

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
    console.log('📎 Assignment File Creator\n');

    const assignmentName = await question('Assignment folder name (kebab-case): ');
    const assignmentPath = path.join(ASSIGNMENTS_DIR, assignmentName);

    // Check if assignment already exists
    if (fs.existsSync(assignmentPath)) {
      console.error(`❌ Assignment folder already exists: ${assignmentPath}`);
      process.exit(1);
    }

    // Create assignment directory
    fs.mkdirSync(assignmentPath, { recursive: true });
    console.log(`✅ Created directory: ${assignmentPath}`);

    // Create README.md from template
    if (fs.existsSync(TEMPLATE_PATH)) {
      const template = fs.readFileSync(TEMPLATE_PATH, 'utf8');
      const readmePath = path.join(assignmentPath, 'README.md');
      fs.writeFileSync(readmePath, template);
      console.log(`✅ Created README.md from template`);
    } else {
      console.warn(`⚠️  Template not found. Skipping README.md creation.`);
    }

    // Create starter code
    const starterCodePath = path.join(assignmentPath, 'starter-code.py');
    const starterCode = `"""
Starter code for assignment

TODO: Add your implementation here
"""

def main():
    """Main entry point for the program"""
    pass

if __name__ == "__main__":
    main()
`;
    fs.writeFileSync(starterCodePath, starterCode);
    console.log(`✅ Created starter-code.py`);

    // Ask about additional files
    const addData = await question('Add data.csv file? (y/n): ');
    if (addData.toLowerCase() === 'y') {
      const dataPath = path.join(assignmentPath, 'data.csv');
      fs.writeFileSync(dataPath, '# Add your CSV data here\n');
      console.log(`✅ Created data.csv`);
    }

    console.log('\n✅ Assignment structure created successfully!');
    console.log(`📁 Assignment location: ${assignmentPath}`);
    console.log('\n📝 Next steps:');
    console.log('1. Edit README.md with assignment details');
    console.log('2. Update starter-code.py with starter code');
    console.log('3. Run update-config.js to register the assignment');

    rl.close();
  } catch (error) {
    console.error('❌ Error:', error.message);
    rl.close();
    process.exit(1);
  }
}

main();
