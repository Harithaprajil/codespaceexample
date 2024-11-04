FROM ubuntu:24.04
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends bundler

# Install base dependencies
RUN apt-get update && apt-get install -y -q --no-install-recommends \
        apt-transport-https \
        build-essential \
        ca-certificates \
        curl \
        git \
        libssl-dev \
        wget

# Install NVM (Node Version Manager)
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash

# Set NVM and Node.js environment variables
ENV NVM_DIR=/root/.nvm
ENV NODE_VERSION=18.0.0
RUN ["/bin/bash", "-c", "source $NVM_DIR/nvm.sh && nvm install $NODE_VERSION"]

# Set the default shell to bash and ensure NVM is loaded
SHELL ["/bin/bash", "--login", "-c"]
RUN echo "source $NVM_DIR/nvm.sh" >> /root/.bashrc

# Verify installation
CMD ["node", "--version"]
