import { Tooltips } from '@rohberg/volto-slate-glossary/components';

const applyConfig = (config) => {
  // glossary tooltips
  config.settings.glossary.caseSensitive = false;
  config.settings.glossary.matchOnlyFirstOccurence = false;

  // Tooltips everywhere
  config.settings.appExtras = [
    ...config.settings.appExtras,
    {
      match: '/',
      component: Tooltips,
    },
  ];

  return config;
};

export default applyConfig;
