export interface SiteSettings {
  showEnterpriseMonorepos: boolean;
  showPublishedApps: boolean;
  showCrossPlatform: boolean;
  showBackendMicroservices: boolean;
  portfolioProjectView: 'all' | 'featured_only'; // Whether homepage defaults to all content or featured work only
  showFeaturedSectionSeparation: boolean; // Whether to visually separate or spotlight featured work
}

export const defaultSettings: SiteSettings = {
  showEnterpriseMonorepos: false,
  showPublishedApps: false,
  showCrossPlatform: true,
  showBackendMicroservices: true,
  portfolioProjectView: 'all',
  showFeaturedSectionSeparation: true,
};
