---
to: <%= path %>/<%= h.changeCase.pascal(component_name) %>/index.stories.tsx
---
<% const name = h.changeCase.pascal(component_name) -%>
import React, { FC } from 'react';
import <%= name %> from '.';

export default {
  title: '<%= h.changeCase.pascal(stage) %>/<%= name %>',
};

export const Default: FC = () => <<%= name %> />;
Default.storyName = 'デフォルト';
