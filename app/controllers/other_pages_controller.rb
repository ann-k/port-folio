class OtherPagesController < ApplicationController
  before_action :authenticate_user!, :except => [:privacy]

  def account
    # render :layout => "index"
  end

  def privacy
  end
end
