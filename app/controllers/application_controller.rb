class ApplicationController < ActionController::Base
  include ActionController::Cookies  
  skip_before_action :verify_authenticity_token
    

    private

    def current_user # needs to change once authentication is set up
      @current_user ||= User.find_by_id(session[:user_id]) # memoization 
  end
   
end
