import fs from 'fs';
import path from 'path';
import { Project, defaultProjects } from './projects';

const dataFilePath = path.join(process.cwd(), 'data', 'projects.json');

export function getProjects(): Project[] {
  try {
    if (!fs.existsSync(dataFilePath)) {
      const dataDir = path.dirname(dataFilePath);
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      fs.writeFileSync(dataFilePath, JSON.stringify(defaultProjects, null, 2), 'utf-8');
      return defaultProjects;
    }
    const raw = fs.readFileSync(dataFilePath, 'utf-8');
    return JSON.parse(raw);
  } catch (error) {
    console.error('Error reading projects:', error);
    return defaultProjects;
  }
}

export function saveProjects(projects: Project[]): boolean {
  try {
    const dataDir = path.dirname(dataFilePath);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    fs.writeFileSync(dataFilePath, JSON.stringify(projects, null, 2), 'utf-8');
    return true;
  } catch (error) {
    console.error('Error saving projects:', error);
    return false;
  }
}
