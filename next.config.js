const path = require('path')
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['avatars.githubusercontent.com', 'github-readme-stats.vercel.app', 'github-readme-streak-stats.herokuapp.com','github-profile-summary-cards.vercel.app', 'github-profile-trophy.vercel.app'],
    dangerouslyAllowSVG: true,
  }
}