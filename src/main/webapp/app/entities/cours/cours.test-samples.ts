import { ICours, NewCours } from './cours.model';

export const sampleWithRequiredData: ICours = {
  id: 60788,
  titre: 'Account SMTP',
  description: 'parsing Georgia',
  image: '../fake-data/blob/hipster.png',
  imageContentType: 'unknown',
};

export const sampleWithPartialData: ICours = {
  id: 10519,
  titre: 'programming',
  description: 'protocol',
  image: '../fake-data/blob/hipster.png',
  imageContentType: 'unknown',
};

export const sampleWithFullData: ICours = {
  id: 12922,
  titre: 'feed Lodge function',
  description: 'Strategist Rustic',
  image: '../fake-data/blob/hipster.png',
  imageContentType: 'unknown',
};

export const sampleWithNewData: NewCours = {
  titre: 'Cheese',
  description: 'bypass Computers Cambridgeshire',
  image: '../fake-data/blob/hipster.png',
  imageContentType: 'unknown',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
