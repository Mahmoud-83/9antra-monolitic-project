export interface ICours {
  id: number;
  titre?: string | null;
  description?: string | null;
  image?: string | null;
  imageContentType?: string | null;
}

export type NewCours = Omit<ICours, 'id'> & { id: null };
