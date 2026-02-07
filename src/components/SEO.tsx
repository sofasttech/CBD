import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  type?: string;
}

const defaultSEO = {
  title: 'CBD Panel and Paint - Expert Panel Beaters Auckland | NZ Auto Body Repair',
  description: 'Leading panel beaters in Auckland, New Zealand. Specialising in panel beating, auto body repair, paint refinishing, dent removal & insurance repairs. 25+ years experience. Free quotes.',
  keywords: 'panel beaters Auckland, panel beaters NZ, panel beating Auckland, auto body repair Auckland, car paint Auckland, dent removal Auckland, smash repairs Auckland, insurance repairs NZ',
  ogImage: 'https://cbdpanelandpaint.co.nz/newbgnologo.png',
  type: 'website'
};

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage,
  type = 'website'
}) => {
  const location = useLocation();
  
  const seoTitle = title || defaultSEO.title;
  const seoDescription = description || defaultSEO.description;
  const seoKeywords = keywords || defaultSEO.keywords;
  const seoImage = ogImage || defaultSEO.ogImage;
  const fullUrl = canonicalUrl || `https://cbdpanelandpaint.co.nz${location.pathname}`;

  useEffect(() => {
    // Update title
    document.title = seoTitle;

    // Update or create meta tags
    const updateMeta = (name: string, content: string, property = false) => {
      const attribute = property ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Standard meta tags
    updateMeta('description', seoDescription);
    updateMeta('keywords', seoKeywords);

    // Open Graph
    updateMeta('og:title', seoTitle, true);
    updateMeta('og:description', seoDescription, true);
    updateMeta('og:type', type, true);
    updateMeta('og:url', fullUrl, true);
    updateMeta('og:image', seoImage, true);

    // Twitter Card
    updateMeta('twitter:title', seoTitle);
    updateMeta('twitter:description', seoDescription);
    updateMeta('twitter:image', seoImage);
    updateMeta('twitter:card', 'summary_large_image');

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = fullUrl;

  }, [seoTitle, seoDescription, seoKeywords, seoImage, fullUrl, type]);

  return null;
};
