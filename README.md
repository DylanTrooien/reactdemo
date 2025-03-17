
# React Demo
An ai chat interface to discuss.
This project uses Docker containers to run the frontend, backend, and an additional service, while using a Makefile to simplify common tasks.
## Table of Contents
- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Makefile Commands](#makefile-commands)
    - [Build the Docker Images](#build-the-docker-images)
    - [Spin Up Containers](#spin-up-containers)
    - [Stop and Remove Containers](#stop-and-remove-containers)
    - [Open a Shell in the Containers](#open-a-shell-in-the-containers)
    - [Other Commands](#other-commands)

- [Additional Information](#additional-information)
- [Troubleshooting](#troubleshooting)

## Prerequisites
Before running the project, make sure you have the following installed on your development machine:
- **Docker**: To build and run Docker images.
- **Docker Compose**: For orchestrating multi-container Docker applications.
- **Make**: To simplify common commands via the Makefile.

## Project Structure
``` 
project/
│
├── backend/    # Contains backend source code
├── frontend/   # Contains frontend source code
├── llm/        # Contains llm models
├── compose.yml # Docker Compose configuration defining the services
├── Makefile    # Makefile with commands for building and managing containers
```

## Getting Started
1. **Clone the Repository**
   Clone the repository to your local machine:

2. **Configure the Environment**
   Make sure Docker and Docker Compose are installed and running. You might need to configure environment variables or settings depending on your project; refer to the project documentation for details.

## Makefile Commands
The Makefile defines several commands to help you manage Docker containers as well as to run commands inside them. Here’s an explanation of each available target:
### Build the Docker Images
To build the Docker images for your services (frontend, backend, etc.), run:
``` bash
make build
```
This command executes `docker-compose build` which builds images as defined in your docker-compose file.
### Spin Up Containers
To start up the containers in detached mode (running in the background):
``` bash
make up
```
This command runs `docker-compose up -d`, which brings up all specified containers as services.
### Stop and Remove Containers
When you need to stop and clean up the running containers, execute:
``` bash
make down
```
This stops running containers and removes them along with their networks (as defined in the docker-compose configuration).
### Open a Shell in the Containers
For direct access to the containers, the Makefile provides several commands:
- **Backend Shell**:
  Enter the backend container’s shell with:
``` bash
  make shell-be
```
This command opens a shell session in the backend container with `/app` as the working directory.
- **Frontend Shell**:
  To access the frontend container, run:
``` bash
  make shell-fe
```
This command opens a shell session in the frontend container, also setting `/app` as the working directory.
- **LLM Container Shell**:
  If you need to work with the LLM container, run:
``` bash
  make shell-llm
```
This opens a bash shell session in the LLM container with `/root` as the working directory.
### Other Commands
- **Load an LLM Model**:
  If your project requires a specific language model, the following command retrieves it (e.g., pulling the "mistral" model):
``` bash
  make load-llm
```
- **Run npm Commands**:
  To execute npm commands within the frontend container, use the following pattern:
``` bash
  make npm args="your-npm-command-here"
```
Replace `"your-npm-command-here"` with any npm command (for instance, `install`, `run build`, etc.). This command executes npm in the context of the frontend container.
## Additional Information
- **Docker Compose File**:
  The `docker-compose.yml` defines the services available in the project. Refer to this file for more details on port mappings, environment variables, and volume mount configurations.
- **Configuration Files**:
  Additional configuration files and environment-specific settings may exist; ensure to adjust them as required by your development environment.
- **Further Documentation**:
  More detailed documentation could be available in a `docs/` directory or a dedicated Wiki. Please refer to these sources for deeper insights into the project design and workflow.

## Troubleshooting
- **Container Issues**:
  If a container fails to start, check the container logs:
``` bash
  docker-compose logs [service_name]
```
Replace `[service_name]` with the name of the specific service (e.g., `backend`, `frontend`, etc.).
- **Build Failures**:
  Ensure your Dockerfiles are correct and that all required files are present in the corresponding directories.
- **Permission Issues**:
  If you encounter permission errors, verify the file permissions and consider running Docker commands with appropriate privileges.
