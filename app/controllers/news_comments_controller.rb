class NewsCommentsController < ApplicationController
    def index
        comment = NewsComment.all
        render json: comment        
    end
    def create
        comment = NewsComment.create(comment_params)
       
        render json: comment
        
    end
    def show
        
        comment = NewsComment.find_by(id:params[:id])
        if comment
            render json: comment
            
        else
            render json: {error:"No comments"}
        end

        
    end
    
    
    private

    def comment_params
       params.permit(:comment, :user_id,:news_post_id,) 
    end
    
    
end
