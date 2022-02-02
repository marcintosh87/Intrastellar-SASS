class EventsCommentsController < ApplicationController
    def index
        comment = EventsComment.all
        render json: comment        
    end
    def create
        comment = EventsComment.create(comment_params)
        render json: comment
        
    end
    def show
        comment = EventsComment.find_by(id:params[:id])
        if comment
            render json: comment
            
        else
            render json: {error:"No comments"}
        end

        
    end
    
    
    private

    def comment_params
       params.permit(:comment, :user_id,:event_posts_id) 
    end
    
end
