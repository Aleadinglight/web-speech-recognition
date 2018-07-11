# Web Speech Recognition

A website for speech recognition implement with API from Google. Current version of the website is only supported in Chrome web browser. Phone compality is not supported.
 
To website: https://aleadinglight.github.io/web-speech-recognition/

## Requirements:
- Google Chrome
- Vue.js 2.0
- Jekyll

## Desmontration 

A live desmontration of the website can be found [here](https://github.com/Aleadinglight/web-speech-recognition/blob/master/assets/video/webspeech.mp4).

## Locally run:

You can run this website locally following these steps. The website must be running with `https` trusted certificate (meaning that you should put it in `var/www/html` to have it run properly if you dont have one).

```bash
# Clone the repository
git clone https://github.com/Aleadinglight/web-speech-recognition

# cd into directory
cd web-speech-recognition

# run the web locally
bundle exec jekyll serve
```

Then visit https://localhost:4000. 