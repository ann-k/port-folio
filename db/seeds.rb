# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

start = Time.now

# Reset Database
Portfolio.delete_all
ProjectInPortfolio.delete_all
Resume.delete_all
Project.delete_all
Content.delete_all
User.delete_all
# Rake::Task['db:drop'].invoke
Rake::Task['db:create'].invoke
Rake::Task['db:migrate'].invoke

#Users

@users = [
  { email: "user@user.com",
    name: "cool_user" },
  { email: "test@test.com",
    name: "nice_user" }
]

def create_user(user)
  password = "password"

  User.create(
    email:    user[:email],
    name:    user[:name],
    password: password,
    password_confirmation: password
  )
end

@users.each do |user|
  u = create_user(user)
  puts "User with email #{u.email} created"
end

@user_ids = [1, 2]


#Portfolios

@portfolios = [
  {name: "Веб-дизайн портфолио", description: "На первом месте проекты веб-дизайна. Только мобильный дизайн в конце. Без старых графических проектов."},
  {name: "Дизайн мобильных приложений", description: "Только проекты, где есть мобильный дизайн."},
  {name: "Лендинги, презентации, графика", description: "На первом месте лендинги, презентации, графика. Весь веб в конце. Без старых проектов."}
]

def create_portfolio(portfolio, user_id)
  Portfolio.create(
    name:    portfolio[:name],
    description: portfolio[:description],
    user_id: user_id
  )
end

User.all.each do |user|
  5.times do
    portfolio = @portfolios.sample

    p = create_portfolio(portfolio, user.id)
    puts "Portfolio with user id #{p.user_id} and name #{p.name} created"
  end
end


#Projects

@projects_names = [
  "Сайт",
  "Приложение",
  "Лендинг",
  "Книга",
  "Сервис",
  "Журнал",
  "Фото-проект",
  "Фирменный стиль"
]

def create_project(name, user_id)
  Project.create(
    name: name,
    user_id: user_id
  )
end

User.all.each do |user|
  @projects_names.each { |projects_name|
    p = create_project(projects_name, user.id)
    puts "Project with user id #{p.user_id} and name #{p.name} created"
  }
end

#Project Content

@project_content_data = {
   "time": Time.current.to_i,
   "blocks": [
     {
        "type": "header",
        "data": {
          "text": "Название проекта",
          "level": 1
        }
      },
      {
         "type": "paragraph",
         "data": {
           "text": "Здесь вы можете описать свой проект. Добавляйте текст, ссылки, картинки и видео."
         }
      }
   ],
   "version": "2.16.1"
}

def create_project_content(data, project_id)
  Content.create(
    content_data: data,
    contentable_id: project_id,
    contentable_type: Project
  )
end

Project.all.each do |project|
  c = create_project_content(@project_content_data, project.id)
  puts "Content of a project with id #{c.contentable_id} and type #{c.contentable_type} created"
end


#Project in portfolio

@portfolios = Portfolio.all

def create_project_in_portfolio(portfolio, project_id, order)
  portfolio.project_in_portfolios.create(
    project_id: project_id,
    order: order,
  )
end


Portfolio.all.each do |portfolio|
  @order = 1
  5.times do
    project = Project.all.sample
    project_in_certain_portfolios = Portfolio.find(portfolio.id).projects

    unless project_in_certain_portfolios.include?(project)
      p = create_project_in_portfolio(portfolio, project.id, @order)
      puts "Project in portfolio with portfolio id #{p.portfolio_id}, project id #{p.project_id} and order #{p.order} created"
      @order = @order + 1
    end
  end
end


#Resumes

@resumes = [
  {name: "Веб резюме", description: "Для веб-дизайна"},
  {name: "Граф резюме", description: "Для граф дизайна"},
  {name: "Код резюме", description: "Для программирования"}
]

def create_resume(resume, user_id)
  Resume.create(
    name:    resume[:name],
    description: resume[:description],
    user_id: user_id
  )
end

User.all.each do |user|
  5.times do
    resume = @resumes.sample

    r = create_resume(resume, user.id)
    puts "Resume with user id #{r.user_id} and name #{r.name} created"
  end
end


#Resume Content

@resume_content_data = {
   "time": Time.current.to_i,
   "blocks": [
     {
        "type": "header",
        "data": {
          "text": "Название резюме",
          "level": 1
        }
      },
      {
         "type": "paragraph",
         "data": {
           "text": "Здесь вы можете описать свое резюме."
         }
      }
   ],
   "version": "2.16.1"
}

def create_resume_content(data, resume_id)
  Content.create(
    content_data: data,
    contentable_id: resume_id,
    contentable_type: Resume
  )
end

Resume.all.each do |resume|
  c = create_resume_content(@resume_content_data, resume.id)
  puts "Content of a resume with id #{c.contentable_id} and type #{c.contentable_type} created"
end


#Resume in portfolio

@portfolios = Portfolio.all

def create_resume_in_portfolio(portfolio, resume_id)
  portfolio = @portfolios.sample

  portfolio.resume_in_portfolios.create(
    resume_id: resume_id
  )
end

Portfolio.all.each do |portfolio|
  2.times do
    resume = Resume.all.sample
    resume_in_certain_portfolios = Portfolio.find(portfolio.id).resumes

    unless resume_in_certain_portfolios.include?(resume)
      p = create_resume_in_portfolio(portfolio, resume.id)
      puts "Resume in portfolio with portfolio id #{p.portfolio_id} and resume id #{p.resume_id} created"
    end
  end
end


# Contents ??

# after :projects do
#   project = Project.find_by_name('Calculus')
#   project.contents.create(first_name: 'Patrick', last_name: 'Lewis')
# end

finish = Time.now
duration = finish - start
puts "Task completed in #{duration}"
