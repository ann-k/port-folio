class ContentImagesController < ApplicationController
  before_action :set_content_image, only: [:show, :edit, :update, :destroy]

  # GET /content_images
  # GET /content_images.json
  def index
    @content_images = ContentImage.all
  end

  # GET /content_images/1
  # GET /content_images/1.json
  def show
  end

  def upload
    c = ContentImage.new
    c.data = params[:image]
    c.save!

    uploader_response = {
      "success": 1,
      "file": {
        "url":  c.data.url,
      }
    }
    render json: uploader_response
  end

  # GET /content_images/new
  def new
    @content_image = ContentImage.new
  end

  # GET /content_images/1/edit
  def edit
  end

  # POST /content_images
  # POST /content_images.json
  def create
    @content_image = ContentImage.new(content_image_params)

    respond_to do |format|
      if @content_image.save
        format.html { redirect_to @content_image, notice: 'Content image was successfully created.' }
        format.json { render :show, status: :created, location: @content_image }
      else
        format.html { render :new }
        format.json { render json: @content_image.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /content_images/1
  # PATCH/PUT /content_images/1.json
  def update
    respond_to do |format|
      if @content_image.update(content_image_params)
        format.html { redirect_to @content_image, notice: 'Content image was successfully updated.' }
        format.json { render :show, status: :ok, location: @content_image }
      else
        format.html { render :edit }
        format.json { render json: @content_image.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /content_images/1
  # DELETE /content_images/1.json
  def destroy
    @content_image.destroy
    respond_to do |format|
      format.html { redirect_to content_images_url, notice: 'Content image was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_content_image
      @content_image = ContentImage.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def content_image_params
      params.require(:content_image).permit(:data)
    end
end
