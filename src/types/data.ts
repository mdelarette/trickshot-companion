export type LocalizedText = {
  en: string;
  fr: string;
}

export type Position = 'center' | 'winger' | 'defenseman' | 'goalie';

export type Attribute = {
  Name: string;
  Position: Position;
  Size: number;
  Speed: number;
  Text: LocalizedText;
}

export type Arena = {
  Name: string;
  Attribute_Center: string;
  Attribute_Winger: string;
  Attribute_Defenseman: string;
  Attribute_Goalie: string;
  Modifier: LocalizedText;
  center?: Attribute;
  winger?: Attribute;
  defenseman?: Attribute;
  goalie?: Attribute;
}

export type GameData = {
  Arenas: Arena[];
  Attributes: Attribute[];
}

export type SupportedLanguage = 'en' | 'fr' | 'fr-FR' | 'fr-CA';

export function getLocalizedText(text: LocalizedText, language: string): string {
  if (language.startsWith('fr')) {
    return text.fr;
  }
  return text.en;
}
