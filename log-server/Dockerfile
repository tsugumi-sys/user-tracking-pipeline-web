FROM timberio/vector:0.36.1-debian


# Copy the configuration file from your host to the container's working directory
COPY vector.yaml .

EXPOSE 8686

CMD ["-c", "vector.yaml"]
