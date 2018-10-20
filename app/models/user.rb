# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string
#  password_digest :string
#  user_type       :string
#  session_token   :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true;
  validates :password, length: {minimum: 8, allow_nil: true}
  before_validation :ensure_session_token

  has_one_attached :photo

  attr_reader :password

  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw)
  end

  def is_password?(pw)
    BCrypt::Password.new(password_digest).is_password?(pw)
  end

  def self.find_by_credentials(username, pw)
    user = User.find_by(username: username)
    if user && user.is_password?(pw)
      return user
    end
    nil
  end

  def self.token
    SecureRandom.urlsafe_base64
  end

  def ensure_session_token
    self.session_token ||= User.token
  end

  def reset_session_token!
    self.session_token = User.token
    self.save
    self.session_token
  end
end
