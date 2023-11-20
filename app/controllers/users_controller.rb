class UsersController < ApplicationController
  before_action :authorize

    def create
        user = User.create(user_params)
        session[:user_id] = user.id
        if user.valid?
          render json: user, status: :created
        else
          render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def show
        user = User.find_by(id: session[:user_id])
        if user
          render json: user 
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
        
      end
    
      private
    
      def user_params
        params.permit(:username, :password_digest, :image_url, :bio) 
      end 

      def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
      end
end
