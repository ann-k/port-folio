require "application_system_test_case"

class ContentImagesTest < ApplicationSystemTestCase
  setup do
    @content_image = content_images(:one)
  end

  test "visiting the index" do
    visit content_images_url
    assert_selector "h1", text: "Content Images"
  end

  test "creating a Content image" do
    visit content_images_url
    click_on "New Content Image"

    fill_in "Data", with: @content_image.data
    click_on "Create Content image"

    assert_text "Content image was successfully created"
    click_on "Back"
  end

  test "updating a Content image" do
    visit content_images_url
    click_on "Edit", match: :first

    fill_in "Data", with: @content_image.data
    click_on "Update Content image"

    assert_text "Content image was successfully updated"
    click_on "Back"
  end

  test "destroying a Content image" do
    visit content_images_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Content image was successfully destroyed"
  end
end
