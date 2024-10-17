export const usageInstructions = [
  {
    id: 'code-heading',
    code: `
  &lt;!-- Heading Styles --&gt;
  &lt;span class="fe-h1"&gt;Heading 1&lt;/span&gt;
  &lt;span class="fe-h2"&gt;Heading 2&lt;/span&gt;
  &lt;span class="fe-h3"&gt;Heading 3&lt;/span&gt;
  &lt;span class="fe-h4"&gt;Heading 4&lt;/span&gt;
  &lt;span class="fe-h5"&gt;Heading 5&lt;/span&gt;
  &lt;span class="fe-h6"&gt;Heading 6&lt;/span&gt;
        `,
  },
  {
    id: 'code-text-alignments',
    code: `
  &lt;!-- Text Alignments --&gt;
  &lt;span class="fe-text-left"&gt;Text Left&lt;/span&gt;
  &lt;span class="fe-text-center"&gt;Text Center&lt;/span&gt;
  &lt;span class="fe-text-right"&gt;Text Right&lt;/span&gt;
  &lt;span class="fe-text-justify"&gt;Text Justify&lt;/span&gt;
        `,
  },
  {
    id: 'code-text-colours',
    code: `
  &lt;!-- Text Colours --&gt;
  &lt;span class="fe-text-primary"&gt;Text Primary&lt;/span&gt;
  &lt;span class="fe-text-secondary fe-bg-dark"&gt;Text Secondary&lt;/span&gt;
  &lt;span class="fe-text-success"&gt;Text Success&lt;/span&gt;
  &lt;span class="fe-text-danger"&gt;Text Danger&lt;/span&gt;
  &lt;span class="fe-text-warning fe-bg-dark"&gt;Text Warning&lt;/span&gt;
  &lt;span class="fe-text-info"&gt;Text Info&lt;/span&gt;
  &lt;span class="fe-text-light fe-bg-dark"&gt;Text Light&lt;/span&gt;
  &lt;span class="fe-text-dark"&gt;Text Dark&lt;/span&gt;
  `,
  },
  {
    id: 'code-lists',
    code: `
  &lt;!-- Default List --&gt;
  &lt;ul class="fe-list"&gt;
    &lt;li&gt;List Item 1&lt;/li&gt;
    &lt;li&gt;List Item 2&lt;/li&gt;
    &lt;li&gt;List Item 3&lt;/li&gt;
  &lt;/ul&gt;
  &lt;!-- Bulleted List --&gt;
  &lt;ul class="fe-list-bullet"&gt;
    &lt;li&gt;List Item 1&lt;/li&gt;
    &lt;li&gt;List Item 2&lt;/li&gt;
    &lt;li&gt;List Item 3&lt;/li&gt;
  &lt;/ul&gt;
  &lt;!-- Circle List --&gt;
  &lt;ul class="fe-list-circle"&gt;
    &lt;li&gt;List Item 1&lt;/li&gt;
    &lt;li&gt;List Item 2&lt;/li&gt;
    &lt;li&gt;List Item 3&lt;/li&gt;
  &lt;/ul&gt;
  &lt;!-- Square List --&gt;
  &lt;ul class="fe-list-square"&gt;
    &lt;li&gt;List Item 1&lt;/li&gt;
    &lt;li&gt;List Item 2&lt;/li&gt;
    &lt;li&gt;List Item 3&lt;/li&gt;
  &lt;/ul&gt;
  &lt;!-- Decimal List --&gt;
  &lt;ol class="fe-list-decimal"&gt;
    &lt;li&gt;List Item 1&lt;/li&gt;
    &lt;li&gt;List Item 2&lt;/li&gt;
    &lt;li&gt;List Item 3&lt;/li&gt;
  &lt;/ol&gt;  
    `,
  },
  {
    id: 'code-tables',
    code: `
    &lt;!-- Simple Table --&gt;
  &lt;div class=&quot;fe-table-container&quot;&gt;
    &lt;table class=&quot;fe-simple-table&quot;&gt;
      &lt;thead&gt;
        &lt;tr&gt;
          &lt;th&gt;Header 1&lt;/th&gt;
          &lt;th&gt;Header 2&lt;/th&gt;
          &lt;th&gt;Header 3&lt;/th&gt;
        &lt;/tr&gt;
      &lt;/thead&gt;
      &lt;tbody&gt;
        &lt;tr&gt;
          &lt;td&gt;Data 1&lt;/td&gt;
          &lt;td&gt;Data 2&lt;/td&gt;
          &lt;td&gt;Data 3&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
          &lt;td&gt;Data 4&lt;/td&gt;
          &lt;td&gt;Data 5&lt;/td&gt;
          &lt;td&gt;Data 6&lt;/td&gt;
        &lt;/tr&gt;
      &lt;/tbody&gt;
    &lt;/table&gt;
  &lt;/div&gt;
  
  &lt;!-- Zebra Table --&gt;
  &lt;div class=&quot;fe-table-container&quot;&gt;
  &lt;table class=&quot;fe-zebra-table&quot;&gt;
      &lt;thead&gt;
        &lt;tr&gt;
          &lt;th&gt;Header 1&lt;/th&gt;
          &lt;th&gt;Header 2&lt;/th&gt;
          &lt;th&gt;Header 3&lt;/th&gt;
        &lt;/tr&gt;
      &lt;/thead&gt;
      &lt;tbody&gt;
        &lt;tr&gt;
          &lt;td&gt;Data 1&lt;/td&gt;
          &lt;td&gt;Data 2&lt;/td&gt;
          &lt;td&gt;Data 3&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
          &lt;td&gt;Data 4&lt;/td&gt;
          &lt;td&gt;Data 5&lt;/td&gt;
          &lt;td&gt;Data 6&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
          &lt;td&gt;Data 7&lt;/td&gt;
          &lt;td&gt;Data 8&lt;/td&gt;
          &lt;td&gt;Data 9&lt;/td&gt;
        &lt;/tr&gt;
      &lt;/tbody&gt;
    &lt;/table&gt;
  &lt;/div&gt;
    `,
  },
  {
    id: 'code-buttons',
    code: `
&lt;!-- Light mode --&gt;
&lt;button class="fe-btn-light-default"&gt;Default&lt;/button&gt;
&lt;button class="fe-btn-light-primary"&gt;Primary&lt;/button&gt;
&lt;button class="fe-btn-light-secondary"&gt;Secondary&lt;/button&gt;
&lt;button class="fe-btn-light-success"&gt;Success&lt;/button&gt;
&lt;button class="fe-btn-light-danger"&gt;Danger&lt;/button&gt;
&lt;button class="fe-btn-light-disabled" disabled&gt;Disabled&lt;/button&gt;
&lt;!-- Dark mode --&gt; 
&lt;button class="fe-btn-dark-default"&gt;Default&lt;/button&gt;
&lt;button class="fe-btn-dark-primary"&gt;Primary&lt;/button&gt;
&lt;button class="fe-btn-dark-secondary"&gt;Secondary&lt;/button&gt;
&lt;button class="fe-btn-dark-success"&gt;Success&lt;/button&gt;
&lt;button class="fe-btn-dark-danger"&gt;Danger&lt;/button&gt;
&lt;button class="fe-btn-dark-disabled" disabled&gt;Disabled&lt;/button&gt;
    `,
  },
  {
    id: 'code-mp',
    code: `
  &lt;!-- Margin all sides --&gt;
  &lt;div class="m-xs"&gt;Margin extra small&lt;/div&gt;
  &lt;div class="m-sm"&gt;Margin small&lt;/div&gt;
  &lt;div class="m-md"&gt;Margin medium&lt;/div&gt;
  &lt;div class="m-lg"&gt;Margin large&lt;/div&gt;
  &lt;div class="m-xl"&gt;Margin extra large&lt;/div&gt;
  &lt;div class="m-xxl"&gt;Margin 2x large&lt;/div&gt;
  &lt;!-- Margin top --&gt;
  &lt;div class="mt-xs"&gt;Margin top extra small&lt;/div&gt;
  &lt;!-- Margin left --&gt;
  &lt;div class="ms-xs"&gt;Margin start (left - LTR) extra small&lt;/div&gt;
  &lt;!-- Horizontal margin only --&gt;
  &lt;div class="mx-md"&gt;Margin horizontal medium&lt;/div&gt;
  &lt;!-- Same rule applied for other combinations --&gt;

  &lt;!-- Padding all sides --&gt;
  &lt;div class="p-xs"&gt;Padding extra small&lt;/div&gt;
  &lt;div class="p-sm"&gt;Padding small&lt;/div&gt;
  &lt;div class="p-md"&gt;Padding medium&lt;/div&gt;
  &lt;div class="p-lg"&gt;Padding large&lt;/div&gt;
  &lt;div class="p-xl"&gt;Padding extra large&lt;/div&gt;
  &lt;div class="p-xxl"&gt;Padding 2x large&lt;/div&gt;
  &lt;!-- Padding top --&gt;
  &lt;div class="pt-xs"&gt;Padding top extra small&lt;/div&gt;
  &lt;!-- Padding left --&gt;
  &lt;!-- Vertical padding only --&gt;
  &lt;div class="py-md"&gt;Padding vertical medium&lt;/div&gt;
  &lt;div class="ps-xs"&gt;Padding start (left - LTR) extra small&lt;/div&gt;
  &lt;!-- Same rule applied for other combinations --&gt;
  &lt;!-- Removing margin or padding --&gt;
  &lt;div class="m-remove-x"&gt;No margin start & end&lt;/div&gt;
  &lt;div class="p-remove-y"&gt;No padding top & bottom&lt;/div&gt;
    `,
  },
  {
    id: 'code-grid',
    code: `
  &lt;!-- This is a demo from the above grid --&gt;
  &lt;div class=&quot;fe-row fe-container gap-md&quot;&gt;
    &lt;div class=&quot;fe-col-full example-box&quot;&gt;
    Column 1
    &lt;/div&gt;
    &lt;div class=&quot;fe-col fe-col-xs-9 fe-col-sm-4 fe-col-md-6 fe-col-lg-8 example-box&quot;&gt;
    Column 2
    &lt;/div&gt;
    &lt;div class=&quot;fe-col fe-col-xs-3 fe-col-sm-8 fe-col-md-6 fe-col-lg-4 example-box&quot;&gt;
    Column 3
    &lt;/div&gt;
    &lt;div class=&quot;fe-col fe-col-xs-12 fe-col-sm-8 fe-col-md-6 fe-col-lg-3 example-box&quot;&gt;
    Column 4
    &lt;/div&gt;
&lt;/div&gt;
`,
  },
  {
    id: 'code-forms',
    code: `
  &lt;!-- Text group input --&gt;
   &lt;div class=&quot;fe-form-group-text&quot;&gt;
      &lt;label for=&quot;name&quot; class=&quot;form-label&quot;&gt;Name&lt;/label&gt;
      &lt;input type=&quot;text&quot; id=&quot;name&quot; name=&quot;name&quot; class=&quot;form-control&quot; placeholder=&quot;Enter your name&quot;&gt;
  &lt;/div&gt;
  &lt;!-- Textarea input --&gt;
  &lt;div class=&quot;fe-form-group-textarea&quot;&gt;
      &lt;label for=&quot;message&quot; class=&quot;form-label&quot;&gt;Message&lt;/label&gt;
      &lt;textarea id=&quot;message&quot; name=&quot;message&quot; class=&quot;form-control&quot; placeholder=&quot;Enter your message&quot;&gt;&lt;/textarea&gt;
  &lt;/div&gt;
  &lt;!-- Text group input with theme colour (primary) --&gt;
  &lt;!-- Apply a class of the colour in the wrapper --&gt;
  &lt;div class=&quot;fe-form-group-text primary&quot;&gt;
      &lt;label for=&quot;name&quot; class=&quot;form-label &quot;&gt;Name&lt;/label&gt;
      &lt;input type=&quot;text&quot; id=&quot;name&quot; name=&quot;name&quot; class=&quot;form-control&quot; placeholder=&quot;Enter your name&quot;&gt;
  &lt;/div&gt;
    `,
  },
];
