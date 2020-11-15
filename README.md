Running in development:
\$ npm run dev
Then you can go to http://localhost:8080 in your browser.

Build:
\$ npm run build

Running in Docker:
\$ npm run build

then:
\$ docker build -t password-generator .

You can start your container exposing external port 8080:
\$ docker run --name some-container -d -p 8080:80 password-generator

Then you can hit http://localhost:8080 in your browser.
