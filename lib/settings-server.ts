import fs from 'fs';
import path from 'path';
import { SiteSettings, defaultSettings } from './settings';

const settingsFilePath = path.join(process.cwd(), 'data', 'settings.json');

export function getSettings(): SiteSettings {
  try {
    if (!fs.existsSync(settingsFilePath)) {
      const dataDir = path.dirname(settingsFilePath);
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      fs.writeFileSync(settingsFilePath, JSON.stringify(defaultSettings, null, 2), 'utf-8');
      return defaultSettings;
    }
    const raw = fs.readFileSync(settingsFilePath, 'utf-8');
    const parsed = JSON.parse(raw);
    return { ...defaultSettings, ...parsed };
  } catch (error) {
    console.error('Error reading settings:', error);
    return defaultSettings;
  }
}

export function saveSettings(settings: Partial<SiteSettings>): SiteSettings {
  try {
    const current = getSettings();
    const updated: SiteSettings = {
      ...current,
      ...settings,
    };
    const dataDir = path.dirname(settingsFilePath);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    fs.writeFileSync(settingsFilePath, JSON.stringify(updated, null, 2), 'utf-8');
    return updated;
  } catch (error) {
    console.error('Error saving settings:', error);
    return defaultSettings;
  }
}
