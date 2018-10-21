# == Schema Information
#
# Table name: awards
#
#  id         :bigint(8)        not null, primary key
#  title      :string           not null
#  year       :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Award < ApplicationRecord
    validates :title, :year, presence: true

    has_many_attached :files
end
