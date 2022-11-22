export enum ServerErrorTypes {
  checkRegisterSmsCode = "errors.CheckSmsCodeFailedException.RegisterRequest",
  checkRegisterEmailCode = "errors.CheckEmailCodeFailedException.RegisterRequest",
  checkSmsCooldown = "errors.CheckSmsCooldownException.RegisterRequest",
  checkEmailCooldown = "errors.CheckEmailCooldownException.RegisterRequest",
  sendSmsCodeCooldown = 'errors.SendSmsCooldownException.RegisterRequest',
  antiSpamCheck = "errors.AntispamCheckFailedException.RegisterRequest",
  checkEmailCodeExceeded = "errors.CheckEmailCodeExceededException.RegisterRequest",
  checkSmsCodeExceeded = "errors.CheckSmsCodeExceededException.RegisterRequest",
  smsCodeNotFound = "errors.SmsCodeNotFoundException.RegisterRequest",
  emailCodeNotFound = "errors.EmailCodeNotFoundException.RegisterRequest",
  userAlreadyExist = "errors.UserAlreadyExistException.RegisterRequest",
  userNotFound = "errors.UserNotFoundException.UserDb",
}
