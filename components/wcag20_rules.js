const RuleInfo = {
  'area-alt': {
    ruleId: 'area-alt',
    description: 'Ensures <area> elements of image maps have alternate text',
    help: 'Active <area> elements must have alternate text',
    helpUrl: 'https://dequeuniversity.com/rules/axe/4.6/area-alt?application=axeAPI',
    tags: [
      'cat.text-alternatives',
      'wcag2a',
      'wcag244',
      'wcag412',
      'section508',
      'section508.22.a',
      'ACT'
    ],
    actIds: [ 'c487ae' ]
  },
  'aria-allowed-attr': {
    ruleId: 'aria-allowed-attr',
    description: "Ensures ARIA attributes are allowed for an element's role",
    help: 'Elements must only use allowed ARIA attributes',
    helpUrl: 'https://dequeuniversity.com/rules/axe/4.6/aria-allowed-attr?application=axeAPI',
    tags: [ 'cat.aria', 'wcag2a', 'wcag412' ],
    actIds: [ '5c01ea' ]
  },
  'aria-command-name': {
    ruleId: 'aria-command-name',
    description: 'Ensures every ARIA button, link and menuitem has an accessible name',
    help: 'ARIA commands must have an accessible name',
    helpUrl: 'https://dequeuniversity.com/rules/axe/4.6/aria-command-name?application=axeAPI',
    tags: [ 'cat.aria', 'wcag2a', 'wcag412', 'ACT' ],
    actIds: [ '97a4e1' ]
  },
  'aria-hidden-body': {
    ruleId: 'aria-hidden-body',
    description: "Ensures aria-hidden='true' is not present on the document body.",
    help: "aria-hidden='true' must not be present on the document body",
    helpUrl: 'https://dequeuniversity.com/rules/axe/4.6/aria-hidden-body?application=axeAPI',
    tags: [ 'cat.aria', 'wcag2a', 'wcag412' ],
    actIds: undefined
  },
  'aria-hidden-focus': {
    ruleId: 'aria-hidden-focus',
    description: 'Ensures aria-hidden elements are not focusable nor contain focusable elements',
    help: 'ARIA hidden element must not be focusable or contain focusable elements',
    helpUrl: 'https://dequeuniversity.com/rules/axe/4.6/aria-hidden-focus?application=axeAPI',
    tags: [ 'cat.name-role-value', 'wcag2a', 'wcag412' ],
    actIds: [ '6cfa84' ]
  },
  'aria-input-field-name': {
    ruleId: 'aria-input-field-name',
    description: 'Ensures every ARIA input field has an accessible name',
    help: 'ARIA input fields must have an accessible name',
    helpUrl: 'https://dequeuniversity.com/rules/axe/4.6/aria-input-field-name?application=axeAPI',
    tags: [ 'cat.aria', 'wcag2a', 'wcag412', 'ACT' ],
    actIds: [ 'e086e5' ]
  },
  'aria-meter-name': {
    ruleId: 'aria-meter-name',
    description: 'Ensures every ARIA meter node has an accessible name',
    help: 'ARIA meter nodes must have an accessible name',
    helpUrl: 'https://dequeuniversity.com/rules/axe/4.6/aria-meter-name?application=axeAPI',
    tags: [ 'cat.aria', 'wcag2a', 'wcag111' ],
    actIds: undefined
  },
  'aria-progressbar-name': {
    ruleId: 'aria-progressbar-name',
    description: 'Ensures every ARIA progressbar node has an accessible name',
    help: 'ARIA progressbar nodes must have an accessible name',
    helpUrl: 'https://dequeuniversity.com/rules/axe/4.6/aria-progressbar-name?application=axeAPI',
    tags: [ 'cat.aria', 'wcag2a', 'wcag111' ],
    actIds: undefined
  },
  'aria-required-attr': {
    ruleId: 'aria-required-attr',
    description: 'Ensures elements with ARIA roles have all required ARIA attributes',
    help: 'Required ARIA attributes must be provided',
    helpUrl: 'https://dequeuniversity.com/rules/axe/4.6/aria-required-attr?application=axeAPI',
    tags: [ 'cat.aria', 'wcag2a', 'wcag412' ],
    actIds: [ '4e8ab6' ]
  },
  'aria-required-children': {
    ruleId: 'aria-required-children',
    description: 'Ensures elements with an ARIA role that require child roles contain them',
    help: 'Certain ARIA roles must contain particular children',
    helpUrl: 'https://dequeuniversity.com/rules/axe/4.6/aria-required-children?application=axeAPI',
    tags: [ 'cat.aria', 'wcag2a', 'wcag131' ],
    actIds: [ 'bc4a75', 'ff89c9' ]
  },
  'aria-required-parent': {
    ruleId: 'aria-required-parent',
    description: 'Ensures elements with an ARIA role that require parent roles are contained by them',
    help: 'Certain ARIA roles must be contained by particular parents',
    helpUrl: 'https://dequeuniversity.com/rules/axe/4.6/aria-required-parent?application=axeAPI',
    tags: [ 'cat.aria', 'wcag2a', 'wcag131' ],
    actIds: [ 'ff89c9' ]
  },
  'aria-roledescription': {
    ruleId: 'aria-roledescription',
    description: 'Ensure aria-roledescription is only used on elements with an implicit or explicit role',
    help: 'aria-roledescription must be on elements with a semantic role',
    helpUrl: 'https://dequeuniversity.com/rules/axe/4.6/aria-roledescription?application=axeAPI',
    tags: [ 'cat.aria', 'wcag2a', 'wcag412' ],
    actIds: undefined
  },
  'aria-roles': {
    ruleId: 'aria-roles',
    description: 'Ensures all elements with a role attribute use a valid value',
    help: 'ARIA roles used must conform to valid values',
    helpUrl: 'https://dequeuniversity.com/rules/axe/4.6/aria-roles?application=axeAPI',
    tags: [ 'cat.aria', 'wcag2a', 'wcag412' ],
    actIds: [ '674b10' ]
  },
  'aria-toggle-field-name': {
    ruleId: 'aria-toggle-field-name',
    description: 'Ensures every ARIA toggle field has an accessible name',
    help: 'ARIA toggle fields must have an accessible name',
    helpUrl: 'https://dequeuniversity.com/rules/axe/4.6/aria-toggle-field-name?application=axeAPI',
    tags: [ 'cat.aria', 'wcag2a', 'wcag412', 'ACT' ],
    actIds: [ 'e086e5' ]
  },
  'aria-tooltip-name': {
    ruleId: 'aria-tooltip-name',
    description: 'Ensures every ARIA tooltip node has an accessible name',
    help: 'ARIA tooltip nodes must have an accessible name',
    helpUrl: 'https://dequeuniversity.com/rules/axe/4.6/aria-tooltip-name?application=axeAPI',
    tags: [ 'cat.aria', 'wcag2a', 'wcag412' ],
    actIds: undefined
  },
  'aria-valid-attr-value': {
    ruleId: 'aria-valid-attr-value',
    description: 'Ensures all ARIA attributes have valid values',
    help: 'ARIA attributes must conform to valid values',
    helpUrl: 'https://dequeuniversity.com/rules/axe/4.6/aria-valid-attr-value?application=axeAPI',
    tags: [ 'cat.aria', 'wcag2a', 'wcag412' ],
    actIds: [ '6a7281' ]
  },
  'aria-valid-attr': {
    ruleId: 'aria-valid-attr',
    description: 'Ensures attributes that begin with aria- are valid ARIA attributes',
    help: 'ARIA attributes must conform to valid names',
    helpUrl: 'https://dequeuniversity.com/rules/axe/4.6/aria-valid-attr?application=axeAPI',
    tags: [ 'cat.aria', 'wcag2a', 'wcag412' ],
    actIds: [ '5f99a7' ]
  },
  'audio-caption': {
    ruleId: 'audio-caption',
    description: 'Ensures <audio> elements have captions',
    help: '<audio> elements must have a captions track',
    helpUrl: 'https://dequeuniversity.com/rules/axe/4.6/audio-caption?application=axeAPI',
    tags: [
      'cat.time-and-media',
      'wcag2a',
      'wcag121',
      'section508',
      'section508.22.a'
    ],
    actIds: [ '2eb176', 'afb423' ]
  },
  blink: {
    ruleId: 'blink',
    description: 'Ensures <blink> elements are not used',
    help: '<blink> elements are deprecated and must not be used',
    helpUrl: 'https://dequeuniversity.com/rules/axe/4.6/blink?application=axeAPI',
    tags: [
      'cat.time-and-media',
      'wcag2a',
      'wcag222',
      'section508',
      'section508.22.j'
    ],
    actIds: undefined
  },
  'button-name': {
    ruleId: 'button-name',
    description: 'Ensures buttons have discernible text',
    help: 'Buttons must have discernible text',
    helpUrl: 'https://dequeuniversity.com/rules/axe/4.6/button-name?application=axeAPI',
    tags: [
      'cat.name-role-value',
      'wcag2a',
      'wcag412',
      'section508',
      'section508.22.a',
      'ACT'
    ],
    actIds: [ '97a4e1', 'm6b1q3' ]
  },
  bypass: {
    ruleId: 'bypass',
    description: 'Ensures each page has at least one mechanism for a user to bypass navigation and jump straight to the content',
    help: 'Page must have means to bypass repeated blocks',
    helpUrl: 'https://dequeuniversity.com/rules/axe/4.6/bypass?application=axeAPI',
    tags: [
      'cat.keyboard',
      'wcag2a',
      'wcag241',
      'section508',
      'section508.22.o'
    ],
    actIds: [ 'cf77f2', '047fe0', 'b40fd1', '3e12e1', 'ye5d6e' ]
  },
  'color-contrast-enhanced': {
    ruleId: 'color-contrast-enhanced',
    description: 'Ensures the contrast between foreground and background colors meets WCAG 2 AAA contrast ratio thresholds',
    help: 'Elements must have sufficient color contrast',
    helpUrl: 'https://dequeuniversity.com/rules/axe/4.6/color-contrast-enhanced?application=axeAPI',
    tags: [ 'cat.color', 'wcag2aaa', 'wcag146', 'ACT' ],
    actIds: [ '09o5cg' ]
  },
  'color-contrast': {
    ruleId: 'color-contrast',
    description: 'Ensures the contrast between foreground and background colors meets WCAG 2 AA contrast ratio thresholds',
    help: 'Elements must have sufficient color contrast',
    helpUrl: 'https://dequeuniversity.com/rules/axe/4.6/color-contrast?application=axeAPI',
    tags: [ 'cat.color', 'wcag2aa', 'wcag143', 'ACT' ],
    actIds: [ 'afw4f7', '09o5cg' ]
  },
  'definition-list': {
    ruleId: 'definition-list',
    description: 'Ensures <dl> elements are structured correctly',
    help: '<dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements',
    helpUrl: 'https://dequeuniversity.com/rules/axe/4.6/definition-list?application=axeAPI',
    tags: [ 'cat.structure', 'wcag2a', 'wcag131' ],
    actIds: undefined
  },
  dlitem: {
    ruleId: 'dlitem',
    description: 'Ensures <dt> and <dd> elements are contained by a <dl>',
    help: '<dt> and <dd> elements must be contained by a <dl>',
    helpUrl: 'https://dequeuniversity.com/rules/axe/4.6/dlitem?application=axeAPI',
    tags: [ 'cat.structure', 'wcag2a', 'wcag131' ],
    actIds: undefined
  },
  'document-title': {
    ruleId: 'document-title',
    description: 'Ensures each HTML document contains a non-empty <title> element',
    help: 'Documents must have <title> element to aid in navigation',
    helpUrl: 'https://dequeuniversity.com/rules/axe/4.6/document-title?application=axeAPI',
    tags: [ 'cat.text-alternatives', 'wcag2a', 'wcag242', 'ACT' ],
    actIds: [ '2779a5' ]
  },
  'duplicate-id-active': {
    ruleId: 'duplicate-id-active',
    description: 'Ensures every id attribute value of active elements is unique',
    help: 'IDs of active elements must be unique',
    helpUrl: 'https://dequeuniversity.com/rules/axe/4.6/duplicate-id-active?application=axeAPI',
    tags: [ 'cat.parsing', 'wcag2a', 'wcag411' ],
    actIds: [ '3ea0c8' ]
  },
  'duplicate-id-aria': {
    ruleId: 'duplicate-id-aria',
    description: 'Ensures every id attribute value used in ARIA and in labels is unique',
    help: 'IDs used in ARIA and labels must be unique',
    helpUrl: 'https://dequeuniversity.com/rules/axe/4.6/duplicate-id-aria?application=axeAPI',
    tags: [ 'cat.parsing', 'wcag2a', 'wcag411' ],
    actIds: [ '3ea0c8' ]
  },
  'duplicate-id': {
    ruleId: 'duplicate-id',
    description: 'Ensures every id attribute value is unique',
    help: 'id attribute value must be unique',
    helpUrl: 'https://dequeuniversity.com/rules/axe/4.6/duplicate-id?application=axeAPI',
    tags: [ 'cat.parsing', 'wcag2a', 'wcag411' ],
    actIds: [ '3ea0c8' ]
  },
  'form-field-multiple-labels': {
    ruleId: 'form-field-multiple-labels',
    description: 'Ensures form field does not have multiple label elements',
    help: 'Form field must not have multiple label elements',
    helpUrl: 'https://dequeuniversity.com/rules/axe/4.6/form-field-multiple-labels?application=axeAPI',
    tags: [ 'cat.forms', 'wcag2a', 'wcag332' ],
    actIds: undefined
  },
  'frame-focusable-content': {
    ruleId: 'frame-focusable-content',
    description: 'Ensures <frame> and <iframe> elements with focusable content do not have tabindex=-1',
    help: 'Frames with focusable content must not have tabindex=-1',
    helpUrl: 'https://dequeuniversity.com/rules/axe/4.6/frame-focusable-content?application=axeAPI',
    tags: [ 'cat.keyboard', 'wcag2a', 'wcag211' ],
    actIds: [ 'akn7bn' ]
  },
  'frame-title-unique': {
    ruleId: 'frame-title-unique',
    description: 'Ensures <iframe> and <frame> elements contain a unique title attribute',
    help: 'Frames must have a unique title attribute',
    helpUrl: 'https://dequeuniversity.com/rules/axe/4.6/frame-title-unique?application=axeAPI',
    tags: [ 'cat.text-alternatives', 'wcag412', 'wcag2a' ],
    actIds: [ '4b1c6c' ]
  },
  'frame-title': {
    ruleId: 'frame-title',
    description: 'Ensures <iframe> and <frame> elements have an accessible name',
    help: 'Frames must have an accessible name',
    helpUrl: 'https://dequeuniversity.com/rules/axe/4.6/frame-title?application=axeAPI',
    tags: [
      'cat.text-alternatives',
      'wcag2a',
      'wcag412',
      'section508',
      'section508.22.i'
    ],
    actIds: [ 'cae760' ]
  },
  'html-has-lang': {
    ruleId: 'html-has-lang',
    description: 'Ensures every HTML document has a lang attribute',
    help: '<html> element must have a lang attribute',
    helpUrl: 'https://dequeuniversity.com/rules/axe/4.6/html-has-lang?application=axeAPI',
    tags: [ 'cat.language', 'wcag2a', 'wcag311', 'ACT' ],
    actIds: [ 'b5c3f8' ]
  },
  'html-lang-valid': {
    ruleId: 'html-lang-valid',
    description: 'Ensures the lang attribute of the <html> element has a valid value',
    help: '<html> element must have a valid value for the lang attribute',
    helpUrl: 'https://dequeuniversity.com/rules/axe/4.6/html-lang-valid?application=axeAPI',
    tags: [ 'cat.language', 'wcag2a', 'wcag311', 'ACT' ],
    actIds: [ 'bf051a' ]
  },
  'html-xml-lang-mismatch': {
    ruleId: 'html-xml-lang-mismatch',
    description: 'Ensure that HTML elements with both valid lang and xml:lang attributes agree on the base language of the page',
    help: 'HTML elements with lang and xml:lang must have the same base language',
    helpUrl: 'https://dequeuniversity.com/rules/axe/4.6/html-xml-lang-mismatch?application=axeAPI',
    tags: [ 'cat.language', 'wcag2a', 'wcag311', 'ACT' ],
    actIds: [ '5b7ae0' ]
  },
  'identical-links-same-purpose': {
    ruleId: 'identical-links-same-purpose',
    description: 'Ensure that links with the same accessible name serve a similar purpose',
    help: 'Links with the same name must have a similar purpose',
    helpUrl: 'https://dequeuniversity.com/rules/axe/4.6/identical-links-same-purpose?application=axeAPI',
    tags: [ 'cat.semantics', 'wcag2aaa', 'wcag249' ],
    actIds: [ 'b20e66' ]
  },
  'image-alt': {
    ruleId: 'image-alt',
    description: 'Ensures <img> elements have alternate text or a role of none or presentation',
    help: 'Images must have alternate text',
    helpUrl: 'https://dequeuniversity.com/rules/axe/4.6/image-alt?application=axeAPI',
    tags: [
      'cat.text-alternatives',
      'wcag2a',
      'wcag111',
      'section508',
      'section508.22.a',
      'ACT'
    ],
    actIds: [ '23a2a8' ]
  },
  'input-button-name': {
    ruleId: 'input-button-name',
    description: 'Ensures input buttons have discernible text',
    help: 'Input buttons must have discernible text',
    helpUrl: 'https://dequeuniversity.com/rules/axe/4.6/input-button-name?application=axeAPI',
    tags: [
      'cat.name-role-value',
      'wcag2a',
      'wcag412',
      'section508',
      'section508.22.a',
      'ACT'
    ],
    actIds: [ '97a4e1' ]
  },
  'input-image-alt': {
    ruleId: 'input-image-alt',
    description: 'Ensures <input type="image"> elements have alternate text',
    help: 'Image buttons must have alternate text',
    helpUrl: 'https://dequeuniversity.com/rules/axe/4.6/input-image-alt?application=axeAPI',
    tags: [
      'cat.text-alternatives',
      'wcag2a',
      'wcag111',
      'wcag412',
      'section508',
      'section508.22.a',
      'ACT'
    ],
    actIds: [ '59796f' ]
  },
  label: {
    ruleId: 'label',
    description: 'Ensures every form element has a label',
    help: 'Form elements must have labels',
    helpUrl: 'https://dequeuniversity.com/rules/axe/4.6/label?application=axeAPI',
    tags: [
      'cat.forms',
      'wcag2a',
      'wcag412',
      'section508',
      'section508.22.n',
      'ACT'
    ],
    actIds: [ 'e086e5' ]
  },
  'link-in-text-block': {
    ruleId: 'link-in-text-block',
    description: 'Ensure links are distinguished from surrounding text in a way that does not rely on color',
    help: 'Links must be distinguishable without relying on color',
    helpUrl: 'https://dequeuniversity.com/rules/axe/4.6/link-in-text-block?application=axeAPI',
    tags: [ 'cat.color', 'wcag2a', 'wcag141' ],
    actIds: undefined
  },
  'link-name': {
    ruleId: 'link-name',
    description: 'Ensures links have discernible text',
    help: 'Links must have discernible text',
    helpUrl: 'https://dequeuniversity.com/rules/axe/4.6/link-name?application=axeAPI',
    tags: [
      'cat.name-role-value',
      'wcag2a',
      'wcag412',
      'wcag244',
      'section508',
      'section508.22.a',
      'ACT'
    ],
    actIds: [ 'c487ae' ]
  },
  list: {
    ruleId: 'list',
    description: 'Ensures that lists are structured correctly',
    help: '<ul> and <ol> must only directly contain <li>, <script> or <template> elements',
    helpUrl: 'https://dequeuniversity.com/rules/axe/4.6/list?application=axeAPI',
    tags: [ 'cat.structure', 'wcag2a', 'wcag131' ],
    actIds: undefined
  },
  listitem: {
    ruleId: 'listitem',
    description: 'Ensures <li> elements are used semantically',
    help: '<li> elements must be contained in a <ul> or <ol>',
    helpUrl: 'https://dequeuniversity.com/rules/axe/4.6/listitem?application=axeAPI',
    tags: [ 'cat.structure', 'wcag2a', 'wcag131' ],
    actIds: undefined
  },
  marquee: {
    ruleId: 'marquee',
    description: 'Ensures <marquee> elements are not used',
    help: '<marquee> elements are deprecated and must not be used',
    helpUrl: 'https://dequeuniversity.com/rules/axe/4.6/marquee?application=axeAPI',
    tags: [ 'cat.parsing', 'wcag2a', 'wcag222' ],
    actIds: undefined
  },
  'meta-refresh-no-exceptions': {
    ruleId: 'meta-refresh-no-exceptions',
    description: 'Ensures <meta http-equiv="refresh"> is not used for delayed refresh',
    help: 'Delayed refresh must not be used',
    helpUrl: 'https://dequeuniversity.com/rules/axe/4.6/meta-refresh-no-exceptions?application=axeAPI',
    tags: [ 'cat.time-and-media', 'wcag2aaa', 'wcag224', 'wcag325' ],
    actIds: [ 'bisz58' ]
  },
  'meta-refresh': {
    ruleId: 'meta-refresh',
    description: 'Ensures <meta http-equiv="refresh"> is not used for delayed refresh',
    help: 'Delayed refresh under 20 hours must not be used',
    helpUrl: 'https://dequeuniversity.com/rules/axe/4.6/meta-refresh?application=axeAPI',
    tags: [ 'cat.time-and-media', 'wcag2a', 'wcag221' ],
    actIds: [ 'bc659a', 'bisz58' ]
  },
  'meta-viewport': {
    ruleId: 'meta-viewport',
    description: 'Ensures <meta name="viewport"> does not disable text scaling and zooming',
    help: 'Zooming and scaling must not be disabled',
    helpUrl: 'https://dequeuniversity.com/rules/axe/4.6/meta-viewport?application=axeAPI',
    tags: [ 'cat.sensory-and-visual-cues', 'wcag2aa', 'wcag144', 'ACT' ],
    actIds: [ 'b4f0c3' ]
  },
  'nested-interactive': {
    ruleId: 'nested-interactive',
    description: 'Ensures interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies',
    help: 'Interactive controls must not be nested',
    helpUrl: 'https://dequeuniversity.com/rules/axe/4.6/nested-interactive?application=axeAPI',
    tags: [ 'cat.keyboard', 'wcag2a', 'wcag412' ],
    actIds: [ '307n5z' ]
  },
  'no-autoplay-audio': {
    ruleId: 'no-autoplay-audio',
    description: 'Ensures <video> or <audio> elements do not autoplay audio for more than 3 seconds without a control mechanism to stop or mute the audio',
    help: '<video> or <audio> elements must not play automatically',
    helpUrl: 'https://dequeuniversity.com/rules/axe/4.6/no-autoplay-audio?application=axeAPI',
    tags: [ 'cat.time-and-media', 'wcag2a', 'wcag142', 'ACT' ],
    actIds: [ '80f0bf' ]
  },
  'object-alt': {
    ruleId: 'object-alt',
    description: 'Ensures <object> elements have alternate text',
    help: '<object> elements must have alternate text',
    helpUrl: 'https://dequeuniversity.com/rules/axe/4.6/object-alt?application=axeAPI',
    tags: [
      'cat.text-alternatives',
      'wcag2a',
      'wcag111',
      'section508',
      'section508.22.a'
    ],
    actIds: [ '8fc3b6' ]
  },
  'p-as-heading': {
    ruleId: 'p-as-heading',
    description: 'Ensure bold, italic text and font-size is not used to style <p> elements as a heading',
    help: 'Styled <p> elements must not be used as headings',
    helpUrl: 'https://dequeuniversity.com/rules/axe/4.6/p-as-heading?application=axeAPI',
    tags: [ 'cat.semantics', 'wcag2a', 'wcag131', 'experimental' ],
    actIds: undefined
  },
  'role-img-alt': {
    ruleId: 'role-img-alt',
    description: "Ensures [role='img'] elements have alternate text",
    help: "[role='img'] elements must have an alternative text",
    helpUrl: 'https://dequeuniversity.com/rules/axe/4.6/role-img-alt?application=axeAPI',
    tags: [
      'cat.text-alternatives',
      'wcag2a',
      'wcag111',
      'section508',
      'section508.22.a',
      'ACT'
    ],
    actIds: [ '23a2a8' ]
  },
  'scrollable-region-focusable': {
    ruleId: 'scrollable-region-focusable',
    description: 'Ensure elements that have scrollable content are accessible by keyboard',
    help: 'Scrollable region must have keyboard access',
    helpUrl: 'https://dequeuniversity.com/rules/axe/4.6/scrollable-region-focusable?application=axeAPI',
    tags: [ 'cat.keyboard', 'wcag2a', 'wcag211' ],
    actIds: [ '0ssw9k' ]
  },
  'select-name': {
    ruleId: 'select-name',
    description: 'Ensures select element has an accessible name',
    help: 'Select element must have an accessible name',
    helpUrl: 'https://dequeuniversity.com/rules/axe/4.6/select-name?application=axeAPI',
    tags: [
      'cat.forms',
      'wcag2a',
      'wcag412',
      'section508',
      'section508.22.n',
      'ACT'
    ],
    actIds: [ 'e086e5' ]
  },
  'server-side-image-map': {
    ruleId: 'server-side-image-map',
    description: 'Ensures that server-side image maps are not used',
    help: 'Server-side image maps must not be used',
    helpUrl: 'https://dequeuniversity.com/rules/axe/4.6/server-side-image-map?application=axeAPI',
    tags: [
      'cat.text-alternatives',
      'wcag2a',
      'wcag211',
      'section508',
      'section508.22.f'
    ],
    actIds: undefined
  },
  'svg-img-alt': {
    ruleId: 'svg-img-alt',
    description: 'Ensures <svg> elements with an img, graphics-document or graphics-symbol role have an accessible text',
    help: '<svg> elements with an img role must have an alternative text',
    helpUrl: 'https://dequeuniversity.com/rules/axe/4.6/svg-img-alt?application=axeAPI',
    tags: [
      'cat.text-alternatives',
      'wcag2a',
      'wcag111',
      'section508',
      'section508.22.a',
      'ACT'
    ],
    actIds: [ '7d6734' ]
  },
  'table-fake-caption': {
    ruleId: 'table-fake-caption',
    description: 'Ensure that tables with a caption use the <caption> element.',
    help: 'Data or header cells must not be used to give caption to a data table.',
    helpUrl: 'https://dequeuniversity.com/rules/axe/4.6/table-fake-caption?application=axeAPI',
    tags: [
      'cat.tables',
      'experimental',
      'wcag2a',
      'wcag131',
      'section508',
      'section508.22.g'
    ],
    actIds: undefined
  },
  'td-has-header': {
    ruleId: 'td-has-header',
    description: 'Ensure that each non-empty data cell in a <table> larger than 3 by 3  has one or more table headers',
    help: 'Non-empty <td> elements in larger <table> must have an associated table header',
    helpUrl: 'https://dequeuniversity.com/rules/axe/4.6/td-has-header?application=axeAPI',
    tags: [
      'cat.tables',
      'experimental',
      'wcag2a',
      'wcag131',
      'section508',
      'section508.22.g'
    ],
    actIds: undefined
  },
  'td-headers-attr': {
    ruleId: 'td-headers-attr',
    description: 'Ensure that each cell in a table that uses the headers attribute refers only to other cells in that table',
    help: 'Table cells that use the headers attribute must only refer to cells in the same table',
    helpUrl: 'https://dequeuniversity.com/rules/axe/4.6/td-headers-attr?application=axeAPI',
    tags: [
      'cat.tables',
      'wcag2a',
      'wcag131',
      'section508',
      'section508.22.g'
    ],
    actIds: [ 'a25f45' ]
  },
  'th-has-data-cells': {
    ruleId: 'th-has-data-cells',
    description: 'Ensure that <th> elements and elements with role=columnheader/rowheader have data cells they describe',
    help: 'Table headers in a data table must refer to data cells',
    helpUrl: 'https://dequeuniversity.com/rules/axe/4.6/th-has-data-cells?application=axeAPI',
    tags: [
      'cat.tables',
      'wcag2a',
      'wcag131',
      'section508',
      'section508.22.g'
    ],
    actIds: [ 'd0f69e' ]
  },
  'valid-lang': {
    ruleId: 'valid-lang',
    description: 'Ensures lang attributes have valid values',
    help: 'lang attribute must have a valid value',
    helpUrl: 'https://dequeuniversity.com/rules/axe/4.6/valid-lang?application=axeAPI',
    tags: [ 'cat.language', 'wcag2aa', 'wcag312', 'ACT' ],
    actIds: [ 'de46e4' ]
  },
  'video-caption': {
    ruleId: 'video-caption',
    description: 'Ensures <video> elements have captions',
    help: '<video> elements must have captions',
    helpUrl: 'https://dequeuniversity.com/rules/axe/4.6/video-caption?application=axeAPI',
    tags: [
      'cat.text-alternatives',
      'wcag2a',
      'wcag122',
      'section508',
      'section508.22.a'
    ],
    actIds: [ 'eac66b' ]
  }
}

export default RuleInfo