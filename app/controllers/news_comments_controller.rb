class NewsCommentsController < ApplicationController
    def index
        comment = NewsComment.all
        render json: comment, each_serializer: NewsCommnetsSerializer 
    end
    def create
        comment = NewsComment.create(comment_params)
       
        render json: comment
        
    end
    def show
        
        comment = NewsComment.find_by(id:params[:id])
        if comment
            render json: comment, each_serializer: NewsCommnetsSerializer 
            
        else
            render json: {error:"No comments"}
        end

        
    end

    def destroy
        comment = NewsComment.find_by(id:params[:id])
        comment.destroy
    end
    
    
    
    private

    def comment_params
       params.permit(:comment, :user_id,:news_post_id,) 
    end
    
    
end
