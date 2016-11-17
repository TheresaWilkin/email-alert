const {sendEmail} = require('./emailer');

const emailError = (err, req, res, next) => {
  if (err.name === 'FooError' || err.name === 'BarError') {
    const emailData = {
      'FromEmail': 'godnessme548@gmail.com',
      'FromName': 'SERVICE ALERTS',
      'Subject': `ALERT: a ${err.name} occurred`,
      'Text-part': `${err.message} ${err.stack}`,
      'Recipients': [{'Email': 'godnessme548@gmail.com'}]
    };
    sendEmail(emailData);
  } else {
  next(err);
  }
};

module.exports = {emailError};