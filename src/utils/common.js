const mapActions = {
  create: {
    alias: 'c', // 别名
    description: '创建一个项目',
    examples: ['hola create <project-name>'],
  },
  config: {
    alias: 'conf',
    description: 'config project variable',
    examples: ['hola config set <k> <v>', 'hola config get <k>'],
  },
  '*': {
    alias: '',
    description: 'command not found',
    examples: [],
  },
};

module.exports = {
  mapActions,
};
