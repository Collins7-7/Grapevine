class PostsController < ApplicationController
    wrap_parameters true

rescue_from ActiveRecord::RecordInvalid, with: :valid_user

    before_action :authorize
    skip_before_action :authorize, only:[:index, :show]

    def index 
        posts = Post.all
        render json: posts
    end

    def create
        user = User.find_by(id: session[:user_id])
        post = user.posts.create!(post_params)
        render json: post, status: :created

    end

    def update
        user = User.find_by(id: session[:user_id])
        post = user.posts.find(params[:id])
        post = post.update(update_params)
        render json:post, status: :ok
    end

    def destroy
        user = User.find_by(id: session[:user_id])
        
        post = user.posts.find(params[:id])
        post.destroy
        render json:{}
        # post = Post.find_by(id: params[:id])
        # post.destroy
        # render json: 
    end

    def show
        post = Post.find_by(id: params[:id])
        render json: post, serializer: PostUsernameSerializer 
    end

    private 

    def post_params
        params.permit(:title, :description, :photo, :user_id, :category_id)
    end

    def update_params
        params.permit(:title, :description,:photo)
    end

    def authorize
        return render json: {errors: ["Not authorized"]}, status: :unauthorized unless session.include? :user_id
    end

    def valid_user(valid)
        render json:{errors: valid.record.errors.full_messages}, status: :unprocessable_entity
    end



end
