import { SimpleTranslationEntries } from "#app/interfaces/locales";

export const abilityTriggers: SimpleTranslationEntries = {
  "blockRecoilDamage" : "{{pokemonName}} 的 {{abilityName}}\n抵消了反作用力！",
  "badDreams": "{{pokemonName}} 被折磨著！",
  "windPowerCharged": "受 {{moveName}} 的影響， {{pokemonName}} 提升了能力！",
  "iceFaceAvoidedDamage": "{{pokemonName}} 因為 {{abilityName}}\n避免了傷害！"
} as const;
