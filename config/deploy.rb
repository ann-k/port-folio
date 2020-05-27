# config valid for current version and patch releases of Capistrano
lock "~> 3.14.0"

set :rbenv_type, :user
set :rbenv_ruby, "2.6.3"

set :application, "port-folio"
set :repo_url, "git@github.com:ann-k/port-folio.git"


# Default branch is :master
# ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp
set :branch, "master"

# Default deploy_to directory is /var/www/my_app_name
# set :deploy_to, "/var/www/my_app_name"
set :deploy_to, "/home/deployer/apps/#{fetch :application}"

# Default value for :format is :airbrussh.
# set :format, :airbrussh

# You can configure the Airbrussh format using :format_options.
# These are the defaults.
# set :format_options, command_output: true, log_file: "log/capistrano.log", color: :auto, truncate: :auto

# Default value for :pty is false
set :pty, true

# Default value for :linked_files is []
append :linked_files, "config/database.yml"
append :linked_files, "config/credentials.production.key"
append :linked_files, "config/puma.rb"
# set :linked_files, fetch(:linked_files, []).push("config/database.yml", "config/puma.rb", "config/credentials.production.key")

# Default value for linked_dirs is []
# append :linked_dirs, "log", "tmp/pids", "tmp/cache", "tmp/sockets", "public/system"
append :linked_dirs, "public/system"
append :linked_dirs, "public/uploads"
# set :linked_dirs, fetch(:linked_dirs, []).push("log", "tmp/pids", "tmp/cache", "tmp/sockets", "vendor/bundle", "public/system", "public/uploads")

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

# Default value for local_user is ENV['USER']
# set :local_user, -> { `git config user.name`.chomp }

# Default value for keep_releases is 5
set :keep_releases, 5

# Uncomment the following to require manually verifying the host key before first deploy.
# set :ssh_options, verify_host_key: :secure

set :puma_init_active_record, true
set :puma_conf, -> { File.join(shared_path, "config", "puma.rb") }

namespace :deploy do
  namespace :check do
    before :linked_files, :set_master_key do
      on roles(:app), in: :sequence, wait: 10 do
        unless test("[ -f #{shared_path}/config/credentials.production.key ]")
          upload! 'config/credentials.production.key', "#{shared_path}/config/credentials.production.key"
        end
      end
    end
  end
end


desc "Run rake task on server. Usage example: cap production rake task=import:products"

task :rake do
  on roles(:app), in: :sequence, wait: 5 do
    within release_path do
      with rails_env: :production do
        execute :rake, ENV["task"], "RAILS_ENV=production"
      end
    end
  end
end
