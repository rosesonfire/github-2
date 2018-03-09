FROM node
COPY package.json /scraper/
COPY package-lock.json /scraper/
COPY dist /scraper/dist
COPY bin /scraper/bin
RUN cd /scraper && npm install --production
ENV NODE_ENV=production
CMD [ "/scraper/bin/start.sh" ]
