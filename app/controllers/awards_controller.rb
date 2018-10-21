class AwardsController < ApplicationController
    def show 
    end 

    def index
    end 

    def update 
    end 

    def create
    end 

    private 

    def award_params 
        params.require(:award).permit(:title, :year)
    end 

end
