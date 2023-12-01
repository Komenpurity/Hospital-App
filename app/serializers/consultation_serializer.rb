class ConsultationSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :number, :specialty
end
