---
to: "<%= path %>/<%= h.changeCase.pascal(component_name) %>/index.tsx"
---
<% const name = h.changeCase.pascal(component_name) -%>
import React, { FC } from 'react';
<% if (has_style) { -%>
import styles from './style.module.css';
<% } -%>
<% if (has_props) { -%>

export type Props = {
  //
};
<% } -%>

const <%= name %>: FC<%- type_annotate %> = (<%= props %>) => (
  <>
    //
  </>
);

export default <%= name %>;
