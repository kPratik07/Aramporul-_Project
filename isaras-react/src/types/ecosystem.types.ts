/**
 * Ecosystem component types
 */

export interface TabContent {
  title: string;
  titleHighlight?: string;
  description: string;
  features: EcosystemFeature[];
  image: string;
  imageAlt: string;
}

export interface EcosystemFeature {
  icon: string;
  title: string;
  description: string;
}

export type TabIndex = 0 | 1 | 2;

export interface EcosystemProps {
  tabs?: TabContent[];
}

