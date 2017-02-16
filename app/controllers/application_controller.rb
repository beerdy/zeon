class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  def initialize
    super
    @message = Message.new
    @content = Content.all
    @works = Work.all
    
    #headers
    eval(@content[1].description)
    #contact
    eval(@content[2].description)
    
    @colors = fib
    @colors.resume ['salmonborder','goldborder','blueborder']
    @slide_styles = fib
    @slide_styles.resume ['bounceInLeft animated','bounceIn animated','swing animated','fadeInUp animated','flipInY','slideInLeft']
    return true
  end

private
  def fib
    Fiber.new do |array|
      loop do
        array.each do |element|
          Fiber.yield element
        end
        #Fiber.yield nil if stop
      end
    end
  end
end
