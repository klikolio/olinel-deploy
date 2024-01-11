Setup Git & Github
1. Install Git from https://git-scm.com on your computer
2. Install Github CLI from https://cli.github.com on your computer
3. Authenticate your Github CLI with your Github account using "gh auth login"
4. Open terminal on the template directory and initilize repository with "git init"

Vercel
1. Install vercel CLI with "npm install -g vercel"
2. Create or login vercel account to the CLI with "vercel login"
3. Add production environment for optimized build "vercel env add NODE_ENV "production" --prod"
4. Deploy project with "vercel deploy --prod" and keep all configuration default.  You can see all vercel "vercel.json"
5. After deployment completed you can see the URL and you can check your project on Vercel dashboard

Github Pages

Heroku
1. npm install -g heroku
2. heroku login
3. heroku create
4. git push heroku master
Netlify