class UsersController < ApplicationController

rescue_from ActiveRecord::RecordInvalid, with: :valid_user

before_action :authorize
skip_before_action :authorize, only:[:create, :index]


    def index
        users = User.all
        render json: users
    end
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        user = User.find_by(id: session[:user_id])
        session[:user_id] = user.id
        render json: user

    end

    def destroy
        user = User.find_by(id: session[:id])
        user.destroy
        heade :no_content
    end

    def update
        user = User.find_by(id: session[:user_id])
        user.update!(update_params)
        render json: user, status: :ok
    end

    private 

    def user_params
        params.permit(:username, :password, :password_confirmation, :profile_pic, :email)
    end
    def valid_user(valid)
        render json:{errors: valid.record.errors.full_messages}, status: :unprocessable_entity
    end
    def authorize
        return render json:{error:"Not authorized"}, status: :unauthorized unless session.include? :user_id
    end

    def update_params
        params.permit(:username, :profile_pic, :email, :password_digest)
    end
end
