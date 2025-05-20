export const useAnalytics = () => {
  const trackEvent = (eventName: string, params?: Record<string, any>) => {
    if (window.gtag) {
      window.gtag('event', eventName, params);
    }
  };

  return { trackEvent };
};