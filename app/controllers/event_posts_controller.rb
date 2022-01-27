class EventPostsController < ApplicationController
  before_action :set_event_post, only: %i[ show edit update destroy ]

  # GET /event_posts or /event_posts.json
  def index
    @event_posts = EventPost.all
  end

  # GET /event_posts/1 or /event_posts/1.json
  def show
  end

  # GET /event_posts/new
  def new
    @event_post = EventPost.new
  end

  # GET /event_posts/1/edit
  def edit
  end

  # POST /event_posts or /event_posts.json
  def create
    @event_post = EventPost.new(event_post_params)

    respond_to do |format|
      if @event_post.save
        format.html { redirect_to event_post_url(@event_post), notice: "Event post was successfully created." }
        format.json { render :show, status: :created, location: @event_post }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @event_post.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /event_posts/1 or /event_posts/1.json
  def update
    respond_to do |format|
      if @event_post.update(event_post_params)
        format.html { redirect_to event_post_url(@event_post), notice: "Event post was successfully updated." }
        format.json { render :show, status: :ok, location: @event_post }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @event_post.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /event_posts/1 or /event_posts/1.json
  def destroy
    @event_post.destroy

    respond_to do |format|
      format.html { redirect_to event_posts_url, notice: "Event post was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_event_post
      @event_post = EventPost.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def event_post_params
      params.require(:event_post).permit(:date_created, :title, :content, :event_date, :event_time, :event_allday, :event_location, :division_target, :avatar, :topic, :claps, :clicks, :user_id, :division_id)
    end
end
