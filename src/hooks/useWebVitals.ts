import { useEffect, useState } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB, type Metric } from 'web-vitals';

interface VitalsData {
  cls: number | null;
  inp: number | null;
  fcp: number | null;
  lcp: number | null;
  ttfb: number | null;
}

export const useWebVitals = () => {
  const [vitals, setVitals] = useState<VitalsData>({
    cls: null,
    inp: null,
    fcp: null,
    lcp: null,
    ttfb: null,
  });

  useEffect(() => {
    onCLS((metric: Metric) => {
      setVitals(prev => ({ ...prev, cls: metric.value }));
    });

    onINP((metric: Metric) => {
      setVitals(prev => ({ ...prev, inp: metric.value }));
    });

    onFCP((metric: Metric) => {
      setVitals(prev => ({ ...prev, fcp: metric.value }));
    });

    onLCP((metric: Metric) => {
      setVitals(prev => ({ ...prev, lcp: metric.value }));
    });

    onTTFB((metric: Metric) => {
      setVitals(prev => ({ ...prev, ttfb: metric.value }));
    });
  }, []);

  return vitals;
};
