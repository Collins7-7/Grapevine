class CategoriesController < ApplicationController

rescue_from ActiveRecord::RecordInvalid, with: :invalid_record

    def index
        categories = Category.all
        render json: categories
    end

    def show
        category = Category.find_by(id: params[:id])
        render json: category
    end

    def create
        category = Category.create!(category_params)
        render json: category, status: :created
    end

private 

 def category_params
    params.permit(:name)
 end

 def invalid_record(invalid)
    render json:{errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
 end


end
