class PortfoliosController < ApplicationController
  before_action :set_portfolio, only: [:show, :edit, :update, :destroy]

  # GET /portfolios
  # GET /portfolios.json
  def index
    @portfolios = current_user.portfolios.ordered_by_creation
    render :layout => "index"
  end

  # GET /portfolios/1
  # GET /portfolios/1.json
  def show
  end

  # GET /portfolios/new
  def new
    @portfolio = current_user.portfolios.new
    # @portfolio.project_in_portfolios.build
    @content = @portfolio.build_content
    render :layout => "edit"
  end

  def copy
    old_portfolio = current_user.portfolios.find(params[:id])
    new_portfolio = old_portfolio.dup
    new_portfolio.name = new_portfolio.name + " 2"
    new_portfolio.save

    old_portfolio.project_in_portfolios.each do |p_in_p|
      new_p_in_p = p_in_p.dup
      new_p_in_p.update(portfolio_id: new_portfolio.id)
    end

    old_portfolio.resume_in_portfolios.each do |r_in_p|
      new_r_in_p = r_in_p.dup
      new_r_in_p.update(portfolio_id: new_portfolio.id)
    end

    old_content = old_portfolio.content
    new_content = old_content.dup
    new_content.save
    new_content.update(contentable_id: new_portfolio.id)

    respond_to do |format|
      format.html { redirect_to portfolios_path, notice: 'Portfolio was successfully duplicated.' }
      format.json { render :index }
    end
  end

  # GET /portfolios/1/edit
  def edit
    render :layout => "edit"
  end

  # POST /portfolios
  # POST /portfolios.json
  def create
    @portfolio = current_user.portfolios.new(portfolio_params)
    @portfolio.user_id = current_user.id
    @portfolio.name = params[:name] || "Новое портфолио"

    respond_to do |format|
      if @portfolio.save
        @content = @portfolio.create_content
        format.html { redirect_to edit_portfolio_path(@portfolio), notice: 'Portfolio was successfully created.' }
        format.json { render :show, status: :created, location: @portfolio }
      else
        format.html { render :new }
        format.json { render json: @portfolio.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /portfolios/1
  # PATCH/PUT /portfolios/1.json
  def update
    respond_to do |format|
      if @portfolio.update(portfolio_params)
        format.html { redirect_to edit_portfolio_path }
        format.json { render :show, status: :ok, location: @portfolio }
      else
        format.html { render :edit }
        format.json { render json: @portfolio.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /portfolios/1
  # DELETE /portfolios/1.json
  def destroy
    @portfolio.destroy
    respond_to do |format|
      format.html { redirect_to portfolios_url, notice: 'Portfolio was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_portfolio
      @portfolio = current_user.portfolios.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def portfolio_params
      params.require(:portfolio).permit(:name, :description, :cover, :language, :title, :body, :user_id, project_ids:[], resume_ids:[],
        project_in_portfolios_attributes: [:id, :order, :portfolio_id, :project_id, :_destroy],
        resume_in_portfolios_attributes: [:id, :order, :portfolio_id, :resume_id, :_destroy],
        )
    end
end
