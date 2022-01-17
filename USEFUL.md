# Stop all containers
docker stop `docker ps -qa`

# Remove all containers
docker rm `docker ps -qa`

# Remove all images
docker rmi -f `docker images -qa `

# Remove all volumes
docker volume rm $(docker volume ls -qf)
Example:
docker volume rm $(docker volume ls -qf dangling="true")
otherwise without 'f'

# Remove all networks
docker network rm `docker network ls -q`

# Your installation should now be all fresh and clean.

# The following commands should not output any items:
# docker ps -a
# docker images -a 
# docker volume ls

# The following command show only show the default networks:
# docker network ls


# Inlstaling LTS Node

nvm install node --latest-npm --reinstall-packages-from=node
nvm install --lts --latest-npm --reinstall-packages-from='lts/*'


# Create new component from terminal

npx generate-react-cli component MyComponent


# to check if WebGL is available 
https://github.com/mrdoob/three.js/blob/master/examples/jsm/WebGL.js