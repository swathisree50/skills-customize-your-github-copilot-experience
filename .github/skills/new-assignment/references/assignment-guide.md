# Assignment Creation Guide

## Assignment Structure

Each assignment should follow this directory structure:

```
assignments/[assignment-name]/
├── README.md          # Main assignment file (required)
├── starter-code.py    # Python starter code (required for Python assignments)
├── data.csv           # Optional data file (for data analysis)
└── resources/         # Optional additional resources
```

## README.md Format

Follow the template structure with:

1. **Title**: `# 📘 Assignment: [Assignment Title]`
2. **Objective**: Brief description of learning goals
3. **Tasks**: Multiple task sections with:
   - Task name with 🛠️ emoji
   - Description
   - Requirements (bulleted list)
   - Example usage or output

## Naming Conventions

- Use kebab-case for folder names: `my-assignment`, `data-analysis`
- Use descriptive, student-friendly names
- Match folder name in config.json

## Starter Code

- Should have comments guiding students
- Include `if __name__ == "__main__":` for Python files
- Provide basic structure or scaffolding
- Include TODO comments for areas to implement

## Config.json Entry

Each assignment needs an entry in config.json:

```json
{
  "id": "assignment-id",
  "title": "Assignment Title",
  "folder": "assignment-folder-name",
  "description": "Brief description",
  "difficulty": "beginner|intermediate|advanced",
  "tags": ["python", "basics"]
}
```

## Best Practices

- Keep assignments focused on one or two core concepts
- Provide clear, measurable requirements
- Include example outputs or usage
- Write student-friendly language (encouraging, clear)
- Test starter code before publishing
- Ensure all file paths in README match actual files
