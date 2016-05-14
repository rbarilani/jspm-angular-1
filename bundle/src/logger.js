class Logger {
  constructor(channel) {
    this.channel = channel;
  }

  setTransport(transport) {
    this.transport = transport;
  }

  setFormatter(formatter) {
    this.formatter = formatter;
  }
}

['debug', 'log', 'info', 'warn', 'error'].forEach(function (method) {
  Logger.prototype[method] = function (...args) {
    let _args = this.formatter.call(this, args);
    if(this.transport[method]) {
      this.transport[method].apply(this.transport, _args);
    }
    return this;
  };
});

let defaultFormatter = function (args) {
  let _args = args.slice();
  _args.unshift('[' + this.channel + ']:');
  return _args;
}

let formatterFactory = function (channel) {
  let logger = new Logger(channel);
  logger.setTransport(console);
  logger.setFormatter(defaultFormatter);
  return logger;
}

export default formatterFactory;
export {Logger};
