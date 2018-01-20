export enum LogLevel{
    ERROR = 1, WARNING, INFO, DEBUG
}

export class Logger {
    static LOG_LEVEL: LogLevel = LogLevel.DEBUG;

    static log(level: LogLevel, ...args) {
        if (level <= Logger.LOG_LEVEL) {
            Logger.getConsoleFunction(level).apply(this, args);
        }
    }

    static i(...args) {
        Logger.log(LogLevel.INFO, args);
    }

    static e(...args) {
        Logger.log(LogLevel.ERROR, args);
    }

    static w(...args) {
        Logger.log(LogLevel.WARNING, args);
    }

    static d(...args) {
        Logger.log(LogLevel.DEBUG, ...args);
    }

    static getConsoleFunction(level: LogLevel) {
        switch (level) {
            case LogLevel.ERROR:
                return console.error;
            case LogLevel.INFO:
                return console.info;
            case LogLevel.WARNING:
                return console.warn;
            case LogLevel.DEBUG:
            default:
                return console.log;
        }
    }
}