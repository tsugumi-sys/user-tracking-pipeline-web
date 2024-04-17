# https://github.com/apache/beam/blob/master/sdks/python/apache_beam/examples/kafkataxi/kafka_taxi.py

import apache_beam as beam
import logging
from apache_beam.io.kafka import ReadFromKafka

logger = logging.getLogger(__name__)


def process_element(element):
    return element.upper()


def print_message(msg):
    logger.info(msg)


kafka_config = {
    "bootstrap_servers": "redpanda-0:9092",
    "topics": ["chat-room"],
    # "group_id": "your_consumer_group_id",
    # Additional configuration options can be added here
}

with beam.Pipeline() as pipeline:
    messages = pipeline | "Read from kafka" >> ReadFromKafka(
        consumer_config={"bootstrap.servers": "redpanda-0:9092"},
        topics=["chat-room"],
    )
    messages | beam.Map(print)
