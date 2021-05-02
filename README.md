### Volto Add-On @rohberg/volto-slate-glossary

## Add tooltips for glossary terms of [collective.glossary](https://github.com/collective/collective.glossary)

This is **work-in-progress**

Include in your project with

    import Tooltips from '@rohberg/volto-glossary/components';

    // All your imports required for the config here BEFORE this line
    import '@plone/volto/config';

    export default function applyConfig(config) {
        config.settings = {
            ...config.settings,
            appExtras: [
                ...config.settings.appExtras,
                {
                    match: '',
                    component: Tooltips,
                },
            ],
        };

        return config;
    }

Hack: Use the customized *serializeNodes* in *TextBlockView* instead of that from volto-slate. **TODO** Find a way to hook into rendering of blocks. A block tranformer is not appropriate as it manipulates the block data permanently. We do not want the blocks data to be untouched.

Install Plone Add-On [collective.glossary branch Plone5.2](https://github.com/collective/collective.glossary) in your backend.