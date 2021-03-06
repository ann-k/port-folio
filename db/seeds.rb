# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

start = Time.now

Rake::Task['db:drop'].invoke
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
  {name: "Портфолио для работы", description: "Только лучшие проекты. Сначала веб, потом графика."},
  {name: "Портфолио для волонтерства", description: "Вначале социально значимые проекты."},
  {name: "Портфолио для стажировки", description: "Все проекты, в том числе учебные."}
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

#Portfolio Content

@portfolio_content_data = {
   "time": Time.current.to_i,
   "blocks": [
     {
        "type": "header",
        "data": {
          "text": "Название портфолио",
          "level": 1
        }
      },
      {
         "type": "paragraph",
         "data": {
           "text": "Здесь вы можете описать свое портфолио."
         }
      }
   ],
   "version": "2.16.1"
}

def create_portfolio_content(data, portfolio_id)
  Content.create(
    content_data: data,
    contentable_id: portfolio_id,
    contentable_type: Portfolio
  )
end

Portfolio.all.each do |portfolio|
  c = create_portfolio_content(@portfolio_content_data, portfolio.id)
  puts "Content of a portfolio with id #{c.contentable_id} and type #{c.contentable_type} created"
end


#Projects

@projects_names = [
  "Дизайн образовательного сайта",
  "UX-исследование",
  "Банковское приложение",
  "Лендинг для кофейни",
  "Интерфейсы для нового сервиса",
  "Медицинское приложение",
  "Дизайн упаковки",
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

def create_project_in_portfolio(portfolio, project, position)
  portfolio.project_in_portfolios.create(
    project_id: project.id,
    position: position,
  )
end

Portfolio.all.each do |portfolio|
  @position = 1
  20.times do
    project = Project.all.sample
    project_in_certain_portfolios = Portfolio.find(portfolio.id).projects

    unless project_in_certain_portfolios.include?(project)
      if portfolio.user_id == project.user_id
        p = create_project_in_portfolio(portfolio, project, @position)
        puts "Project in portfolio with portfolio id #{p.portfolio_id}, project id #{p.project_id} and position #{p.position} created"
        @position = @position + 1
      end
    end
  end
end


#Resumes

@resumes = [
  {name: "Резюме для работы", description: ""},
  {name: "Резюме для стажировки", description: ""},
  {name: "Резюме для волонтерства", description: "Подробно про мой опыт с волонтерством"}
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
