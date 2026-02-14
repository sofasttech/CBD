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
  keywords: 'panel beaters Auckland, panel beating, smash repairs, collision repair, auto body shop, car painter, spray painter, mechanic Auckland, car service, WOF Auckland, panel beaters Grey Lynn, mechanics Grey Lynn, car service Ponsonby, auto repair Kingsland, panel beaters Mt Eden, West Auckland panel beaters, Auckland CBD car repairs, cheap panel beaters Auckland, affordable collision repair, best value panel beater, insurance approved repairer, private work welcome, free quote panel beating, paintless dent removal, PDR Auckland, bumper repairs, plastic welding, chassis straightening, chassis machine, rust repairs, rust removal for WOF, full car respray, custom paint, restoration projects, scratch removal, cut and polish, WOF check, warrant of fitness, car servicing, oil change, brake pads replacement, clutch repairs, transmission service, cambelt replacement, timing chain, head gasket repair, radiator flush, car battery replacement, tyre puncture repair, wheel alignment 3D, suspension noise diagnostics, shock absorbers, CV joints, power steering repairs, auto electrical diagnostics, check engine light, caravan repairs Auckland, caravan waterproofing, leak detection, caravan awning repairs, boat trailer repairs, trailer WOF, trailer rust repairs, boat trailer welding, trailer axle replacement, brake controllers installation, self-containment modifications, European car repairs, Japanese import repairs, fleet maintenance, commercial vehicle repairs, light truck servicing, hybrid car servicing, electric vehicle body repairs, car painting, accident repair',
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
