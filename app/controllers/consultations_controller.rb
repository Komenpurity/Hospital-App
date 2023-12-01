class ConsultationsController < ApplicationController

    def index
        consultations = Consultation.all
        render json: consultations, status: :ok 
    end

    
    def create
        consultations = Consultation.create!(consultation_params) 
        render json: consultations, status: :created 
    end

    def show
        consultation = Consultation.find(params[:id])
        render json: consultation
    end


    private

    def consultation_params
        params.permit(:name, :number, :email, :specialty) 
    end
end
