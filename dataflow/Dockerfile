# Use an official Python runtime as a parent image
FROM ubuntu:20.04

# Install OpenJDK-8
RUN apt-get update && \
    apt-get install -y sudo && \
    apt-get install -y software-properties-common && \
    sudo add-apt-repository ppa:openjdk-r/ppa && \
    apt-get install -y openjdk-8-jdk && \
    apt-get install -y ant && \
    apt-get clean;
    
# Fix certificate issues
RUN apt-get update && \
    apt-get install ca-certificates-java && \
    apt-get clean && \
    update-ca-certificates -f;

ENV JAVA_HOME /usr/lib/jvm/java-8-openjdk-amd64/

RUN apt-get install -y python3 python3-pip

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir apache-beam

# Run pipeline.py when the container launches
CMD ["python3", "pipeline.py"]
