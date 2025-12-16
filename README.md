# Hi, this is my personal website!

My name is Sai Jayakar Vanam, I am a Master's robotics grad student at Northeastern University. I enjoy working on Autonomous robots, and I also dabble in aerospace and astronomy, hoping to build an iRobot for space ;).

This repo contains the source code to my personal website. 

Checkout my site at: https://Jayakar72.github.io/

## Development

To install dependencies: 
```bash
npm install
```

To run it locally: 
```bash
npm start
```

To build for production:
```bash
npm run build
```

## Deployment

This site is automatically deployed using GitHub Actions. When you push to the `production` branch, it will:

1. Build the Gatsby site
2. Deploy to GitHub Pages
3. Update your live site

## Quality Assurance

### Pull Request Checks
Every Pull Request automatically triggers a build check to ensure:
- Dependencies install correctly
- Gatsby builds successfully
- No breaking changes are introduced

## Manual Deployment

Running this command in your local terminal will deploy your current branch to "main" branch and update gh pages. There is no checks, and forces update immediately

```bash
npm run deploy
```



