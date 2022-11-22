import {Logger, LogLevel} from "./types/logger";
import {DexLogger} from "~/infrastructure/logger/dexLogger";


// noinspection JSUnusedGlobalSymbols
export class MultiLogger implements Logger {
  private loggers: Logger[] = [];
  private minLoggingLevel: LogLevel | undefined;

  constructor(logLevel?: LogLevel) {
    this.minLoggingLevel = logLevel;
  }

  addLogger(logger: Logger) {
    this.loggers.push(logger);

    if (this.minLoggingLevel) {
      logger.setMinLoggingLevel(this.minLoggingLevel);
    }
  }

  setMinLoggingLevel(logLevel: LogLevel): void {
    this.loggers.map(logger => logger.setMinLoggingLevel(logLevel));
  }

  logWithLevel(logLevel: LogLevel, message: string, ...info: any[]): void {
    this.loggers.map(logger => logger.logWithLevel(logLevel, message, ...info));
  }

  log(message: string, ...info: any[]): void {
    this.loggers.map(logger => logger.logWithLevel(LogLevel.debug, message, ...info));
  }

  verb(message: string, ...info: any[]): void {
    this.loggers.map(logger => logger.verb(message, ...info));
  }

  debug(message: string, ...info: any[]): void {
    this.loggers.map(logger => logger.debug(message, ...info));
  }

  info(message: string, ...info: any[]): void {
    this.loggers.map(logger => logger.info(message, ...info));
  }

  warn(message: string, ...info: any[]): void {
    this.loggers.map(logger => logger.warn(message, ...info));
  }

  error(message: string, ...info: any[]): void {
    this.loggers.map(logger => logger.error(message, ...info));
  }

  addReference(reference: string) {
    this.loggers.map(logger => {
      if(logger instanceof DexLogger) {
        logger.addReference(reference);
      }
    });
  }

  clearReferences() {
    this.loggers.map(logger => {
      if(logger instanceof DexLogger) {
        logger.clearReferences();
      }
    });
  }
}

export const logger = new MultiLogger();
