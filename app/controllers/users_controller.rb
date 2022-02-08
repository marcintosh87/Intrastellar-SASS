class UsersController < ApplicationController
  before_action :set_user, only: %i[show edit update destroy]

  # GET /users or /users.json
  def index
    @users = User.all.order(:last_name)
  
    render json: @users.with_attached_avatar
  end

  # GET /users/1 or /users/1.json
  def show
   render json: @user
  end

  def me
    if current_user 
      render json: current_user, status: :ok 
  else 
      render json: "No one is logged in", status: :unauthorized
  end
  end

  # GET /users/new
  def new
    @user = User.new
  end

  # GET /users/1/edit
  def edit; end

  # POST /users or /users.json
  def create
    @user = User.new(user_params)

    respond_to do |format|
      if @user.save
        format.html do
          redirect_to user_url(@user), notice: 'User was successfully created.'
        end
        format.json { render :show, status: :created, location: @user }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /users/1 or /users/1.json
  def update

    user = User.find_by(id:params[:id])
    user.update(user_params)
    render json: user
    # respond_to do |format|
    #   if @user.update(user_params)
    #     format.html do
    #       redirect_to user_url(@user), notice: 'User was successfully updated.'
    #     end
    #     format.json { render :show, status: :ok, location: @user }
    #   else
    #     format.html { render :edit, status: :unprocessable_entity }
    #     format.json { render json: @user.errors, status: :unprocessable_entity }
    #   end
    # end
  end

  # DELETE /users/1 or /users/1.json
  def destroy
    @user.destroy

    respond_to do |format|
      format.html do
        redirect_to users_url, notice: 'User was successfully destroyed.'
      end
      format.json { head :no_content }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_user
    @user = User.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def user_params
    params
    .require(:user)
    .permit(
      :administrator,
      :first_name,
      :last_name,
      :email,
      :password,
    
      :position,
      :division,
      :phone,
      :extension,
      :active,
      :hire_date,
      :division_id,
      :avatar,
    )

  
  end
end
