class NewsPostsController < ApplicationController
  before_action :set_news_post, only: %i[show edit update destroy]

  # GET /news_posts or /news_posts.json
  def index
    @news_posts = NewsPost.all.order(:created_at)
    render json: @news_posts.with_attached_avatar
  end

  # GET /news_posts/1 or /news_posts/1.json
  def show
    # render json: @news_post
  end

  # GET /news_posts/new
  def new
    @news_post = NewsPost.new
  end

  # GET /news_posts/1/edit
  def edit; end

  # POST /news_posts or /news_posts.json
  def create
    @news_post = NewsPost.new(news_post_params)

    respond_to do |format|
      if @news_post.save
        format.html do
          redirect_to news_post_url(@news_post),
                      notice: 'News post was successfully created.'
        end
        format.json { render :show, status: :created, location: @news_post }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json do
          render json: @news_post.errors, status: :unprocessable_entity
        end
      end
    end
  end

  # PATCH/PUT /news_posts/1 or /news_posts/1.json
  def update
    respond_to do |format|
      if @news_post.update(news_post_params)
        format.html do
          redirect_to news_post_url(@news_post),
                      notice: 'News post was successfully updated.'
        end
        format.json { render :show, status: :ok, location: @news_post }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json do
          render json: @news_post.errors, status: :unprocessable_entity
        end
      end
    end
  end

  # DELETE /news_posts/1 or /news_posts/1.json
  def destroy
    @news_post.destroy

    respond_to do |format|
      format.html do
        redirect_to news_posts_url,
                    notice: 'News post was successfully destroyed.'
      end
      format.json { head :no_content }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_news_post
    @news_post = NewsPost.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def news_post_params
    params
      .require(:news_post)
      .permit(
        :date_created,
        :title,
        :content,
        :division_target,
        :avatar,
        :claps,
        :clicks,
        :user_id,
        :division_id,
      )
  end
end
