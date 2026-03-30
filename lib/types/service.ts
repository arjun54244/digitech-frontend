export interface Service {
  id: string;
  title: string;
  slug: string;
  short_description: string | null;
  content: string | null;
  image_url: string | null;
  image_alt: string | null;
  meta_title: string | null;
  meta_description: string | null;
  meta_keywords: string[];
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export type ServiceFormValues = {
  title: string;
  slug: string;
  short_description: string;
  content: string;
  image_url: string;
  image_alt: string;
  meta_title: string;
  meta_description: string;
  meta_keywords: string[];
};
