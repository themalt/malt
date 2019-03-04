default: help

docker-stop:
	docker-compose -f docker/docker-compose.yml down --remove-orphans

docker-up: docker-stop
	docker-compose -f docker/docker-compose.yml up -d

docker-bash:
	@docker exec -it `docker ps | grep malt_web | awk  '{print $$1}' | head -n 1` bash

help:
	@echo "commands list:"
	@echo "make docker-up - to run docker"
	@echo "make docker-stop - to stop docker"
	@echo "make docker-bash - to run bash in web container"
