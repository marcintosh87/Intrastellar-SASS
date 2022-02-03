class ECommentsController < ApplicationController
  before_action :set_e_comment, only: %i[ show edit update destroy ]

  # GET /e_comments or /e_comments.json
  def index
    @e_comments = EComment.all
    render json: @e_comments
  end

  # GET /e_comments/1 or /e_comments/1.json
  def show
  end

  # GET /e_comments/new
  def new
    @e_comment = EComment.new
  end

  # GET /e_comments/1/edit
  def edit
  end

  # POST /e_comments or /e_comments.json
  def create
    @e_comment = EComment.new(e_comment_params)

    respond_to do |format|
      if @e_comment.save
        format.html { redirect_to e_comment_url(@e_comment), notice: "E comment was successfully created." }
        format.json { render :show, status: :created, location: @e_comment }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @e_comment.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /e_comments/1 or /e_comments/1.json
  def update
    respond_to do |format|
      if @e_comment.update(e_comment_params)
        format.html { redirect_to e_comment_url(@e_comment), notice: "E comment was successfully updated." }
        format.json { render :show, status: :ok, location: @e_comment }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @e_comment.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /e_comments/1 or /e_comments/1.json
  def destroy
    @e_comment.destroy

    respond_to do |format|
      format.html { redirect_to e_comments_url, notice: "E comment was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_e_comment
      @e_comment = EComment.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def e_comment_params
      params.require(:e_comment).permit(:user_id, :event_post_id, :comment)
    end
end
