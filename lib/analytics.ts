// Analytics Integration
// Uncomment and configure when ready to deploy

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || '';

// Google Analytics pageview
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Google Analytics event
export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track button clicks
export const trackButtonClick = (buttonName: string) => {
  event({
    action: 'click',
    category: 'Button',
    label: buttonName,
  });
};

// Track form submissions
export const trackFormSubmit = (formName: string) => {
  event({
    action: 'submit',
    category: 'Form',
    label: formName,
  });
};

// Track project views
export const trackProjectView = (projectName: string) => {
  event({
    action: 'view',
    category: 'Project',
    label: projectName,
  });
};

// Track external link clicks
export const trackExternalLink = (url: string) => {
  event({
    action: 'click',
    category: 'External Link',
    label: url,
  });
};
