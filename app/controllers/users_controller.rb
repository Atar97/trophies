class UsersController < ApplicationController
  before_action :find_user, only: [:destroy, :update, :show]
  def create
    @user = User.new(user_params)
    @user.user_type = 'admin'
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 406
    end
  end

  def show
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

  def find_user
    @user = User.find(params[:id])
  end
end
