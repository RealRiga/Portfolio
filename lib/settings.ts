export interface SiteSettings {
  showEnterpriseMonorepos: boolean;
  showPublishedApps: boolean;
  showCrossPlatform: boolean;
  showBackendMicroservices: boolean;
}

export const defaultSettings: SiteSettings = {
  showEnterpriseMonorepos: false, // Disabled/commented out by default per user request
  showPublishedApps: false, // Disabled/commented out by default per user request
  showCrossPlatform: true,
  showBackendMicroservices: true,
};
