class MailMailer < ApplicationMailer
  def welcome_email(message)
    @message = message
    @url  = 'http://zeonl.ru'
    mail(to: 'zeon.media@yandex.ru', subject: 'Сообщение с сайта ')
  end
end
