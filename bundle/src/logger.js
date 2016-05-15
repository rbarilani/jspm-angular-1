class Logger {
  constructor(channel) {
    this.channel = channel;
  }

  setTransport(transport) {
    this.transport = transport;
    return this;
  }

  setFormatter(formatter) {
    this.formatter = formatter;
    return this;
  }
}

Logger.LEVELS = ['debug', 'log', 'info', 'warn', 'error'];

Logger.LEVELS.forEach(function (level) {
  Logger.prototype[level] = function (...args) {
    this.transport(level, this.formatter(level, args));
    return this;
  };
});

let defaultFormatter = function (level, args) {
  let _args = args.slice();
  _args.unshift(`[${this.channel}.${level.toUpperCase()}]:`);
  return _args;
}

let defaultTransport = function (level, args) {
  let _method = console[level] ? level : 'log';
  console[_method].apply(console, args || []);
}

let formatterFactory = function (channel) {
  let logger = new Logger(channel);
  logger
    .setTransport(defaultTransport)
    .setFormatter(defaultFormatter);
  return logger;
}

export default formatterFactory;
export {Logger, defaultTransport, defaultFormatter};
