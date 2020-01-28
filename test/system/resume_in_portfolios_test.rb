require "application_system_test_case"

class ResumeInPortfoliosTest < ApplicationSystemTestCase
  setup do
    @resume_in_portfolio = resume_in_portfolios(:one)
  end

  test "visiting the index" do
    visit resume_in_portfolios_url
    assert_selector "h1", text: "Resume In Portfolios"
  end

  test "creating a Resume in portfolio" do
    visit resume_in_portfolios_url
    click_on "New Resume In Portfolio"

    fill_in "Order", with: @resume_in_portfolio.order
    fill_in "Portfolio", with: @resume_in_portfolio.portfolio_id
    fill_in "Resume", with: @resume_in_portfolio.resume_id
    click_on "Create Resume in portfolio"

    assert_text "Resume in portfolio was successfully created"
    click_on "Back"
  end

  test "updating a Resume in portfolio" do
    visit resume_in_portfolios_url
    click_on "Edit", match: :first

    fill_in "Order", with: @resume_in_portfolio.order
    fill_in "Portfolio", with: @resume_in_portfolio.portfolio_id
    fill_in "Resume", with: @resume_in_portfolio.resume_id
    click_on "Update Resume in portfolio"

    assert_text "Resume in portfolio was successfully updated"
    click_on "Back"
  end

  test "destroying a Resume in portfolio" do
    visit resume_in_portfolios_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Resume in portfolio was successfully destroyed"
  end
end
