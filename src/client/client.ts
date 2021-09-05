const printCredits = (): any => {
  // @ts-ignore
  return print(
    `^6{ ${GetCurrentResourceName()} ${GetResourceMetadata(
      GetCurrentResourceName(),
      'version',
      0,
    )} }\n^0-^2 Made by Andreww | z7rwastaken | <andreww@shadowct.eu> ^0-\n^0-^2 Github: https://github.com/z7rwastaken/ad-scaffold ^0-\n^0-^2 Discord: @andreww#1246 ^0-\n^6{ ${GetCurrentResourceName()} <3 }`,
  );
};

on('onClientResourceStart', (resource: string) => {
  if (resource === GetCurrentResourceName()) return printCredits();
  else return;
});

on('playerConnecting', player => {
  printCredits();
});

RegisterCommand(
  'ad-scaffold:test',
  (_src, _args) => {
    emit('chat:addMessage', {
      args: ['^6ad-scaffold', '^*Please edit client.ts!'],
    });
  },
  false,
);

// On next tick.
setImmediate(() => {
  emit('chat:addSuggestion', '/ad-scaffold:test', 'Really cool test command');
});
