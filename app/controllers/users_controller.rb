class UsersController < ApplicationController
  before_action :find_user, only: [:destroy, :update, :show]
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 406
    end
  end

  def show
  end

  def update
    if @user.update(user_params)
      render :show 
    else 
      render json: @user.errors.full_messages, status: 406 
    end 
  end 

  def destroy 
    @user.destroy
    render json: {}
  end 

  private

  def user_params
    params.require(:user).permit(:username, :password, :email, :userType)
    .transform_keys!(&:underscore)
  end

  def find_user
    @user = User.find(params[:id])
  end
end
