# Build Docker image
build:
	docker-compose build

# Spin up container
up:
	docker-compose up -d

# Stop and remove containers
down:
	docker-compose down

# Open a shell to the container
shell-be:
	docker exec --workdir /app -it backend /bin/sh
	#docker-compose run backend /bin/sh

shell-fe:
	docker exec --workdir /app -it frontend /bin/sh
	#docker-compose run frontend /bin/sh

shell-llm:
	docker exec --workdir /root -it llm /bin/bash

load-llm:
	docker exec --workdir /root -it llm ollama pull mistral

npm:
	docker exec --workdir / -it frontend npm $(args)