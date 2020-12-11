module.exports = {
  prompt: ({ prompter, args }) =>
    prompter
      .prompt([
        {
          type: 'select',
          name: 'stage',
          message: 'What is the stage of Atomic Design?',
          choices: ['atoms', 'molecules', 'organisms', 'templates']
        },
        {
          type: 'input',
          name: 'component_name',
          message: 'What is the name of component?',
          validate: s => (s !== ''),
        },
        {
          type: 'confirm',
          name: 'has_style',
          message: 'Is it have style?',
        },
        {
          type: 'confirm',
          name: 'has_props',
          message: 'Is it have props?',
        },
      ])
      .then((answers) =>
        {
          const { stage, has_props } = answers;
          const path = `src/components/${stage}`;
          const type_annotate = has_props ? "<Props>" : '';
          const props = has_props ? 'props' : '';
          return { ...answers, path, type_annotate, props };
        }
      )
}
