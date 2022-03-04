import { createLogger } from 'winston';
import Console from 'winston-console-transport';

export const logger = createLogger({
  level: 'info',
  transports: [new Console()],
  handleExceptions: true,
  exitOnError: false, // do not exit on handled exceptions
});
